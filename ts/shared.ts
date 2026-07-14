import type { Page } from "./types.js";

export async function loadJson<T>(path: string): Promise<T> {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Failed to load ${path}: ${response.status} ${response.statusText}`);
    }
    return response.json() as Promise<T>;
}

// Builds the full link list as one string and writes it to the DOM once,
// instead of appending one <a> at a time via innerHTML += (which forces the
// browser to re-serialise/re-parse the whole growing list on every item).
export function renderLinks(pages: Page[]): void {
    const container = document.querySelector(".pageList");
    if (!container) return;
    container.innerHTML = pages
        .map(page => `<a class="link" href="${page.link}"><div class="page">${page.text}</div></a>`)
        .join("");
}

export interface Contact {
    name: string;
    link: string;
    svg: string;
}
export function renderContacts(contacts: Contact[]): void {
    const container = document.querySelector(".contactsList ul:not(.pageList)");
    if (!container) return;
    container.innerHTML = contacts
        .map(contact => `<li><div class="linkBox"><a href="${contact.link}">${contact.svg}</a><p>${contact.name}</p></div></li>`)
        .join("");
}