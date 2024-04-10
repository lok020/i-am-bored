import React from "react";

export default function InputBox({type, id, text}) {

    return (
        <>
            <label htmlFor={id}>{text}</label>
            <input type={type} id={id} name={text}/>
        </>
    );
}