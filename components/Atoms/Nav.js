import Link from "next/link";
import { navBarContext } from "../Context/Context";
import { useContext } from "react";

export default function Nav({path="/", name=""}) {
    const {curNav, setCurNav} = useContext(navBarContext);

    return(
        <Link className={`nav ${curNav===path && "nav-selected"}`} href={path} onClick={() => setCurNav(path)}>{name}</Link>
    );
}