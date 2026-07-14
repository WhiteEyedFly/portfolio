import { renderLinks, renderContacts, loadJson } from "./shared.js";

async function mainContributors() {
    const [contacts, pageList, contributors] = await Promise.all([
        loadJson("../data/contacts.json"),
        loadJson("../data/otherPages.json"),
        loadJson("../data/contributors.json")
    ]);

    renderContacts(contacts);
    renderLinks(pageList);
    renderContributors(contributors);
}

// Builds the full contributor list as one string and writes it to the DOM
// once, instead of appending one contributor at a time via innerHTML += in a
// loop.
function renderContributors(contributors) {
    const container = document.querySelector(".contributorsList");
    if (!container) return;
    container.innerHTML = contributors
        .map(contributor => `<div class="contributor"><div><p>${contributor.name}</p><a href="${contributor.git}">Github</a></div></div>`)
        .join("");
}

mainContributors();
