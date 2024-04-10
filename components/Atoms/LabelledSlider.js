import React from "react";

export default function LabelledSlider({id, text, min, max, minText, maxText, step}) {

    return (
        <div className="py-1">
            <label htmlFor={id} className="pr-7">{text}</label>
            <label className="pr-2 text-sky-500">{minText}</label>
            <input type="range" id={id} name={text} min={min} max={max} step={step} required/>
            <label className="pl-2 text-sky-500">{maxText}</label>
        </div>
    );
}
