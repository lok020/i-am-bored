import { createContext, Dispatch, SetStateAction } from "react";

interface boredAPIContextFetchDataInterface {
    fetchData: {},
    setFetchData: Dispatch<SetStateAction<{}>>;
}

interface boredAPIContextLocalDataInterface {
    localData: { [key: string]: string[] },
    setLocalData: Dispatch<SetStateAction<{}>>;
}

interface boredAPIContextInterface extends boredAPIContextFetchDataInterface, boredAPIContextLocalDataInterface {}

export const boredAPIContext = createContext({} as boredAPIContextInterface);
export const navBarContext = createContext({});