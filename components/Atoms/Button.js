import React from "react";

export default function Button({type, text}) {
    return (
        <button className="border-2 border-slate-500 rounded-md px-2 hover:bg-sky-100" type={type}>{text}</button>
    );
}
