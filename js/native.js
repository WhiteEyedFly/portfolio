import { renderLinks, renderContacts, loadJson } from "./shared.js";

async function nativeMain() {
    const [contacts, pageList] = await Promise.all([
        loadJson("../../data/contacts.json"),
        loadJson("../../data/otherPagesNative.json")
    ]);
    renderContacts(contacts);
    renderLinks(pageList);
}

nativeMain();
