import { renderLinks, renderContacts, loadJson } from "./shared.js";

async function mainBlog() {
    const [contacts, pageList, posts] = await Promise.all([
        loadJson("../data/contacts.json"),
        loadJson("../data/otherPages.json"),
        loadJson("../data/blogPosts.json")
    ]);

    renderContacts(contacts);
    renderLinks(pageList);
    renderPosts(posts);
}

// Builds the full post list as one string and writes it to the DOM once,
// instead of appending one post at a time via innerHTML += in a loop.
function renderPosts(posts) {
    const container = document.querySelector(".blogPosts");
    if (!container) return;
    container.innerHTML = posts
        .map(post => `<div class="post"><div><p>${post.date}</p><p class="title">${post.title}</p><p>${post.text}</p></div></div>`)
        .join("");
}

mainBlog();
