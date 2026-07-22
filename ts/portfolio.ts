// Necessary data
import { renderLinks, renderContacts, loadJson } from "./shared.js";
import type { Contact } from "./shared.js";
import type { Page, Project, Experience, Education } from "./types.js";

interface DataPaths {
    contacts: string;
    otherPages: string;
    projects: string;
    experience: string;
    education: string;
    skills: string;
}

const DATA_PATHS: DataPaths = {
    contacts: "../data/contacts.json",
    otherPages: "../data/otherPages.json",
    projects: "../data/projects.json",
    experience: "../data/experience.json",
    education: "../data/education.json",
    skills: "../data/skills.json"
};

let pageList: Page[] = [];
let projectList: Project[] = [];
let experienceList: Experience[] = [];
let educationList: Education[] = [];
let skillsList: string[] = [];

async function loadData(): Promise<void> {
    // Fetch all six files in parallel rather than one after another.
    const [contacts, pages, projects, experience, education, skills] = await Promise.all([
        loadJson<Contact[]>(DATA_PATHS.contacts),
        loadJson<Page[]>(DATA_PATHS.otherPages),
        loadJson<Project[]>(DATA_PATHS.projects),
        loadJson<Experience[]>(DATA_PATHS.experience),
        loadJson<Education[]>(DATA_PATHS.education),
        loadJson<string[]>(DATA_PATHS.skills)
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

interface DomCache {
    skillsFilter: Element | null;
    projects: Element | null;
    experiences: Element | null;
    educations: Element | null;
    searchInput: HTMLInputElement | null;
    floater: HTMLElement | null;
}

const dom: DomCache = {
    skillsFilter: null,
    projects: null,
    experiences: null,
    educations: null,
    searchInput: null,
    floater: null
};

function cacheDom(): void {
    dom.skillsFilter = document.querySelector(".skillsList");
    dom.projects = document.querySelector(".projectList");
    dom.experiences = document.querySelector(".experienceList");
    dom.educations = document.querySelector(".educationList");
    dom.searchInput = document.getElementById("search") as HTMLInputElement | null;
    dom.floater = document.querySelector(".floater");
}

function skillButtonsHtml(skills: string[], btnClass: string): string {
    let html = "";
    for (let i = 0; i < skills.length; i++) {
        html += `<button class="${btnClass}" onclick="buttonSearch('${skills[i]}')">${skills[i]}</button>`;
    }
    return html;
}

function projectHtml(project: Project, index: number): string {
    const image = project.image === "../assets/projectimages/.png"
        ? "../assets/projectimages/Placeholder.png"
        : project.image;
    return `<label class="project" data-index="${index}"><input type="checkbox" class="cb">` +
        `<div class="projImg"><img pfp src="${image}" alt="Project photo"></div>` +
        `<div class="skillsList">${skillButtonsHtml(project.skills, "projSkill")}</div>` +
        `<p class="title">${project.title}</p></label>`;
}

function experienceHtml(experience: Experience): string {
    const image = experience.image === "../assets/experienceimages/.png"
        ? "../assets/projectimages/Placeholder.png"
        : experience.image;
    return `<div class="box"><div class="expSeperator"><div><p>${experience.dates}</p><p class="title">${experience.title}</p>` +
        `<div class="skillsList">${skillButtonsHtml(experience.skills, "projSkill")}</div>` +
        `<p class=subtext>${experience.description}</p></div>` +
        `<div class="expImage"><img pfp src="${image}" alt="Project photo"></div></div></div>`;
}

function educationHtml(education: Education): string {
    const image = education.image === "../assets/educationimages/.png"
        ? "../assets/projectimages/Placeholder.png"
        : education.image;
    return `<div class="box"><div class="eduSeperator"><div class="eduImage"><img pfp src="${image}" alt="Project photo"></div></div>` +
        `<p>${education.years}</p><p class="title">${education.course}</p>` +
        `<p>${education.place}</p><p class=subtext>${education.description}</p></div>`;
}

function renderSkillsFilter(): void {
    if (!dom.skillsFilter) return;
    dom.skillsFilter.innerHTML = skillButtonsHtml(skillsList, "skill");
}

function renderProjects(list: Array<[Project, number]>): void {
    if (!dom.projects) return;
    dom.projects.innerHTML = list.map(([p, i]) => projectHtml(p, i)).join("");
}

function renderExperiences(): void {
    if (!dom.experiences) return;
    dom.experiences.innerHTML = experienceList.map(experienceHtml).join("");
}

function renderEducations(): void {
    if (!dom.educations) return;
    dom.educations.innerHTML = educationList.map(educationHtml).join("");
}

async function main(): Promise<void> {
    cacheDom();
    try {
        await loadData();
    } catch (err) {
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
function projectMatches(project: Project, termUpper: string): boolean {
    if (termUpper === "") return true;
    if (project.title.toUpperCase().includes(termUpper)) return true;
    for (let j = 0; j < project.skills.length; j++) {
        if (project.skills[j].toUpperCase().includes(termUpper)) return true;
    }
    return false;
}

document.getElementById("clear-search")
    ?.addEventListener("click", clearProjectFilter);

function clearProjectFilter(): void {
    renderProjects(projectList.map((p, i): [Project, number] => [p, i]));
}

function filterProjects(term: string): void {
    const termUpper = term.toUpperCase();
    const matches: Array<[Project, number]> = [];
    for (let i = 0; i < projectList.length; i++) {
        if (projectMatches(projectList[i], termUpper)) matches.push([projectList[i], i]);
    }
    renderProjects(matches);
}

declare global {
    interface Window {
        searcher: () => void;
        buttonSearch: (skill: string) => void;
    }
}

window.searcher = function searcher(): void {
    if (!dom.searchInput) return;
    filterProjects(dom.searchInput.value);
};

window.buttonSearch = function buttonSearch(skill: string): void {
    filterProjects(skill);
};

// ---- Expanded project overlay ----
const modal = document.querySelector<HTMLDialogElement>('#modal');

if(modal) {
    modal.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;

        if (target.classList.contains('skill')) {
            modal.close();
        }
    });
}

if(modal) {
    document.addEventListener("click", (e) => {
        const target = e.target as HTMLInputElement;
        if (!target) return;

        if (!target.classList.contains("cb"))
            return;
        if (target.checked) {
            const parent = target.closest<HTMLElement>(".project");
            if (!parent)
                return;
            const index = Number(parent.dataset.index);
            const project = projectList[index];
            const image = project.image === "assets/projectimages/.png"
                ? "assets/projectimages/Placeholder.png"
                : project.image;
            modal.innerHTML = `
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
                    <button class="skill">Close</button>
                </label>`;
            modal.showModal();
        }
        else {
            if (!dom.floater) return;
            dom.floater.innerHTML = "";
        }
        target.checked = false;
    });
}
// Drag code for project list
let isDown = false;
let startX = 0;
let scrollLeft = 0;

function initDrag(): void {
    const projList = dom.projects as HTMLElement | null;
    if (!projList) return;

    projList.addEventListener("mousedown", (e: Event) => {
        const me = e as MouseEvent;
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
    projList.addEventListener("mousemove", (e: Event) => {
        const me = e as MouseEvent;
        if (!isDown) return;
        me.preventDefault();
        const walk = (me.clientX - startX) * 1.5;
        projList.scrollLeft = scrollLeft - walk;
    });
}

window.onload = () => {
    main();
};
