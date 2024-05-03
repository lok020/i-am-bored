import React, { useContext } from "react";
import { boredAPIContext } from "../Context";
import Link from "next/link";

export default function BoredAPIResult (){
    const {data} = useContext(boredAPIContext);

    return (
        <div className="grid">
            {data.error && <>{`Error: ${data.error}`}</>}
            {data.activity}
            {data.link && <Link href={data.link} target="_blank">{data.link}</Link>}
        </div>
    );
}