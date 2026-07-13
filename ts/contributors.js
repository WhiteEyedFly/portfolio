import { makeLink, loadJson } from "./shared.js";

async function mainContributors(){
    const pageList = await loadJson("../data/otherPages.json")
    const contributors = await loadJson("../data/contributors.json")

    pageList.forEach(makeLink);
    contributors.forEach(addContributor);
};

async function addContributor(contributor) {
    const contributors = document.querySelector(".contributorsList");
    if (!contributors)
        return;
    contributors.innerHTML += `<div class="contributor"><div><p>${contributor.name}</p><a href="${contributor.git}">Github</a></div></div>`;
};

mainContributors();
