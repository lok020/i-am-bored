"use client"

import React, { useEffect, useState } from "react";
import { boredAPIContext } from "@/components/Context";
import BoredAPIForm from "@/components/Molecules/BoredAPIForm";
import BoredAPIResult from "@/components/Molecules/BoredAPIResult";

export default function BoredAPIPage() {
    const [localData, setLocalData] = useState({});
    const [fetchData, setFetchData] = useState({});
    
    useEffect(() => {
        localStorage.hasOwnProperty('i-am-bored') && setLocalData(JSON.parse(localStorage.getItem('i-am-bored') || ""))
    }, []);

    return (
        <boredAPIContext.Provider value={{fetchData, setFetchData, localData, setLocalData}}>
            Due to server site(<a href="https://www.boredapi.com/" className="text-blue-600 hover:text-blue-800 visited:text-purple-600" target="_blank">https://www.boredapi.com/</a>) is down, Bored API page is temporary shutdown until further notice. Sorry for the inconvenience.
            {/* <BoredAPIForm />
            {fetchData && <BoredAPIResult />} */}
        </boredAPIContext.Provider>
    );
}
