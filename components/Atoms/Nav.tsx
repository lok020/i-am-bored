import Link from "next/link";
import { navBarContext } from "../../context/NavBarContext";
import { useContext } from "react";

interface NavInterface {
    path: string,
    name: string
}

const Nav:React.FC<NavInterface> = ({path="/", name=""}) => {
    const {curNav, setCurNav} = useContext(navBarContext);

    return(
        <Link className={`nav ${curNav===path && "nav-selected"}`} href={path} onClick={() => setCurNav(path)}>{name}</Link>
    );
}

export default Nav;
