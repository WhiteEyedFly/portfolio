import { makeLink, loadJson } from "./shared.js";

async function mainBlog() {
    const pageList = await loadJson("../data/otherPages.json")
    const posts = await loadJson("../data/blogPosts.json")
    
    pageList.forEach(makeLink);
    posts.forEach(addPost);
}
async function addPost(post) {
    const posts = document.querySelector(".blogPosts");
    if (!posts)
        return;
    posts.innerHTML += `<div class="post"><div><p>${post.date}</p><p class="title">${post.title}</p><p>${post.text}</p></div></div>`;
}
mainBlog();
