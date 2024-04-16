import React, { useState } from "react";
import localData from "../../public/data/localData.json";

export default function LabelledInput({type, id, text, placeholder, recommendation=true}) {
    const [input, setInput] = useState('');
    const userData = localData.user;

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
                {recommendation && input && userData.map((data) => data[id].toLowerCase().includes(input.toLowerCase()) && input.toLowerCase() !== data[id].toLowerCase() &&
                <button key={data[id]} className="flex hover:invert" value={data[id]} onClick={handleRecommendationClick}>
                    <div className={`text-sky-300`}>
                        &#9668;
                    </div>
                    <div className={`px-1 bg-sky-300 rounded-md`}>
                        <div>{data[id]}</div>
                    </div>
                </button>
                )}
            </div>
        </div>
    );
}
