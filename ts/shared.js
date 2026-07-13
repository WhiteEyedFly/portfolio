export async function loadJson(path) {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Failed to load ${path}: ${response.status} ${response.statusText}`);
    }
    return response.json();
}

export async function makeLink(page) {
    const pages = document.querySelector(".pageList");
    if (!pages)
        return;
    pages.innerHTML += `<a class="link" href="${page.link}"><div class="page">${page.text}</div></a>`;
}