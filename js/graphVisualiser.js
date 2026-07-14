import { renderLinks, renderContacts, loadJson } from "./shared.js";

async function getCommits(){
    let page = 1;
    const responses = [];

    while (true) {
        const response = await fetch(
            `https://api.github.com/repos/WhiteEyedFly/portfolio/commits?per_page=100&page=${page}`
        );
        if (!response.ok) break;
        const commitList = await response.json();
        if (!commitList || commitList.length === 0) break;
        responses.push(...commitList);
        page += 1;
    }

    if (responses.length === 0) throw new Error("Empty API response");

    return responses.map(commit => ({
        sha: commit.sha,
        message: commit.commit.message,
        date: commit.commit.author.date,
        author: commit.commit.author.name,
        parents: commit.parents.map(parent => parent.sha)
    }));
    /*
    catch (e) {
        // Fall back to stored if rate limit hit
        console.warn("GitHub API rate limit hit or offline. Loading local mock commit timeline data.");
        return backUpCommits;
    }
        */
}

async function getBranches(){
    const response = await fetch("https://api.github.com/repos/WhiteEyedFly/portfolio/branches?per_page=100&page=1");
    if (response.ok){
        const branchList = await response.json();

        if (branchList || branchList.length !== 0){
            return branchList
        }
    }
    else {
        console.log(response)
    }
}

function findChildren(commit, commits){
    const sha = commit.sha
    commit.children = []

    for (const com of commits){
        if (com.parents.includes(sha)){
            commit.children.push(com.sha)
        }
    }
}

function assignBranches(commits, branches) {
    const commitMap = new Map(commits.map(c => [c.sha, c]));

    // Everything starts on main
    for (const commit of commits) {
        commit.branches = ["main"];
    }

    for (const branch of branches) {
        if (branch.name === "main") continue;

        let current = commitMap.get(branch.commit.sha);

        while (current) {
            current.branches = [branch.name];

            if (current.parents.length !== 1) {
                break;
            }

            const parent = commitMap.get(current.parents[0]);
            if (!parent) break;

            if (parent.children.length > 1) {
                break;
            }

            current = parent;
        }
    }
}

function findPosition(commit) {
    let date = commit.date
    const split1 = date.split("-")
    const split2 = split1[2].split("T")
    const split3 = split2[1].split(":")

    const year =    parseInt(split1[0])
    const month =   parseInt(split1[1])
    const day =     parseInt(split2[0])
    const hour =    parseInt(split3[0])
    const minute =  parseInt(split3[1])
    const second =  parseInt(split3[2].replace("Z", ""))

    const position = second + 60*(minute + 60*(hour + 24*(day + 30.44*(month + 12*year))))

    commit.position ??= Int16Array;
    commit.position = position
}

async function main(){
    const [contacts, pageList, commitsBackup, branchesBackup] = await Promise.all([
        loadJson("../data/contacts.json"),
        loadJson("../data/otherPages.json"),
        loadJson("../data/commitsBackup.json"),
        loadJson("../data/branchesBackup.json")
    ]);
    renderContacts(contacts);
    renderLinks(pageList);

    console.log(document.querySelector("#graphVisualiser"));

    // Pulling from git

    let commits = commitsBackup
    let branches = branchesBackup
    var branchNames = ["main"]

    for (const branch of branches){
        if (!branchNames.includes(branch.name)){
            branchNames.push(branch.name)
        }
    }

    // Data validation

    const commitMap = new Map(commits.map(c => [c.sha, c]));
    const branchHeads = new Map(branches.map(b => [b.name, b.commit.sha]));

    for (const commit of commits){
        findChildren(commit, commits)
    }
    
    assignBranches(commits, branches)

    for (const commit of commits){
        findPosition(commit)
    }
    console.log(commits)
    console.log(branches)

    // Positioning

    const positions = d => d.position;

    commits.sort((a, b) => positions(b) - positions(a));

    const newestCommit = d3.max(commits, positions);
    const oldestCommit = d3.min(commits, positions);
    
    const totalTimeDiff = Math.abs(newestCommit - oldestCommit);

    const baseHeight = totalTimeDiff * 30;
    const computedHeight = baseHeight + (commits.length * 20);

    // ------------
    // Construction
    // ------------

    const targetElement = d3.select(".graphContainer").html("");
    
    const svg = targetElement.append("svg")
        .attr("width", "100%")
        .attr("height", `${computedHeight}px`)

    const getBranchXCoordinate = (d) => {
        const branch = d.branches && d.branches.length
            ? d.branches[0]
            : "main";

        return 30 + branchNames.indexOf(branch) * 40;
    };

    const yScale = d3.scaleTime()
        .domain([newestCommit, oldestCommit]) 
        .range([60, computedHeight]);

    const getCommitYCoordinate = (d) => 30*(1 + commits.findIndex(commit => commit === d));

    // Edges
    commits.forEach((commit) => {
        const startX = getBranchXCoordinate(commit);
        const startY = getCommitYCoordinate(commit);

        commit.parents.forEach(parentSha => {
            const parentIndex = commits.findIndex(c => c.sha === parentSha);

            if (parentIndex !== -1) {
                const endX = getBranchXCoordinate(commits[parentIndex]);
                const endY = getCommitYCoordinate(commits[parentIndex]);

                svg.append("line")
                    .attr("x1", endX)
                    .attr("y1", startY)
                    .attr("x2", endX)
                    .attr("y2", endY)
                    .attr("stroke", "#484848")
                    .attr("stroke-width", 2.5)
                    .attr("opacity", 0.7);

                if (startX !== endX){
                    svg.append("line")
                        .attr("x1", startX)
                        .attr("y1", startY)
                        .attr("x2", endX)
                        .attr("y2", startY)
                        .attr("stroke", "#484848")
                        .attr("stroke-width", 2.5)
                        .attr("opacity", 0.7);
                }
            }
        });
    });

    // Nodes
    const commitGroups = svg.append("g")
        .selectAll(".commit-node")
        .data(commits)
        .join("g")
        .classed("commit-node", true);

    commitGroups.append("circle")
        .attr("cx", d => getBranchXCoordinate(d))
        .attr("cy", d => getCommitYCoordinate(d))
        .attr("r", 6.5)
        .attr("fill", d => {
            const b = d.branches || [];
            if (b.includes("main") || b.includes("master")) return "#95a472"; 
            return b.length ? "#4a90e2" : "#757575";
        })
        .attr("stroke", "#484848")
        .attr("stroke-width", 2);

    commitGroups.append("text")
        .attr("x", 60 + (branchNames.length * 40) + 20) 
        .attr("y", d => getCommitYCoordinate(d) + 5)
        .attr("fill", "#1a1d13")
        .style("font-family", "sans-serif")
        .style("font-size", "12px")
        .style("font-weight", "700")
        .text(d => {
            const cleanDate = new Date(d.date).toLocaleDateString(undefined, {month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'});
            const displayMsg = d.message;
            return `[${cleanDate}] ${displayMsg}`;
        });

    commitGroups.append("title")
        .text(d => `Commit SHA: ${d.sha.slice(0, 7)}\nAuthor: ${d.author}\nTimestamp: ${d.date}\nMessage: ${d.message}`);
}

main()

// Come back to this to make spacing nicer:
// Have a gap for each day without a commit and have all commits from one day printed together, a set distance apart
// Convert graph visualiser to TS