import { createContext } from "react";

interface boredAPIContextFetchDataInterface {
    fetchData: null,
    setFetchData: () => {}
}

interface boredAPIContextLocalDataInterface {
    localData: {},
    setLocalData: () => {}
}

export const boredAPIContext = createContext<boredAPIContextFetchDataInterface | boredAPIContextLocalDataInterface | {}>({});
export const navBarContext = createContext({});