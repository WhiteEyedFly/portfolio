type Contributor = {
    name: string,
    git: string
}

const contributors: Contributor[] = [
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

async function addContributor(contributor: Contributor){
    const contributors = document.querySelector(".contributorsList");
    if (!contributors) return;

    contributors.innerHTML += `<div class="contributor"><div><p>${contributor.name}</p><a href="${contributor.git}">Github</a></div></div>`
}

mainContributors()