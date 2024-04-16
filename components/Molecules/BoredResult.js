import React, { useContext } from "react";
import { boredContext } from "../Context/Context";

export default function BoredResult (){
    const {data} = useContext(boredContext);
    console.log(data);

    return (
        <div>
            {}
        </div>
    );
}