"use client"

import { useState } from "react";
import { navBarContext } from "../Context/Context";
import Nav from "../Atoms/Nav";
import { usePathname } from "next/navigation";

export default function NavBar({navs}) {
    const pathname = usePathname();
    const [curNav, setCurNav] = useState(pathname);

    return(
        <navBarContext.Provider value={{curNav, setCurNav}}>
            <div className="flex w-full gap-4">
                {navs.map(({path, name}) => <Nav key={name} path={path} name={name}/>)}
            </div>
        </navBarContext.Provider>
    );
}