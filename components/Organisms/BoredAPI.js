import React, { useEffect, useState } from "react";
import {boredContext} from "../Context/Context";
import BoredAPIForm from "../Molecules/BoredAPIForm";
import BoredAPIResult from "../Molecules/BoredAPIResult";

export default function BoredAPI() {
    const [localData, setLocalData] = useState({});
    const [data, setData] = useState(null);

    useEffect(() => {
        localStorage.hasOwnProperty('iambored-users') && setLocalData(JSON.parse(localStorage.getItem('iambored-users')));
    }, []);

    return (
        <boredContext.Provider value={{data, setData, localData, setLocalData}}>
            <BoredAPIForm />
            {data && <BoredAPIResult />}
        </boredContext.Provider>
    );
}
