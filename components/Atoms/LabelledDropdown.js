import React from "react";

export default function LabelledDropdown({id, text, list=[]}) {
    return (
        <div>
            <label htmlFor={id} className="pr-2">{text}</label>
            <select id={id} name={text} className={"border-2 border-slate-300 rounded-md py-1 px-2"} required>
                <option className="text-stone-400" value="" hidden>--Please choose an option--</option>
                {list.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
        </div>
    );
}
