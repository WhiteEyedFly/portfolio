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
    {
        text: "Update Visualiser",
        link: "https://whiteeyedfly.github.io/portfolio/graphVisualiser.html"
    },
]

async function makeLink(pageDict){
    const pages = document.querySelector(".pageList");
    pages.innerHTML += `<a class="link" href="${pageDict.link}"><div class="page">${pageDict.text}</div></a>`
}