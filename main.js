const fs = require('fs');
const path = require('path');

export async function main(){
    const files = await fs.readdir("/projectpages", { withFileTypes: true });

    // For each project listed, add a project item
    await Promise.all(
        files.map(file => {
            const fullPath = path.join(dirPath, file.name)
            makeProject(fullPath)
        })
    )
}

export async function makeProject(jsonLink){
    const response = await fetch(jsonLink);
    const jsonProjectFile = await response.json();

    // Add the project structure
    const projects = document.querySelector("projects");
    projects.innerHTML += `<div class="project"><img src=${jsonProjectFile.image} alt="Project photo"><div><p>${jsonProjectFile.title}</p><div class="skills_list" #skillList><!--Skills--></div><p>${jsonProjectFile.info}</p><a href=${jsonProjectFile.link}>Read more</a></div></div>`
    
    // Add a skill for each listed
    const skillList = projects.lastChild.querySelector("skillList");
    for (skill in jsonProjectFile.skills){
        skillList.innerHTML += `<button>${skill}</button>`
    }
}

main()