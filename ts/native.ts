import { renderLinks, renderContacts, loadJson } from "./shared.js";
import type { Contact } from "./shared.js";
import type { Page } from "./types.js";

async function nativeMain(): Promise<void> {
    const [contacts, pageList] = await Promise.all([
        loadJson<Contact[]>("../../data/contacts.json"),
        loadJson<Page[]>("../../data/otherPagesNative.json")
    ]);
    renderContacts(contacts);
    renderLinks(pageList);
}

nativeMain();
