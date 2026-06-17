async function getCommits() {
    var page = 1
    var responses = []

    while(true){
        var response = await fetch(
        `https://api.github.com/repos/WhiteEyedFly/portfolio/commits?per_page=100&page=${page}`);

        var commitList = await response.json();

        if(commitList.length === 0){
            break
        }
        responses.push(...commitList)
        page += 1
    }

    return responses.map(commit => ({
        sha: commit.sha,
        message: commit.commit.message,
        date: commit.commit.author.date.slice(0, 10),
        author: commit.commit.author.name,
        parents: commit.parents.map(parent => parent.sha)
    }));
}

async function getBranches() {
    const res = await fetch(
        "https://api.github.com/repos/WhiteEyedFly/portfolio/branches");

    if (!res.ok) {
        throw new Error(`GitHub error ${res.status}: ${await res.text()}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
        throw new Error("Expected branch array but got: " + JSON.stringify(data));
    }

    return data;
}

async function getBranchCommits(branchName) {
    var page = 1
    var responses = []

    while(true){
        var response = await fetch(
        `https://api.github.com/repos/WhiteEyedFly/portfolio/commits?sha=${branchName}&per_page=100&page=${page}`);

        var branchList = await response.json();

        if(branchList.length === 0){
            break
        }
        responses.push(...branchList)
        page += 1
    }

    return responses;
}

function markReachable(commitSha, branchName, map, visited = new Set()) {
    if (!commitSha || visited.has(commitSha)) return;
    visited.add(commitSha);

    const commit = map.get(commitSha);
    if (!commit) return;

    commit.branches ??= [];
    
    if (!commit.branches.includes(branchName)) {
        commit.branches.push(branchName);
    }

    for (const parent of commit.parents) {
        markReachable(parent, branchName, map, visited);
    }
}

async function main(){
    const branches = await getBranches();
    const commits = await getCommits();

    const commitMap = new Map(commits.map(c => [c.sha, c]));
    const branchHeads = new Map(branches.map(b => [b.name, b.commit.sha]));

    for (const [branchName, headSha] of branchHeads) {
        markReachable(headSha, branchName, commitMap);
    }

    const container = d3.select("#graphVisualiser")
    .classed("container", true);

    const parseDate = d => new Date(d.date);

    const xScale = d3.scaleTime()
    .domain(d3.extent(commits, parseDate))
    .range([0, 250]);

    const bars = container
    .selectAll(".commit")
    .data(commits)
    .join("rect")
    .classed("commit", true)
    .attr("x", d => xScale(parseDate(d)))
    .attr("y", 50)
    .attr("height", 2)
    .attr("width", 2)
    .attr("fill", d => {
        const b = d.branches || [];
        return b.length ? "steelblue" : "gray";
    })
}

main()