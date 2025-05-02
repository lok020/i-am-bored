import { createContext, Dispatch, SetStateAction } from "react";

interface navBarContextInterface {
    curNav: string,
    setCurNav: Dispatch<SetStateAction<{}>>;
}

export const navBarContext = createContext({} as navBarContextInterface);
