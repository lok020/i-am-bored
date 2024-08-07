import React, { useState, useContext } from "react";
import { boredAPIContext } from "../Context";

interface LabelledInputInterface {
    type: string,
    id: string,
    text: string,
    placeholder: string,
    recommend: boolean
}

const LabelledInput:React.FC<LabelledInputInterface> = ({type, id, text, placeholder, recommend=false}) => {
    const [input, setInput] = useState('');
    const { localData } = useContext(boredAPIContext);

    function handleInputUpdate (e: React.FormEvent<HTMLInputElement>) {
        setInput(e.currentTarget.value);
        e.preventDefault();
    }

    function handleRecommendationClick (event: React.MouseEvent) {
        const input = event.target as HTMLElement;
        setInput(input.innerText);
        event.preventDefault();
    }

    // check if recommendation is on, user typed, and id existed in localData
    function hasRecommendationID () {
        return recommend && input && localData[id];
    }

    // check if input existed in recommendation list, and input does not equal to the recommendation
    function hasRecommendationString (recommendationStr:string) {
        return recommendationStr.toLowerCase().includes(input.toLowerCase()) && input.toLowerCase() !== recommendationStr.toLowerCase();
    }

    return (
        <div>
            <label htmlFor={id} className="pr-2">{text}</label>
            <input type={type} id={`${recommend ? "recommendation-" : ""}${id}`} name={text} value={input} autoComplete="off" required
            placeholder={placeholder} onChange={handleInputUpdate}
            className="border-2 border-slate-300 rounded-md px-2 py-1"/>
            <div className="inline-flex mt-1">
                {hasRecommendationID() &&
                localData[id].map((recommendationStr:string) => hasRecommendationString(recommendationStr) &&
                    <React.Fragment key={recommendationStr}>  
                        <div className={`text-sky-300`}>
                            &#9668;
                        </div>
                        <button key={recommendationStr} className="flex hover:invert px-1 bg-sky-300 rounded-md" value={recommendationStr} onClick={handleRecommendationClick}>
                            {recommendationStr}
                        </button>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
}

export default LabelledInput;
