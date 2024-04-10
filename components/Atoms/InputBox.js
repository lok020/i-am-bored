import React, { useState } from "react";

export default function InputBox({type, id, text}) {
    const [focus, setFocus] = useState(false);

    return (
        <>
            <label htmlFor={id}>{text}</label>
            <input type={type} id={id} name={text} autoComplete="off" onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}/>
            {focus && <div className="inline-flex">
                test
            </div>
            }
        </>
    );
}