
// @ts-ignore
import styles from "./$scss$/_GridDesign.scss?inline&compress";
const preInit = URL.createObjectURL(new Blob([styles], {type: "text/css"}));

// @ts-ignore /* @vite-ignore */
import {importCdn} from "/externals/modules/cdnImport.mjs";
export {importCdn};

//
const initialize = async (rootElement = document.head)=>{
    // @ts-ignore
    const {hash, loadInlineStyle} = await Promise.try(importCdn, ["/externals/lib/dom.js"]);
    const integrity = hash(styles);
    loadInlineStyle(preInit, rootElement);
}

//
export default initialize;
export * from "./$core$/Shape";
