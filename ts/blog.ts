import { renderLinks, loadJson } from "./shared.js";
import type { Page, BlogPost } from "./types.js";

async function mainBlog(): Promise<void> {
    const [pageList, posts] = await Promise.all([
        loadJson<Page[]>("../data/otherPages.json"),
        loadJson<BlogPost[]>("../data/blogPosts.json")
    ]);

    renderLinks(pageList);
    renderPosts(posts);
}

// Builds the full post list as one string and writes it to the DOM once,
// instead of appending one post at a time via innerHTML += in a loop.
function renderPosts(posts: BlogPost[]): void {
    const container = document.querySelector(".blogPosts");
    if (!container) return;
    container.innerHTML = posts
        .map(post => `<div class="post"><div><p>${post.date}</p><p class="title">${post.title}</p><p>${post.text}</p></div></div>`)
        .join("");
}

mainBlog();
