// Necessary data
import { otherPages, makeLink } from "./shared.js";

interface Project {
    title: string;
    info: string;
    skills: string[];
    image: string;
    contributions: string;
    link: string;
}

interface Experience {
    dates: string;
    title: string;
    skills: string[];
    description: string;
}

interface Education {
    years: string;
    course: string;
    place: string;
    description: string;
}

interface DataPaths {
    projects: string;
    experience: string;
    education: string;
    skills: string;
}

const DATA_PATHS: DataPaths = {
    projects: "data/projects.json",
    experience: "data/experience.json",
    education: "data/education.json",
    skills: "data/skills.json"
};

let projectList: Project[] = [];
let experienceList: Experience[] = [];
let educationList: Education[] = [];
let skillsList: string[] = [];

async function loadJson<T>(path: string): Promise<T> {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Failed to load ${path}: ${response.status} ${response.statusText}`);
    }
    return response.json() as Promise<T>;
}

async function loadData(): Promise<void> {
    // Fetch all four files in parallel rather than one after another.
    const [projects, experience, education, skills] = await Promise.all([
        loadJson<Project[]>(DATA_PATHS.projects),
        loadJson<Experience[]>(DATA_PATHS.experience),
        loadJson<Education[]>(DATA_PATHS.education),
        loadJson<string[]>(DATA_PATHS.skills)
    ]);

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

// Cache elements we touch repeatedly instead of re-querying the DOM each time.
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

// ---- Pure string-builders (no DOM writes) ----
// Building HTML as strings and writing it to the DOM once per container
// (instead of appending via innerHTML += in a loop) avoids the O(n^2) cost of
// re-serialising/re-parsing the whole growing subtree on every iteration.

function skillButtonsHtml(skills: string[], btnClass: string): string {
    let html = "";
    for (let i = 0; i < skills.length; i++) {
        html += `<button class="${btnClass}" onclick="buttonSearch('${skills[i]}')">${skills[i]}</button>`;
    }
    return html;
}

function projectHtml(project: Project, index: number): string {
    const image = project.image === "assets/projectimages/.png"
        ? "assets/projectimages/Placeholder.png"
        : project.image;
    return `<label class="project" data-index="${index}"><input type="checkbox" class="cb">` +
        `<div class="projImg"><img pfp src="${image}" alt="Project photo"></div>` +
        `<div class="skillsList">${skillButtonsHtml(project.skills, "projSkill")}</div>` +
        `<p class="title">${project.title}</p></label>`;
}

function experienceHtml(experience: Experience): string {
    return `<div class="box"><p>${experience.dates}</p><p class="title">${experience.title}</p>` +
        `<div class="skillsList">${skillButtonsHtml(experience.skills, "projSkill")}</div>` +
        `<p class=subtext>${experience.description}</p></div>`;
}

function educationHtml(education: Education): string {
    return `<div class="box"><p>${education.years}</p><p class="title">${education.course}</p>` +
        `<p>${education.place}</p><p class=subtext>${education.description}</p></div>`;
}

// ---- Render functions (single DOM write per list) ----
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
    otherPages.forEach(makeLink);
    renderProjects(projectList.map((p, i): [Project, number] => [p, i]));
    renderExperiences();
    renderEducations();
    initDrag();
}

// ---- Search / filter ----
// Single shared implementation used by both the text search box and the
// clickable skill/title buttons (previously duplicated almost verbatim).
function projectMatches(project: Project, termUpper: string): boolean {
    if (termUpper === "") return true;
    if (project.title.toUpperCase().includes(termUpper)) return true;
    for (let j = 0; j < project.skills.length; j++) {
        if (project.skills[j].toUpperCase().includes(termUpper)) return true;
    }
    return false;
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
document.addEventListener("change", (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (!target.classList.contains("cb")) return;
    if (!dom.floater) return;

    if (target.checked) {
        const parent = target.closest(".project") as HTMLElement | null;
        if (!parent) return;
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
    } else {
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

function initDrag(): void {
    const projList = dom.projects;
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
