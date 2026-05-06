//const { log } = require('console');
const projectList = [
    {
        title: "Proj1",
        info: "I did a thing",
        skills: ["Python"],
        image: "blankImage.jpg",
        link: "link"
    }
]
const experienceList = [
    {
        dates: "",
        title: "",
        skills: []
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
    // For each project listed, add a project item
    for (let i = 0; i < projectList.length; i++){
        makeProject(projectList[i])
    }
    for (let i = 0; i < experienceList.length; i++){
        makeExperience(exp)
    }
    for (let i = 0; i < educationList.length; i++){
        makeEducation(edu)
    }
}

async function makeProject(projectDict){

    // Add the project structure
    const projects = await document.querySelector("projects");
    projects.innerHTML += `<div class="project"><img src=${projectDict.image} alt="Project photo"><div><p>${projectDict.title}</p><div class="skills_list" #skillList></div><p>${projectDict.info}</p><a href=${projectDict.link}>Read more</a></div></div>`
    
    // Add a skill for each listed
    const skillList = await projects.lastChild.querySelector("skillList");
    for (skill in projectDict.skills){
        skillList.innerHTML += `<button>${skill}</button>`
    }
}

async function makeExperience(experienceDict){

}

async function makeEducation(educationDict){

}

main()