import { renderLinks, loadJson } from "./shared.js";

async function nativeMain() {
    const pageList = await loadJson("../../data/otherPagesNative.json");
    renderLinks(pageList);
}

nativeMain();
