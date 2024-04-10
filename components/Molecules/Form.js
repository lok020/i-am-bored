import React from "react";
import LabeledInput from "../Atoms/LabeledInput";
import Button from "../Atoms/Button";

export default function Form() {
    return (
        <form action=''>
            <LabeledInput type='text' id='name' text='Your name:'/>
            <br/>
            <Button type='submit' text='Submit'/>
        </form>
    );
}