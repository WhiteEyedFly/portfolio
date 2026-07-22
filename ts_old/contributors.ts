import { renderLinks, loadJson } from "./shared.js";
import type { Page, Contributor } from "./types.js";

async function mainContributors(): Promise<void> {
    const [pageList, contributors] = await Promise.all([
        loadJson<Page[]>("../data/otherPages.json"),
        loadJson<Contributor[]>("../data/contributors.json")
    ]);

    renderLinks(pageList);
    renderContributors(contributors);
}

// Builds the full contributor list as one string and writes it to the DOM
// once, instead of appending one contributor at a time via innerHTML += in a
// loop.
function renderContributors(contributors: Contributor[]): void {
    const container = document.querySelector(".contributorsList");
    if (!container) return;
    container.innerHTML = contributors
        .map(contributor => `<div class="contributor"><div><p>${contributor.name}</p><a href="${contributor.git}">Github</a></div></div>`)
        .join("");
}

mainContributors();
