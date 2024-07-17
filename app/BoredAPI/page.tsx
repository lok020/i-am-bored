"use client"

import React, { useEffect, useState } from "react";
import { boredAPIContext } from "@/components/Context";
import BoredAPIForm from "@/components/Molecules/BoredAPIForm";
import BoredAPIResult from "@/components/Molecules/BoredAPIResult";

export default function BoredAPIPage() {
    const [localData, setLocalData] = useState({});
    const [data, setData] = useState(null);
    
    useEffect(() => {
        localStorage.hasOwnProperty('i-am-bored') && setLocalData(JSON.parse(localStorage.getItem('i-am-bored') || ""))
    }, []);

    return (
        <boredAPIContext.Provider value={{data, setData, localData, setLocalData}}>
            <BoredAPIForm />
            {data && <BoredAPIResult />}
        </boredAPIContext.Provider>
    );
}
