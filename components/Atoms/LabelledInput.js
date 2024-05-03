import React, { useState, useContext } from "react";
import { boredContext } from "../Context";

export default function LabelledInput({type, id, text, placeholder, recommendation=true}) {
    const [input, setInput] = useState('');
    const {localData} = useContext(boredContext);

    const handleRecommendationClick = (e) => {
        setInput(e.currentTarget.value);
    }

    return (
        <div>
            <label htmlFor={id} className="pr-2">{text}</label>
            <input type={type} id={id} name={text} value={input} autoComplete="off" required
            placeholder={placeholder} onChange={(e) => setInput(e.currentTarget.value)}
            className="border-2 border-slate-300 rounded-md px-2 py-1"/>
            <div className="inline-flex mt-1">
                {/* show recommendations when:
                1. recommendation is on (default is on)
                2. user typed
                3. JSON list includes input string (not case sensitive)
                4. user input not equal to the recommendation
                */}
                {recommendation && input && localData[id] &&
                localData[id].map((data) => data.toLowerCase().includes(input.toLowerCase()) && input.toLowerCase() !== data.toLowerCase() &&
                    <button key={data} className="flex hover:invert" value={data} onClick={handleRecommendationClick}>
                        <div className={`text-sky-300`}>
                            &#9668;
                        </div>
                        <div className={`px-1 bg-sky-300 rounded-md`}>
                            <div>{data}</div>
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
}
