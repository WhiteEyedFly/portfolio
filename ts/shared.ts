type Page = {
    text: string;
    link: string;
};

const otherPages: Page[] = [
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

async function makeLink(page: Page): Promise<void> {
    const pages = document.querySelector(".pageList");
    if (!pages) return

    pages.innerHTML += `<a class="link" href="${page.link}"><div class="page">${page.text}</div></a>`
}