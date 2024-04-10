import React from "react";
import InputBox from "../Atoms/InputBox";
import Button from "../Atoms/Button";

export default function Form() {
    return (
        <form action=''>
            <InputBox type='text' id='name' text='Your name:'/>
            <br/>
            <Button type='submit' text='Submit'/>
        </form>
    );
}