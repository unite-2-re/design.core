// Currently, I'm using SASS version of such p.sheet
export const WavyShapedCircle = (steps = 100, amplitude = 0.06, freq = 8) => {
    const points: number[] = [];
    for (let i = 0; i < steps; i++) { points.push(i / steps); }

    //
    const angle = (step) => { return `calc(${step}rad * pi * 2)`; };
    const variant = (step) => {
        return `calc(calc(cos(calc(var(--clip-freq) * ${angle(step)})) * 0.5 + 0.5) * var(--clip-amplitude))`;
    };

    //
    const func = (step) => {
        return [
            `calc(calc(0.5 + calc(cos(${angle(step)}) * calc(0.5 - ${variant(step)}))) * 100%)`,
            `calc(calc(0.5 + calc(sin(${angle(step)}) * calc(0.5 - ${variant(step)}))) * 100%)`
        ];
    };

    //
    const d = points.map((step) => {const stp = func(step).join(" "); return stp;}).join(", ");

    //
    return {
        "--clip-amplitude": amplitude,
        "--clip-freq": freq,
        "--clip-path": `polygon(${d})`
    };
};

// @ts-ignore
import styles from "../$scss$/_GridDesign.scss?inline";

//
const loadInlineStyle = (inline: string)=>{
    const style = document.createElement("style");
    style.dataset.owner = "design";
    //style.innerHTML = inline;
    style.innerHTML = `@import url("${URL.createObjectURL(new Blob([inline], {type: "text/css"}))}");`;
    document.head.appendChild(style);
}

//
const loadBlobStyle = (inline: string)=>{
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.type = "text/css";
    style.dataset.owner = "design";
    style.href = URL.createObjectURL(new Blob([inline], {type: "text/css"}));
    document.head.appendChild(style);
    return style;
}

//
const initialize = ()=>{
    loadBlobStyle(styles);
}

//
export default initialize;
