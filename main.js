const fs = require('fs');

async function main(){
    // Not real code for now
    for (json in folder){
        makeProject(json)
    }
}

async function makeProject(jsonLink){
    const res = await fetch(jsonLink);
    const data = await res.json();

    const projects = document.querySelector("projects");
    projects.innerHTML += `<div class="project"><img src=${data.image} alt="Project photo"><div><p>${data.title}</p><div class="skills_list" #skillList><!--Skills--></div><p>${data.info}</p><a href=${data.link}>Read more</a></div></div>`
    
    const skillList = projects.lastChild.querySelector("skillList");
    for (skill in data.skills){
        skillList.innerHTML += `<button>${skill}</button>`
    }
}

main()