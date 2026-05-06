//const { log } = require('console');
let fs = require('fs/promises');
let path = require('path');

async function main(){
    const dirPath = "./projectpages"
    const files = await fs.readdir(dirPath, { withFileTypes: true });

    // For each project listed, add a project item
    await Promise.all(
        files.map(file => {
            const fullPath = path.join(dirPath, file.name)
            makeProject("/home/dw/Desktop/Docs/Projects/Portfolio/".concat(fullPath))
        })
    )
}

async function makeProject(jsonLink){
    jsonProjectFile = fetch(jsonLink)
        .then(response => response.json())
        .then(json => console.log(json));

    // Add the project structure
    const projects = await document.querySelector("projects");
    projects.innerHTML += `<div class="project"><img src=${jsonProjectFile.image} alt="Project photo"><div><p>${jsonProjectFile.title}</p><div class="skills_list" #skillList></div><p>${jsonProjectFile.info}</p><a href=${jsonProjectFile.link}>Read more</a></div></div>`
    
    // Add a skill for each listed
    const skillList = projects.lastChild.querySelector("skillList");
    for (skill in jsonProjectFile.skills){
        skillList.innerHTML += `<button>${skill}</button>`
    }
}

main()