//const { log } = require('console');
const projectList = [
    {
        title: "",
        info: "",
        skills: [""],
        image: "",
        link: ""
    },
    {
        title: "",
        info: "",
        skills: [""],
        image: "",
        link: ""
    },
    {
        title: "",
        info: "",
        skills: [""],
        image: "",
        link: ""
    },
    {
        title: "",
        info: "",
        skills: [""],
        image: "",
        link: ""
    },
    {
        title: "",
        info: "",
        skills: [""],
        image: "",
        link: ""
    },
    {
        title: "",
        info: "",
        skills: [""],
        image: "",
        link: ""
    },
    {
        title: "",
        info: "",
        skills: [""],
        image: "",
        link: ""
    }
]
const experienceList = [
    {
        dates: "",
        title: "",
        skills: [""]
    }
]
const educationList = [
    {
        years: "",
        course: "",
        place: "",
        description:""
    }
]

const skillsList = ["AHK", "C", "CSS, HTML & JS", "Excel", "PowerBI", "Python & Pandas", "R"]
const otherPages = [
    {
        text: "Personal Projects & Writing (OOD)",
        link: "https://denniswoodbridgebehappy.github.io/dennis-site/"
    },
    {
        text: "Blog",
        link: "blog.html"
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
    pages.innerHTML += `<div><a href="${pageDict.link}">${pageDict.text}</a></div>`
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
    experiences.innerHTML += `<div><p>${experienceDict.dates}</p><p>${experienceDict.title}</p><div class="skillList"></div></div>`

    const skillList = experiences.lastChild.querySelector(".skillList");
    for (let i = 0; i < experienceDict.skills.length; i++){
        skillList.innerHTML += `<button class="skill">${experienceDict.skills[i]}</button>`
    }
}

async function makeEducation(educationDict){
    const education = document.querySelector(".educationList");
    education.innerHTML +=`<div><p>${educationDict.years}</p><p>${educationDict.course}</p><p>${educationDict.place}</p><p>${educationDict.description}</p></div>`
}

main()