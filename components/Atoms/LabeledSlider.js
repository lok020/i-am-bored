import React from "react";

export default function LabeledSlider({id, text, min, max, minText, maxText, step}) {

    return (
        <div>
            <label htmlFor={id} className="pr-7">{text}</label>
            <label className="pr-2 text-sky-500">{minText}</label>
            <input type="range" id={id} name={text} min={min} max={max} step={step}/>
            <label className="pl-2 text-sky-500">{maxText}</label>
        </div>
    );
}