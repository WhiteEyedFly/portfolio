(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    const projects = await document.querySelector("nested");
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
},{}]},{},[1]);
