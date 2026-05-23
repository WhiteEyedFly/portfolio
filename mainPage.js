//const { log } = require('console');
const projectList = [
    {
        title: "Portfolio",
        info: "Ongoing <br>Ideas for improvement: <br><br>Skill search function on the blog & portfolio pages <br>Make buttons and links prettier <br> Make the scroller look nicer",
        skills: ["CSS", "GitHub", "HTML", "JS"],
        image: "",
        link: ""
    },
    {
        title: "Web Scraper",
        info: "Following and playing with a free tutorial on accessing information from websites in preparation for a future larger project. Resulting in the development of my first SEO tool.",
        skills: ["GitHub", "JS", "SEO"],
        image: "",
        link: ""
    },
    {
        title: "Pokemon Battle Simulator",
        info: "",
        skills: ["Excel", "Pygame", "Python", "TKInter", "R"],
        image: "/projectimages/pokemon.jpg",
        link: "https://github.com/NW643/BattleSim"
    },
    {
        title: "Choose Your Own Adventure - Excel",
        info: "",
        skills: ["Excel", "VBA"],
        image: "",
        link: ""
    },
    {
        title: "Finance Tracker - Excel",
        info: "",
        skills: ["Excel", "VBA"],
        image: "",
        link: ""
    },
    {
        title: "Denise's Time Crypt",
        info: "",
        skills: ["Godot", "Team Management"],
        image: "",
        link: ""
    },
    {
        title: "Autocorrect",
        info: "",
        skills: ["AHK"],
        image: "",
        link: ""
    },
    {
        title: "Debt Simplifier",
        info: "",
        skills: ["Excel", "R"],
        image: "",
        link: ""
    },
    {
        title: "Hunter x Hunter RPG",
        info: "",
        skills: [""],
        image: "",
        link: ""
    },
    {
        title: "Project Site",
        info: "",
        skills: ["GitHub"],
        image: "",
        link: ""
    }
]
const experienceList = [
    {
        dates: "2025-2026",
        title: "Executive Treasurer - SU Bath",
        skills: ["Excel", "Outlook"],
        description: ""
    },
    {
        dates: "2025",
        title: "Financial Assistant - ESUK",
        skills: ["Aurora","Excel", "PowerBI"],
        description: ""
    },
    {
        dates: "2023-2025",
        title: "Financial Assistant - HellermannTyton UK",
        skills: ["AHK", "Aurora", "Coaching", "Excel", "PowerBI", "Team Management"],
        description: ""
    },
    {
        dates: "2018-2022",
        title: "E6 Tutor - Matthew Moss High School",
        skills: ["Tutoring"],
        description: ""
    }
]
const educationList = [
    {
        years: "2022-Present",
        course: "BSc Mathematics",
        place: "University of Bath",
        description:"Studying"
    },
    {
        years: "2024-Present",
        course: "ACCA",
        place: "Kaplan",
        description:"Year 1: 70% average <br>Year 2: Studying"
    },
    {
        years: "2020-2022",
        course: "A Level",
        place: "Rochdale Sixth Form College",
        description:`Biology: A* <br>Chemistry: A <br>Maths: A* <br>Further Maths: A* <br>EPQ (Economics): A*`
    }
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
    pages.innerHTML += `<div class="page"><a href="${pageDict.link}"><button>${pageDict.text}</button></a></div>`
}

async function makeProject(projectDict){

    // Add the project structure
    const projects = document.querySelector(".projectList");
    projects.innerHTML += `<div class="project"><img src=${projectDict.image} alt="Project photo" height="200px"><div><p class="title">${projectDict.title}</p><div class="skillList"></div><p>${projectDict.info}</p><a href=${projectDict.link}>Read more</a></div></div>`
    
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