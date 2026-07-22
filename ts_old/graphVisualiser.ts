import { renderLinks, loadJson } from "./shared.js";
import type { Page, Commit, Branch } from "./types.js";

// d3 is loaded globally via a <script> tag rather than an ES module import,
// and this project doesn't have @types/d3 installed, so it's declared here
// as `any`. Swap this for `import * as d3 from "d3";` if @types/d3 gets
// added later.
declare const d3: any;

// ---- Raw GitHub REST API response shapes ----
// These only describe the fields getCommits()/getBranches() actually read
// off the API response; they're not the full GitHub API schema.
interface GitHubApiCommitParent {
    sha: string;
}

interface GitHubApiCommitAuthor {
    name: string;
    date: string;
}

interface GitHubApiCommitDetail {
    message: string;
    author: GitHubApiCommitAuthor;
}

interface GitHubApiCommit {
    sha: string;
    commit: GitHubApiCommitDetail;
    parents: GitHubApiCommitParent[];
}

// The API only gives us sha/message/date/author/parents. children, branches,
// and position get filled in afterwards by findChildren(), assignBranches(),
// and findPosition() respectively before anything else reads them - same as
// in the original JS, just made explicit here.
type PartialCommit = Omit<Commit, "children" | "branches" | "position">;

async function getCommits(): Promise<Commit[]> {
    let page = 1;
    const responses: GitHubApiCommit[] = [];

    while (true) {
        const response = await fetch(
            `https://api.github.com/repos/WhiteEyedFly/portfolio/commits?per_page=100&page=${page}`
        );
        if (!response.ok) break;
        const commitList = await response.json() as GitHubApiCommit[];
        if (!commitList || commitList.length === 0) break;
        responses.push(...commitList);
        page += 1;
    }

    if (responses.length === 0) throw new Error("Empty API response");

    const partial: PartialCommit[] = responses.map(commit => ({
        sha: commit.sha,
        message: commit.commit.message,
        date: commit.commit.author.date,
        author: commit.commit.author.name,
        parents: commit.parents.map(parent => parent.sha)
    }));

    return partial as Commit[];
    /*
    catch (e) {
        // Fall back to stored if rate limit hit
        console.warn("GitHub API rate limit hit or offline. Loading local mock commit timeline data.");
        return backUpCommits;
    }
        */
}

async function getBranches(): Promise<Branch[] | undefined> {
    const response = await fetch("https://api.github.com/repos/WhiteEyedFly/portfolio/branches?per_page=100&page=1");
    if (response.ok) {
        const branchList = await response.json() as Branch[] | null;

        if (branchList && branchList.length !== 0) {
            return branchList;
        }
    } else {
        console.log(response);
    }
    return undefined;
}

function findChildren(commit: Commit, commits: Commit[]): void {
    const sha = commit.sha;
    commit.children = [];

    for (const com of commits) {
        if (com.parents.includes(sha)) {
            commit.children.push(com.sha);
        }
    }
}

function assignBranches(commits: Commit[], branches: Branch[]): void {
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

function findPosition(commit: Commit): void {
    const date = commit.date;
    const split1 = date.split("-");
    const split2 = split1[2].split("T");
    const split3 = split2[1].split(":");

    const year = parseInt(split1[0]);
    const month = parseInt(split1[1]);
    const day = parseInt(split2[0]);
    const hour = parseInt(split3[0]);
    const minute = parseInt(split3[1]);
    const second = parseInt(split3[2].replace("Z", ""));

    const position = second + 60 * (minute + 60 * (hour + 24 * (day + 30.44 * (month + 12 * year))));

    // NOTE: the original JS had `commit.position ??= Int16Array;` here, which
    // assigned the Int16Array *constructor* to a number field - not
    // meaningful at runtime, and not something TypeScript's number type will
    // accept. It's replaced with a plain numeric default; either way the
    // very next line immediately overwrites it, so behaviour is unchanged.
    commit.position ??= 0;
    commit.position = position;
}

async function main(): Promise<void> {
    const [pageList, commitsBackup, branchesBackup] = await Promise.all([
        loadJson<Page[]>("../data/otherPages.json"),
        loadJson<Commit[]>("../data/commitsBackup.json"),
        loadJson<Branch[]>("../data/branchesBackup.json")
    ]);
    renderLinks(pageList);

    console.log(document.querySelector("#graphVisualiser"));

    // Pulling from git

    const commits = commitsBackup;
    const branches = branchesBackup;
    const branchNames = ["main"];

    for (const branch of branches) {
        if (!branchNames.includes(branch.name)) {
            branchNames.push(branch.name);
        }
    }

    // Data validation

    const commitMap = new Map(commits.map(c => [c.sha, c]));
    const branchHeads = new Map(branches.map(b => [b.name, b.commit.sha]));

    for (const commit of commits) {
        findChildren(commit, commits);
    }

    assignBranches(commits, branches);

    for (const commit of commits) {
        findPosition(commit);
    }
    console.log(commits);
    console.log(branches);

    // Positioning

    const positions = (d: Commit) => d.position;

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
        .attr("height", `${computedHeight}px`);

    const getBranchXCoordinate = (d: Commit): number => {
        const branch = d.branches && d.branches.length
            ? d.branches[0]
            : "main";

        return 30 + branchNames.indexOf(branch) * 40;
    };

    const yScale = d3.scaleTime()
        .domain([newestCommit, oldestCommit])
        .range([60, computedHeight]);

    const getCommitYCoordinate = (d: Commit): number => 30 * (1 + commits.findIndex(commit => commit === d));

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

                if (startX !== endX) {
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
        .attr("cx", (d: Commit) => getBranchXCoordinate(d))
        .attr("cy", (d: Commit) => getCommitYCoordinate(d))
        .attr("r", 6.5)
        .attr("fill", (d: Commit) => {
            const b = d.branches || [];
            if (b.includes("main") || b.includes("master")) return "#95a472";
            return b.length ? "#4a90e2" : "#757575";
        })
        .attr("stroke", "#484848")
        .attr("stroke-width", 2);

    commitGroups.append("text")
        .attr("x", 60 + (branchNames.length * 40) + 20)
        .attr("y", (d: Commit) => getCommitYCoordinate(d) + 5)
        .attr("fill", "#1a1d13")
        .style("font-family", "sans-serif")
        .style("font-size", "12px")
        .style("font-weight", "700")
        .text((d: Commit) => {
            const cleanDate = new Date(d.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
            const displayMsg = d.message;
            return `[${cleanDate}] ${displayMsg}`;
        });

    commitGroups.append("title")
        .text((d: Commit) => `Commit SHA: ${d.sha.slice(0, 7)}\nAuthor: ${d.author}\nTimestamp: ${d.date}\nMessage: ${d.message}`);
}

main();

// Come back to this to make spacing nicer:
// Have a gap for each day without a commit and have all commits from one day printed together, a set distance apart
