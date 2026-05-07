//const { log } = require('console');
const projectList = [
    {
        title: "Proj1",
        info: "I did a thing",
        skills: ["Python"],
        image: "projectimages/blankImage.jpg",
        link: "link"
    }
]
const experienceList = [
    {
        dates: "1",
        title: "1",
        skills: ["1"]
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


async function main(){
    for (let i = 0; i < projectList.length; i++){
        makeProject(projectList[i])
    }
    for (let i = 0; i < experienceList.length; i++){
        makeExperience(experienceList[i])
    }
    for (let i = 0; i < educationList.length; i++){
        makeEducation(projectList[i])
    }
}

async function makeProject(projectDict){

    // Add the project structure
    const projects = document.querySelector(".projectList");
    projects.innerHTML += `<div class="project"><img src=${projectDict.image} alt="Project photo" height="200px"><div><p>${projectDict.title}</p><div class="skillList"></div><p>${projectDict.info}</p><a href=${projectDict.link}>Read more</a></div></div>`
    
    // Add a skill for each listed
    const skillList = projects.lastChild.querySelector(".skillList");
    for (let i = 0; i < projectDict.skills.length; i++){
        skillList.innerHTML += `<button>${projectDict.skills[i]}</button>`
    }
}

async function makeExperience(experienceDict){
    const experiences = document.querySelector(".experienceList");
    experiences.innerHTML += `<div><p>${experienceDict.dates}</p><p>${experienceDict.title}</p><div class="skillList"></div></div>`

    const skillList = experiences.lastChild.querySelector(".skillList");
    for (let i = 0; i < experienceDict.skills.length; i++){
        skillList.innerHTML += `<button>${experienceDict.skills[i]}</button>`
    }
}

async function makeEducation(educationDict){
    const education = document.querySelector(".educationList");
    education.innerHTML +=`<div><p>${educationDict.years}</p><p>${educationDict.course}</p><p>${educationDict.place}</p><p>${educationDict.description}</p></div>`
}

main()