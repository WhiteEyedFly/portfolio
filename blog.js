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

posts = [
    {
        date: "07/05/2026",
        title: "Portfolio launched",
        text: "Today I launched the portfolio."
    },
    {
        date: "08/01/2004",
        title: "Birth",
        text: "I was born."
    }
]

async function mainBlog(){
    for(let i = 0; i < posts.length; i++){
        addPost(posts[i])
    }
    for(let i = 0; i < otherPages.length; i++){
        makeLink(otherPages[i])
    }
}

async function addPost(post){
    const posts = document.querySelector(".blogPosts");
    posts.innerHTML += `<div class="post"><div><p>${post.date}</p><p class="title">${post.title}</p><p>${post.text}</p></div></div>`
}

async function makeLink(pageDict){
    const pages = document.querySelector(".pageList");
    pages.innerHTML += `<div class="page"><a href="${pageDict.link}">${pageDict.text}</a></div>`
}

mainBlog()