import React, { useState } from "react";
import {boredContext} from "../Context/Context";
import BoredForm from "../Molecules/BoredForm";
import BoredResult from "../Molecules/BoredResult";

export default function Bored() {
    const [localData, setLocalData] = useState({});
    const [data, setData] = useState(null);

    return (
        <boredContext.Provider value={{data, setData, localData, setLocalData}}>
            <BoredForm />
            {data && <BoredResult />}
        </boredContext.Provider>
    );
}
