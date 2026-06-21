/*
// Necessary data

const projectList = [
    {
        title: "Mini Games",
        info: "Ongoing Project: <br>Interspersed with my actual projects, I wanted to make a couple quick minigames for fun and so that I can get some experience in pruning. <br>These are all currently terminal based though I'll likely translate them to JS and host them on github shortly. <br><br>Currently I've made: <br>Connect 4 <br>Sudoku",
        skills: ["Python", "Pruning", "Alpha Beta", "MRV", "Itertools", "String"],
        image: "assets/projectimages/Minigames.png",
        contributions: "Myself: Full project", 
        link: "https://github.com/WhiteEyedFly?tab=repositories"
    },
        title: "Graph Visualiser",
        info: "Ongoing Project: <br>Attempting to make an auto updating graph visualiser for the web sites that shows the commits added to the portfolio",
        skills: ["HTML", "CSS", "JS", "D3"],
        image: "projectimages/.png",
        contributions: "Myself: Full project", 
        link: "https://github.com/WhiteEyedFly/portfolio/graphVisualiser.html"
    },
    {
        title: "Polish to English revision tool",
        info: "Ongoing Project: <br>Recently I've been trying to pick up Polish for my partner so I figured I'd whip up a little tool to help with my revision. <br><br>Ripped kaikki JSONLs and Polish wikipedia to create a Polish to English Dictionary <br>Made a Polish to English translator <br>Made a Polish sentence generator tool <br>Made a TKinter app that allows users to choose their difficulty and revision type when practicing learning Polish <br>Made an English Thesaurus tool <br>Prioritised translations by word frequency based on analysis of Polish Wikipedia <br>Made tools highly extendable to other languages if others wish to add to the project",
        skills: ["Python", "TKinter", "JSON", "Big Data", "XML", "SAX", "Linguistic Structure", "Polish", "Data Cleaning"],
        image: "projectimages/Translate.png",
        contributions: "Myself: Full project", 
        link: "https://github.com/WhiteEyedFly/polish/blob/main/README.md"
    },
    {
        title: "Debt Simplifier - Pandas",
        info: "Rebasing an old project for easier access and to help test my skills in Pandas. <br><br>Takes a matrix of debts between a general n people and returns a simplified matrix of the minimum number of payments for the minimum amounts necessary to resolve all debts. The project was originally inspired by debt accumulation between holiday goers in a friend group but I wanted to code a general solution to any similar problem.",
        skills: ["Excel", "Pandas", "Matplotlib", "Numpy"],
        image: "assets/projectimages/DebtSimplifierPandas.png",
        contributions: "Myself: Full project", 
        link: "https://github.com/WhiteEyedFly/Debt-Simplifier/blob/main/README.md"
    },
    {
        title: "Slay the Spire AI",
        info: "Ongoing Project: <br><br>Goals: <br>Remake the Steam game Slay the Spire 2 in TKinter <br>Create several hard coded AI to run against one another and analyse 1,000's of ascensions to get a better hold on worthwhile cards and relics <br>Create a neural network to define optimal performance in random runs of Slay the Spire 2.",
        skills: ["Machine Learning", "Python", "TKinter"],
        image: "assets/projectimages/.png",
        contributions: "Myself: Full project", 
        link: "https://github.com/WhiteEyedFly/Slay-the-Spire-AI"
    },
    {
        title: "Kilordle Solver",
        info: "Find the optimal solution to the Webgame Kilordle (30 words).",
        skills: ["Backtracking", "Greedy", "Python", "Linear", "SAT Solvers", "Pandas", "D&C", "Dynamic"],
        image: "assets/projectimages/KilordleSolver.png",
        contributions: "Myself: Full project <br>Inspiration & Discussion: George Rawlinson and Natalie Welsh", 
        link: "https://github.com/WhiteEyedFly/Kilordle-Solver"},
    {
        title: "Portfolio",
        info: "You're looking at it.",
<<<<<<< HEAD:old js/portfolio.js
        skills: ["CSS", "GitHub", "HTML", "JS"],
        image: "assets/projectimages/Portfolio.png",
=======
        skills: ["CSS", "GitHub", "HTML", "JS", "D3"],
        image: "projectimages/Portfolio.png",
>>>>>>> graphVisualiser:portfolio.js
        contributions: "Myself: Full project", 
        link: "https://github.com/WhiteEyedFly/portfolio/blob/main/README.md"},
    {
        title: "Web Scraper",
        info: "Following and adapting a tutorial on accessing information from websites in preparation for a future larger project. Resulting in the development of my first SEO tool.",
        skills: ["GitHub", "JS", "SEO"],
        image: "assets/projectimages/Webscraper.png",
        contributions: "Myself: Full project", 
        link: "https://github.com/WhiteEyedFly/First-Webscraper/blob/main/README.md"},
    {
        title: "Pokemon Battle Simulator",
        info: "Managed a small team of game developers to remake Pokemon and make a better Pokemon AI for University of Bath's 2026 Hackathon. <br><br>Ideas for continuation of project: <br>Extend the project to become a Pokemon AI trainer or a new, more difficult Pokemon fangame.",
        skills: ["Excel", "Pygame", "Python", "TKInter", "R"],
        image: "assets/projectimages/Pokemon.png",
        contributions: "Myself: Project Management, UI, Database Generation <br>Natalie Welsh: UI, Systems <br>James Ferguson: AI", 
        link: "https://github.com/NW643/BattleSim"},
    {
        title: "CYOA - Excel",
        info: "Used VBA and Excel to create a 'page' switcher (pulling from a page bank on another sheet) based on button presses.",
        skills: ["Excel", "VBA"],
        image: "assets/projectimages/UniversitySimulator.png",
        contributions: "Myself: Full project", 
        link: ""},
    {
        title: "Finance Tracker - Excel",
        info: "Used Excel formulae to create 'accounts' that track my income, expenses and transfer of funds <br>Used Excel pivot tables to create data summary tables and graphs about my finances <br>Used VBA to semi-automate the entry of card transactions to the excel file <br><br>Ideas for continuation of project: <br>Move the project over to SQL and Streamlit.",
        skills: ["Excel", "VBA", "Pivot Tables"],
        image: "assets/projectimages/FinanceTracker.png",
        contributions: "Myself: Full project", 
        link: ""},
    {
        title: "Denise's Time Crypt",
        info: "Managed a small team of game developers and artists to make a calculator-based Roguelike for University of Bath's 2025 GameJam.",
        skills: ["Game Dev", "Godot", "Team Management"],
        image: "assets/projectimages/Denise'sTimeCrypt.png",
        contributions: "Myself: Project Management, UI <br>Natalie Welsh: Systems Design <br>Samuel Ndenecho: Text Editing Software <br>James Ferguson: AI <br>QingZhi Li: Art & Design", 
        link: "https://github.com/Gender-Bender-Studios/GenderBentCalc/blob/main/README.md"},
    {
        title: "Autocorrect",
        info: "Frustrated by the autocorrect that comes with my phone, I learnt AHK and the theory behind Levenshtein distances to code my own autocorrect.",
        skills: ["AHK"],
        image: "assets/projectimages/Levenshtein.png",
        contributions: "Myself: Full project", 
        link: ""},
    {
        title: "Debt Simplifier",
        info: "Used R to take any matrix of debts between a general n people and return a simplified matrix of the minimum number of payments for the minimum amounts necessary to resolve all debts. The project was originally inspired by debt accumulation between holiday goers in a friend group but I wanted to code a general solution to any similar problem.",
        skills: ["Excel", "R"],
        image: "assets/projectimages/DebtSimplifierPandas.png",
        contributions: "Myself: Full project", 
        link: ""},
    {
        title: "Hunter x Hunter RPG",
        info: "Designed a Hunter x Hunter inspired tabletop system for personal use.",
        skills: ["Game Dev"],
        image: "assets/projectimages/HunterHunter.png",
        contributions: "Myself: Full project", 
        link: ""},
    {
        title: "Project Site",
        info: "A prequel to this portfolio use to post personal projects - art and writing for the most part. <br>This was built using a html template however, rather than from scratch.",
        skills: ["GitHub"],
        image: "assets/projectimages/ProjectsPage.png",
        contributions: "Myself: Full project <br>Support: Samuel Ndenecho, Tom Bluu", 
        link: ""}
]
const experienceList = [
    {
        dates: "2025-2026",
        title: "Executive Treasurer - SU Bath",
        skills: ["Excel", "Outlook", "Student Expenses"],
        description: "Day to day processing and approval of expenses for 160 student societies <br>Used Excel to create an accountability system to better track any approval back to it's approver <br>Rebuilt the Treasury Outlook to better track requests, their progress and resolution to save time on picking up tasks"},
    {
        dates: "2023-2025",
        title: "Financial Assistant - HellermannTyton UK",
        skills: ["AHK", "Aurora", "Coaching", "Excel", "PowerBI", "Team Management"],
        description: "Day to day processing and analysis of financial statements using Excel <br>Used Excel & VBA to speed up processing of invoices <br>Used Python to automatically check statement items against the system to save company processing time"},
    {
        dates: "2021-2022",
        title: "E6 Tutor - Matthew Moss High School",
        skills: ["Tutoring"],
        description: "Tutored several GCSE level students 1 to 1 and in small groups. Achieved an average grade of 8 across all taught students and all subjects taught."}
]
const educationList = [
    {
        years: "2022-Present",
        course: "BSc Mathematics",
        place: "University of Bath",
        description:"Awaiting Certificate"},
    {
        years: "2024-Present",
        course: "ACCA",
        place: "Kaplan",
        description:"Year 1: 70% average <br>Year 2: Studying"},
    {
        years: "2020-2022",
        course: "A Level",
        place: "Rochdale Sixth Form College",
        description:`Biology: A* <br>Chemistry: A <br>Maths: A* <br>Further Maths: A* <br>EPQ (Economics): A*`},
    {
        years: "2015-2020",
        course: "GCSE",
        place: "Newhouse Academy",
        description:`Maths: 9 <br>Further Maths: 9 <br>Statistics: 8 <br>Chemistry: 9 <br>Biology: 9 <br>Physics: 9 <br>Electronics: 9 <br>History: 9 <br> English Literature: 9 <br>English Language: 9`}
]

let skillsList = ["AHK", "C", "CSS", "Excel", "HTML", "JS", "Pandas", "PowerBI", 
                "Python", "R", "TKinter", "SAX", "Polars", "TS", "Matplotlib",
                "Automation", "D3", "Jupyter", "Streamlit", "SQL"]
skillsList.sort()

const otherPages = [
    {
        text: "Blog",
        link: "blog.html"
    },
    {
        text: "Contributors",
        link: "contributors.html"
    },
    {
        text: "Personal Projects",
        link: "https://denniswoodbridgebehappy.github.io/dennis-site/"
    },
    {
        text: "Portfolio",
        link: "https://whiteeyedfly.github.io/portfolio/portfolio.html"
    },
    {
        text: "Update Visualiser",
        link: "https://whiteeyedfly.github.io/portfolio/graphVisualiser.html"
    },
]

// Initialisation

async function makeSkill(skill){
    const skills = document.querySelector(".skillsList");
    skills.innerHTML += `<div class="skill">${skill}</div>`
}

async function makeLink(pageDict){
    const pages = document.querySelector(".pageList");
    pages.innerHTML += `<a class="link" href="${pageDict.link}"><div class="page">${pageDict.text}</div></a>`
}

async function makeProject(projectDict, index){

    // Add the project structure
    const projects = document.querySelector(".projectList");

    let htmlAdded = `<label class="project" data-index="${index}"><input type="checkbox" class="cb"><div class="projImg">`

    // Add images
    if (projectDict.image === "assets/projectimages/.png"){
        htmlAdded += `<img pfp src="assets/projectimages/Placeholder.png" alt="Project photo">`
    } else {
        htmlAdded += `<img pfp src=${projectDict.image} alt="Project photo">`
    }
    htmlAdded += `</div><div class="skillsList"></div><p class="title">${projectDict.title}</p>`

    htmlAdded += `</div></label>`

    projects.innerHTML += htmlAdded
    
    makeSkills(projects, projectDict)
}

async function makeExperience(experienceDict){
    const experiences = document.querySelector(".experienceList");
    experiences.innerHTML += `<div class="box"><p>${experienceDict.dates}</p><p class="title">${experienceDict.title}</p><div class="skillsList"></div><p class=subtext>${experienceDict.description}</p></div>`

    makeSkills(experiences, experienceDict)
}

async function makeSkills(object, dict){
    // Add a skill for each listed
    const skillList = object.lastChild.querySelector(".skillsList");
    const orderedSkillList = dict.skills.sort()

    for (let i = 0; i < dict.skills.length; i++){
        skillList.innerHTML += `<div class="projSkill">${orderedSkillList[i]}</div>`
    }
}

async function makeEducation(educationDict){
    const education = document.querySelector(".educationList");
    education.innerHTML +=`<div class="box"><p>${educationDict.years}</p><p class="title">${educationDict.course}</p><p>${educationDict.place}</p><p class=subtext>${educationDict.description}</p></div>`
}


async function main(){
    for (let i = 0; i < skillsList.length; i++){
        makeSkill(skillsList[i])
    }
    for (let i = 0; i < otherPages.length; i++){
        makeLink(otherPages[i])
    }
    for (let i = 0; i < projectList.length; i++){
        makeProject(projectList[i], i)
    }
    for (let i = 0; i < experienceList.length; i++){
        makeExperience(experienceList[i])
    }
    for (let i = 0; i < educationList.length; i++){
        makeEducation(educationList[i])
    }
    
}

// Search bar code

function searcher(){
    let search = document.getElementById("search").value
    document.getElementById("projectList").innerHTML = "";

    for (let i = 0; i < projectList.length; i++){
        if (search == ""){
            makeProject(projectList[i])
        }
        else{
            for (let j = 0; j < projectList[i].skills.length; j++){
                console.log(i)
                if (projectList[i].skills[j].toUpperCase().includes(search.toUpperCase())){
                    makeProject(projectList[i])
                    break
                }
            }
        }
    }
}

// maxProj code

document.addEventListener("change", (e) => {
    const cb = e.target;
    if (!cb.classList.contains("cb")) return;

    const floatLayer = document.querySelector(".floater");

    if(cb.checked){
        // Add the project structure
        const index = cb.closest(".project").dataset.index
        const project = projectList[index]

        let htmlAdded = `<label class="projectMax"><input type="checkbox" checked="true" class="cb"><div class="maxSpacer"><div class="maxProjImg">`

        // Add images
        if (project.image === "assets/projectimages/.png"){
            htmlAdded += `<img pfp src="assets/projectimages/Placeholder.png" alt="Project photo">`
        } else {
            htmlAdded += `<img pfp src=${project.image} alt="Project photo">`
        }

        // Add link if present
        if (project.link){
            htmlAdded += `<a href=${project.link}>Read more</a>`
        }

        htmlAdded += `</div><div class="maxText"><div><p class="title">${project.title}</p><div class="skillsList"></div>`

        // More info
        htmlAdded += `<p class=subtext>${project.info}</p><p class=title2>Contributors:</p><p class=subtext>${project.contributions}</p>`

        

        htmlAdded += `</div></div></div></label>`

        floatLayer.innerHTML = htmlAdded;
    }
    else if (!cb.checked){
        floatLayer.innerHTML = "";
    }
    cb.checked = false;

    makeSkills(projects, project)
})

// Drag code for project list

const projList = document.querySelector(".projectList");

let isDown = false;
let startX = 0;
let scrollLeft = 0;

projList.addEventListener("mousedown", (e) => {
    isDown = true;
    projList.classList.add("dragging");
    startX = e.clientX;
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
    if (!isDown) return;
    e.preventDefault();

    const y = e.clientX;
    const walk = (y - startX) * 1.5;

    projList.scrollLeft = scrollLeft - walk;
});

main()