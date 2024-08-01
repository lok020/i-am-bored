import React from "react";

interface ButtonInterface {
    text: string,
    type: "submit" | "reset" | "button" | undefined,
}

const Button: React.FC<ButtonInterface> = ({type, text}) => {
    return (
        <button className="border-2 border-slate-500 rounded-md px-2 hover:bg-sky-100" type={type}>{text}</button>
    );
}

export default Button;
