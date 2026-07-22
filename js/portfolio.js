// Necessary data
import { renderLinks, renderContacts, loadJson } from "./shared.js";
const DATA_PATHS = {
    contacts: "../data/contacts.json",
    otherPages: "../data/otherPages.json",
    projects: "../data/projects.json",
    experience: "../data/experience.json",
    education: "../data/education.json",
    skills: "../data/skills.json"
};
let pageList = [];
let projectList = [];
let experienceList = [];
let educationList = [];
let skillsList = [];
async function loadData() {
    // Fetch all six files in parallel rather than one after another.
    const [contacts, pages, projects, experience, education, skills] = await Promise.all([
        loadJson(DATA_PATHS.contacts),
        loadJson(DATA_PATHS.otherPages),
        loadJson(DATA_PATHS.projects),
        loadJson(DATA_PATHS.experience),
        loadJson(DATA_PATHS.education),
        loadJson(DATA_PATHS.skills)
    ]);
    renderContacts(contacts);
    pageList = pages;
    projectList = projects;
    experienceList = experience;
    educationList = education;
    skillsList = [...skills].sort();
    // Pre-sort each item's skills ONCE at load time instead of re-sorting on
    // every render call.
    for (const item of [...projectList, ...experienceList]) {
        item.skills = [...item.skills].sort();
    }
}
const dom = {
    skillsFilter: null,
    projects: null,
    experiences: null,
    educations: null,
    searchInput: null,
    floater: null
};
function cacheDom() {
    dom.skillsFilter = document.querySelector(".skillsList");
    dom.projects = document.querySelector(".projectList");
    dom.experiences = document.querySelector(".experienceList");
    dom.educations = document.querySelector(".educationList");
    dom.searchInput = document.getElementById("search");
    dom.floater = document.querySelector(".floater");
}
// ---- Pure string-builders (no DOM writes) ----
// Building HTML as strings and writing it to the DOM once per container
// (instead of appending via innerHTML += in a loop) avoids the O(n^2) cost of
// re-serialising/re-parsing the whole growing subtree on every iteration.
function skillButtonsHtml(skills, btnClass) {
    let html = "";
    for (let i = 0; i < skills.length; i++) {
        html += `<button class="${btnClass}" onclick="buttonSearch('${skills[i]}')">${skills[i]}</button>`;
    }
    return html;
}
function projectHtml(project, index) {
    const image = project.image === "../assets/projectimages/.png"
        ? "../assets/projectimages/Placeholder.png"
        : project.image;
    return `<label class="project" data-index="${index}"><input type="checkbox" class="cb">` +
        `<div class="projImg"><img pfp src="${image}" alt="Project photo"></div>` +
        `<div class="skillsList">${skillButtonsHtml(project.skills, "projSkill")}</div>` +
        `<p class="title">${project.title}</p></label>`;
}
function experienceHtml(experience) {
    const image = experience.image === "../assets/experienceimages/.png"
        ? "../assets/projectimages/Placeholder.png"
        : experience.image;
    return `<div class="box"><div class="expSeperator"><div><p>${experience.dates}</p><p class="title">${experience.title}</p>` +
        `<div class="skillsList">${skillButtonsHtml(experience.skills, "projSkill")}</div>` +
        `<p class=subtext>${experience.description}</p></div>` +
        `<div class="expImage"><img pfp src="${image}" alt="Project photo"></div></div></div>`;
}
function educationHtml(education) {
    const image = education.image === "../assets/educationimages/.png"
        ? "../assets/projectimages/Placeholder.png"
        : education.image;
    return `<div class="box"><div class="eduSeperator"><div class="eduImage"><img pfp src="${image}" alt="Project photo"></div></div>` +
        `<p>${education.years}</p><p class="title">${education.course}</p>` +
        `<p>${education.place}</p><p class=subtext>${education.description}</p></div>`;
}
// ---- Render functions (single DOM write per list) ----
function renderSkillsFilter() {
    if (!dom.skillsFilter)
        return;
    dom.skillsFilter.innerHTML = skillButtonsHtml(skillsList, "skill");
}
function renderProjects(list) {
    if (!dom.projects)
        return;
    dom.projects.innerHTML = list.map(([p, i]) => projectHtml(p, i)).join("");
}
function renderExperiences() {
    if (!dom.experiences)
        return;
    dom.experiences.innerHTML = experienceList.map(experienceHtml).join("");
}
function renderEducations() {
    if (!dom.educations)
        return;
    dom.educations.innerHTML = educationList.map(educationHtml).join("");
}
async function main() {
    cacheDom();
    try {
        await loadData();
    }
    catch (err) {
        console.error("Could not load portfolio data:", err);
        if (dom.projects) {
            dom.projects.innerHTML = `<p class="error">Sorry, something went wrong loading this content.</p>`;
        }
        return;
    }
    renderSkillsFilter();
    renderLinks(pageList);
    clearProjectFilter();
    renderExperiences();
    renderEducations();
    initDrag();
}
// ---- Search / filter ----
// Single shared implementation used by both the text search box and the
// clickable skill/title buttons (previously duplicated almost verbatim).
function projectMatches(project, termUpper) {
    if (termUpper === "")
        return true;
    if (project.title.toUpperCase().includes(termUpper))
        return true;
    for (let j = 0; j < project.skills.length; j++) {
        if (project.skills[j].toUpperCase().includes(termUpper))
            return true;
    }
    return false;
}
document.getElementById("clear-search")
    ?.addEventListener("click", clearProjectFilter);
function clearProjectFilter() {
    renderProjects(projectList.map((p, i) => [p, i]));
}
function filterProjects(term) {
    const termUpper = term.toUpperCase();
    const matches = [];
    for (let i = 0; i < projectList.length; i++) {
        if (projectMatches(projectList[i], termUpper))
            matches.push([projectList[i], i]);
    }
    renderProjects(matches);
}
window.searcher = function searcher() {
    if (!dom.searchInput)
        return;
    filterProjects(dom.searchInput.value);
};
window.buttonSearch = function buttonSearch(skill) {
    filterProjects(skill);
};
// ---- Expanded project overlay ----
document.addEventListener("change", (e) => {
    const target = e.target;
    if (!target.classList.contains("cb"))
        return;
    if (!dom.floater)
        return;
    if (target.checked) {
        const parent = target.closest(".project");
        if (!parent)
            return;
        const index = Number(parent.dataset.index);
        const project = projectList[index];
        const image = project.image === "assets/projectimages/.png"
            ? "assets/projectimages/Placeholder.png"
            : project.image;
        dom.floater.innerHTML = `
            <label class="projectMax">
                <input type="checkbox" class="cb" checked>
                <div class="maxSpacer">
                    <div class="maxProjImg">
                        <img src="${image}" alt="Project photo">
                        <p>  </p>
                        <a href="${project.link}">Read More Here</a>
                    </div>
                    <div class="maxText">
                        <p class="title">${project.title}</p>
                        <p class="subtext">${project.info}</p>
                    </div>
                </div>
            </label>`;
    }
    else {
        dom.floater.innerHTML = "";
    }
    target.checked = false;
});
// Max proj small screens code
window.addEventListener('scroll', () => {
    if (dom.floater) {
        dom.floater.style.transform = `translateY(${window.scrollY - 550}px)`;
    }
});
// Drag code for project list
let isDown = false;
let startX = 0;
let scrollLeft = 0;
function initDrag() {
    const projList = dom.projects;
    if (!projList)
        return;
    projList.addEventListener("mousedown", (e) => {
        const me = e;
        isDown = true;
        projList.classList.add("dragging");
        startX = me.clientX;
        scrollLeft = projList.scrollLeft;
    });
    projList.addEventListener("mouseup", () => {
        isDown = false;
        projList.classList.remove("dragging");
    });
    projList.addEventListener("mouseleave", () => {
        isDown = false;
        projList.classList.remove("dragging");
    });
    projList.addEventListener("mousemove", (e) => {
        const me = e;
        if (!isDown)
            return;
        me.preventDefault();
        const walk = (me.clientX - startX) * 1.5;
        projList.scrollLeft = scrollLeft - walk;
    });
}
window.onload = () => {
    main();
};
//# sourceMappingURL=portfolio.js.map