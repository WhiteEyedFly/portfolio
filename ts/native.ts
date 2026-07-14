import { renderLinks, loadJson } from "./shared.js";
import type { Page } from "./types.js";

async function nativeMain(): Promise<void> {
    const pageList = await loadJson<Page[]>("../../data/otherPagesNative.json");
    renderLinks(pageList);
}

nativeMain();
