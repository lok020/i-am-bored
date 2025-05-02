"use client"

import { useState } from "react";
import { navBarContext } from "../Context";
import Nav from "../Atoms/Nav";
import { usePathname } from "next/navigation";
import { activeApp } from "@/consts/activeApp";

export default function NavBar() {
    const pathname = usePathname();
    const [curNav, setCurNav] = useState(pathname);

    return(
        <navBarContext.Provider value={{curNav, setCurNav}}>
            <div className="flex w-full gap-4">
                <Nav key={"Home"} path={"/"} name={"Home"}/>
                {activeApp.map(({path, name}) => <Nav key={name} path={path} name={name}/>)}
            </div>
        </navBarContext.Provider>
    );
}