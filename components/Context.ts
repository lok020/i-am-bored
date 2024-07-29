import { createContext } from "react";

interface borderAPIContextInterface {
    data: {},
    setData: () => {},
    localData: {},
    setLocalData: () => {}
};

export const boredAPIContext = createContext<borderAPIContextInterface | {}>({});
export const navBarContext = createContext({});