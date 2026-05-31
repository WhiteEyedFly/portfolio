const otherPages = [
    {
        text: "Blog",
        link: "blog.html"
    },
    {
        text: "Contributors",
        link: "contributors.html"
    },
    {
        text: "Personal Projects",
        link: "https://denniswoodbridgebehappy.github.io/dennis-site/"
    },
    {
        text: "Portfolio",
        link: "https://whiteeyedfly.github.io/portfolio/portfolio.html"
    },
]

contributors = [
    {
        name: "George Rawlinson",
        git: "https://github.com/TheGogy"
    },
    {
        name: "James Ferguson",
        git: "https://github.com/LordMcBaguette"
    },
    {
        name: "Natalie Welsh",
        git: "https://github.com/NW643"
    },
    {
        name: "Samuel Ndenecho",
        git: "https://github.com/Sammy99jsp"
    }, 
    {
        name: "Tom Bluu",
        git: ""
    }
]

async function mainContributors(){
    contributors.sort()

    for(let i = 0; i < contributors.length; i++){
        addContributor(contributors[i])
    }
    for(let i = 0; i < otherPages.length; i++){
        makeLink(otherPages[i])
    }
}

async function addContributor(contributor){
    const contributors = document.querySelector(".contributorsList");
    contributors.innerHTML += `<div class="contributor"><div><p>${contributor.name}</p><a href="${contributor.git}">Github</a></div></div>`
}

async function makeLink(pageDict){
    const pages = document.querySelector(".pageList");
    pages.innerHTML += `<div class="page"><a class="link" href="${pageDict.link}">${pageDict.text}</a></div>`
}

mainContributors()