"use client"

import React, { useEffect, useState } from "react";
import { boredContext } from "@/components/Context";
import BoredAPIForm from "@/components/Molecules/BoredAPIForm";
import BoredAPIResult from "@/components/Molecules/BoredAPIResult";

export default function BoredAPIPage() {
    const [localData, setLocalData] = useState({});
    const [data, setData] = useState(null);
    
    useEffect(() => {
        localStorage.hasOwnProperty('iambored-users') && JSON.parse(localStorage.getItem('iambored-users') || "");
    }, []);

    return (
        <boredContext.Provider value={{data, setData, localData, setLocalData}}>
            <BoredAPIForm />
            {data && <BoredAPIResult />}
        </boredContext.Provider>
    );
}


//value={{data, setData, localData, setLocalData}}