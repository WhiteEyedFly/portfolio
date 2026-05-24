const projectList = [
    {
        title: "Slay the Spire AI",
        info: "Ongoing Project: <br><br>Goals: <br>Remake the Steam game Slay the Spire 2 in TKinter <br>Create several hard coded AI to run against one another and analyse 1,000's of ascensions against to get a better hold on worthwhile cards and relics <br>Create a neural network to define optimal performance in random runs of Slay the Spire 2.",
        skills: ["Machine Learning", "Python", "TKinter"],
        image: "projectimages/.png",
        link: ""
    },
    
    {
        title: "Kilordle Solver",
        info: "Ongoing Project: <br><br>Remaking the webgame Kilordle (the aim of which is to solve 1,000 wordles simulatenously and find the optimal solution to any set of words and wordles for the game.",
        skills: ["CSS, HTML & JS", "DFS & Backtracking", "Python"],
        image: "projectimages/.png",
        link: ""
    },
    {
        title: "Portfolio",
        info: "Ongoing <br>Ideas for improvement: <br><br>Skill search function on the blog & portfolio pages <br>Project specific pages (following read more links)",
        skills: ["CSS", "GitHub", "HTML", "JS"],
        image: "projectimages/Portfolio.png",
        link: "https://github.com/WhiteEyedFly/portfolio/blob/main/README.md"
    },
    {
        title: "Web Scraper",
        info: "Following and adapting a tutorial on accessing information from websites in preparation for a future larger project. Resulting in the development of my first SEO tool.",
        skills: ["GitHub", "JS", "SEO"],
        image: "projectimages/Webscraper.png",
        link: "https://github.com/WhiteEyedFly/First-Webscraper/blob/main/README.md"},
    {
        title: "Pokemon Battle Simulator",
        info: "Managed a small team of game developers to remake Pokemon and make a better Pokemon AI for University of Bath's 2026 Hackathon. <br><br>Ideas for continuation of project: <br>Extend the project to become a Pokemon AI trainer or a new, more difficult Pokemon fangame.",
        skills: ["Excel", "Pygame", "Python", "TKInter", "R"],
        image: "projectimages/Pokemon.png",
        link: "https://github.com/NW643/BattleSim"},
    {
        title: "Choose Your Own Adventure - Excel",
        info: "Used VBA and Excel to create a 'page' switcher (pulling from a page bank on another sheet) based on button presses.",
        skills: ["Excel", "VBA"],
        image: "projectimages/UniversitySimulator.png",
        link: ""},
    {
        title: "Finance Tracker - Excel",
        info: "Used Excel formulae to create 'accounts' that track my income, expenses and transfer of funds <br>Used Excel pivot tables to create data summary tables and graphs about my finances <br>Used VBA to semi-automate the entry of card transactions to the excel file <br><br>Revisit and move the project over to SQL and Streamlit.",
        skills: ["Excel", "VBA"],
        image: "projectimages/FinanceTracker.png",
        link: ""},
    {
        title: "Denise's Time Crypt",
        info: "Managed a small team of game developers and artists to make a calculator-based Roguelike for University of Bath's 2025 GameJam.",
        skills: ["Game Dev", "Godot", "Team Management"],
        image: "projectimages/Denise'sTimeCrypt.png",
        link: "https://github.com/Gender-Bender-Studios/GenderBentCalc/blob/main/README.md"},
    {
        title: "Autocorrect",
        info: "Frustrated by the autocorrect that comes with my phone, I learnt AHK and the theory behind Levenshtein distances to code my own autocorrect.",
        skills: ["AHK"],
        image: "projectimages/Levenshtein.png",
        link: ""},
    {
        title: "Debt Simplifier",
        info: "Used R to take any matrix of debts between a general n people and return a simplified matrix of the minimum number of payments for the minimum amounts necessary to resolve all debts. The project was originally inspired by debt accumulation between holiday goers in a friend group but I wanted to code a general solution to any similar problem.",
        skills: ["Excel", "R"],
        image: "projectimages/DebtSimplifier.png",
        link: ""},
    {
        title: "Hunter x Hunter RPG",
        info: "Designed a Hunter x Hunter inspired tabletop system for personal use.",
        skills: ["Game Dev"],
        image: "projectimages/HunterHunter.png",
        link: ""},
    {
        title: "Project Site",
        info: "A prequel to this portfolio use to post personal projects - art and writing for the most part. <br>This was built using a html template however, rather than from scratch.",
        skills: ["GitHub"],
        image: "projectimages/ProjectsPage.png",
        link: ""}
]
const experienceList = [
    {
        dates: "2025-2026",
        title: "Executive Treasurer - SU Bath",
        skills: ["Excel", "Outlook"],
        description: "Day to day processing and approval of expenses for 160 student societies <br>Used Excel to create an accountability system to better track any approval back to it's approver <br>Rebuilt the Treasury Outlook to better track requests, their progress and resolution to save time on picking up tasks"},
    {
        dates: "2025",
        title: "Financial Assistant - ESUK",
        skills: ["Aurora","Excel", "PowerBI"],
        description: ""},
    {
        dates: "2023-2025",
        title: "Financial Assistant - HellermannTyton UK",
        skills: ["AHK", "Aurora", "Coaching", "Excel", "PowerBI", "Team Management"],
        description: "Day to day processing and analysis of financial statements using Excel <br>Used Excel & VBA to speed up processing of invoices <br>Used Python to automatically check statement items against the system to save company processing time"},
    {
        dates: "2018-2022",
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
        description:`Biology: A* <br>Chemistry: A <br>Maths: A* <br>Further Maths: A* <br>EPQ (Economics): A*`}
]

const skillsList = ["AHK", "C", "CSS, HTML & JS", "Excel", "PowerBI", "Python & Pandas", "R"]

const otherPages = [
    
    {
        text: "Portfolio",
        link: "https://whiteeyedfly.github.io/portfolio/index.html"
    },
    {
        text: "Blog",
        link: "blog.html"
    },
    {
        text: "Personal Projects",
        link: "https://denniswoodbridgebehappy.github.io/dennis-site/"
    }
]


async function main(){
    for (let i = 0; i < skillsList.length; i++){
        makeSkill(skillsList[i])
    }
    for (let i = 0; i < otherPages.length; i++){
        makeLink(otherPages[i])
    }
    for (let i = 0; i < projectList.length; i++){
        makeProject(projectList[i])
    }
    for (let i = 0; i < experienceList.length; i++){
        makeExperience(experienceList[i])
    }
    for (let i = 0; i < educationList.length; i++){
        makeEducation(educationList[i])
    }
}

async function makeSkill(skill){
    const skills = document.querySelector(".skillsList");
    skills.innerHTML += `<div class="skill">${skill}</button>`
}

async function makeLink(pageDict){
    const pages = document.querySelector(".pageList");
    pages.innerHTML += `<div class="page"><a class="link" href="${pageDict.link}">${pageDict.text}</a></div>`
}

async function makeProject(projectDict){

    // Add the project structure
    const projects = document.querySelector(".projectList");

    if (projectDict.link === ""){
        if (projectDict.image === "projectimages/.png"){
            projects.innerHTML += `<div class="project"><div class="centerer"><div class="projImg"><img pfp src="projectimages/Placeholder.png" alt="Project photo" height="200px"></div></div><div><p class="title">${projectDict.title}</p><div class="skillList"></div><p>${projectDict.info}</p></div></div>`
        } else {
            projects.innerHTML += `<div class="project"><div class="centerer"><div class="projImg"><img pfp src=${projectDict.image} alt="Project photo" height="200px"></div></div><div><p class="title">${projectDict.title}</p><div class="skillList"></div><p>${projectDict.info}</p></div></div>`
        }
    } else {
        if (projectDict.image === "projectimages/.png"){
            projects.innerHTML += `<div class="project"><div class="centerer"><div class="projImg"><img pfp src="projectimages/Placeholder.png" alt="Project photo" height="200px"></div></div><div><p class="title">${projectDict.title}</p><div class="skillList"></div><p>${projectDict.info}</p><a href=${projectDict.link}>Read more</a></div></div>`
        } else {
            projects.innerHTML += `<div class="project"><div class="centerer"><div class="projImg"><img pfp src=${projectDict.image} alt="Project photo" height="200px"></div></div><div><p class="title">${projectDict.title}</p><div class="skillList"></div><p>${projectDict.info}</p><a href=${projectDict.link}>Read more</a></div></div>`
        }
    }
    
    // Add a skill for each listed
    const skillList = projects.lastChild.querySelector(".skillList");
    for (let i = 0; i < projectDict.skills.length; i++){
        skillList.innerHTML += `<button class="skill">${projectDict.skills[i]}</button>`
    }
}

async function makeExperience(experienceDict){
    const experiences = document.querySelector(".experienceList");
    experiences.innerHTML += `<div class="project"><p>${experienceDict.dates}</p><p class="title">${experienceDict.title}</p><div class="skillsList"></div><p>${experienceDict.description}</p></div>`

    const skillList = experiences.lastChild.querySelector(".skillsList");
    for (let i = 0; i < experienceDict.skills.length; i++){
        skillList.innerHTML += `<button class="skill">${experienceDict.skills[i]}</button>`
    }
}

async function makeEducation(educationDict){
    const education = document.querySelector(".educationList");
    education.innerHTML +=`<div class="project"><p>${educationDict.years}</p><p class="title">${educationDict.course}</p><p>${educationDict.place}</p><p>${educationDict.description}</p></div>`
}

main()