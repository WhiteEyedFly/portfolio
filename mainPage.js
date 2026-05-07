//const { log } = require('console');
const projectList = [
    {
        title: "Portfolio",
        info: "",
        skills: [""],
        image: "",
        link: ""
    },
    {
        title: "Web Scraper",
        info: "",
        skills: [""],
        image: "",
        link: ""
    },
    {
        title: "Pokemon & AI",
        info: "",
        skills: [""],
        image: "",
        link: ""
    },
    {
        title: "Choose Your Own Adventure - Excel",
        info: "",
        skills: [""],
        image: "",
        link: ""
    },
    {
        title: "Finance Tracker - Excel",
        info: "",
        skills: [""],
        image: "",
        link: ""
    },
    {
        title: "Denise's Time Crypt",
        info: "",
        skills: [""],
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
        skills: [""],
        image: "",
        link: ""
    }
]
const experienceList = [
    {
        dates: "2025-2026",
        title: "Executive Treasurer - SU Bath",
        skills: ["Excel", "Outlook"]
    },
    {
        dates: "2025",
        title: "Financial Assistant - ESUK",
        skills: ["Aurora","Excel", "PowerBI"]
    },
    {
        dates: "2023-2025",
        title: "Financial Assistant - HellermannTyton UK",
        skills: ["AHK", "Aurora", "Coaching", "Excel", "PowerBI", "Team Management"]
    },
    {
        dates: "2018-2022",
        title: "E6 Tutor - Matthew Moss High School",
        skills: ["Tutoring"]
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
    skills.innerHTML += `<button class="skill">${skill}</button>`
}

async function makeLink(pageDict){
    const pages = document.querySelector(".pageList");
    pages.innerHTML += `<div class="page"><a href="${pageDict.link}"><button>${pageDict.text}</button></a></div>`
}

async function makeProject(projectDict){

    // Add the project structure
    const projects = document.querySelector(".projectList");
    projects.innerHTML += `<div class="project"><img src=${projectDict.image} alt="Project photo" height="200px"><div><p>${projectDict.title}</p><div class="skillList"></div><p>${projectDict.info}</p><a href=${projectDict.link}>Read more</a></div></div>`
    
    // Add a skill for each listed
    const skillList = projects.lastChild.querySelector(".skillList");
    for (let i = 0; i < projectDict.skills.length; i++){
        skillList.innerHTML += `<button class="skill">${projectDict.skills[i]}</button>`
    }
}

async function makeExperience(experienceDict){
    const experiences = document.querySelector(".experienceList");
    experiences.innerHTML += `<div class="project"><p>${experienceDict.dates}</p><p class="title">${experienceDict.title}</p><div class="skillList"></div></div>`

    const skillList = experiences.lastChild.querySelector(".skillList");
    for (let i = 0; i < experienceDict.skills.length; i++){
        skillList.innerHTML += `<button class="skill">${experienceDict.skills[i]}</button>`
    }
}

async function makeEducation(educationDict){
    const education = document.querySelector(".educationList");
    education.innerHTML +=`<div class="project"><p>${educationDict.years}</p><p class="title">${educationDict.course}</p><p>${educationDict.place}</p><p>${educationDict.description}</p></div>`
}

main()