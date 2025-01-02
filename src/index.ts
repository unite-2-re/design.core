// @ts-ignore
import { hash, loadInlineStyle } from "/externals/lib/dom.js";

// @ts-ignore
import styles from "./$scss$/_GridDesign.scss?inline&compress";
const preInit = URL.createObjectURL(new Blob([styles], {type: "text/css"}));
const integrity = hash(styles);

//
const initialize = (rootElement = document.head)=>{
    loadInlineStyle(preInit, rootElement);
}

//
export default initialize;
export * from "./$core$/Shape";
