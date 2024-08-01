import React, { useContext } from "react";
import { boredAPIContext } from "../Context";
import Link from "next/link";

export default function BoredAPIResult (){
    const {fetchData} = useContext(boredAPIContext);

    return (
        <div className="grid">
            {fetchData.error && <>{`Error: ${fetchData.error}`}</>}
            {fetchData.activity}
            {fetchData.link && <Link href={fetchData.link} target="_blank">{fetchData.link}</Link>}
        </div>
    );
}