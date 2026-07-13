import { makeLink, loadJson } from "./shared.js";

async function nativeMain(){
    const pageList = await loadJson("../../data/otherPagesNative.json")
    pageList.forEach(makeLink);
}

nativeMain()