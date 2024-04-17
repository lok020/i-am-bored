import React, { useState } from "react";
import {boredContext} from "../Context/Context";
import BoredAPIForm from "../Molecules/BoredAPIForm";
import BoredAPIResult from "../Molecules/BoredAPIResult";

export default function BoredAPI() {
    const [localData, setLocalData] = useState({});
    const [data, setData] = useState(null);

    return (
        <boredContext.Provider value={{data, setData, localData, setLocalData}}>
            <BoredAPIForm />
            {data && <BoredAPIResult />}
        </boredContext.Provider>
    );
}
