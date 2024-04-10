import React from "react";
import LabelledInput from "../Atoms/LabelledInput";
import LabelledSlider from "../Atoms/LabelledSlider";
import LabelledDropDown from "../Atoms/LabelledDropdown";
import Button from "../Atoms/Button";

export default function Form() {
    return (
        <form action=''>
            <LabelledInput type='text' id='name' text='Your name:' placeholder='Enter your name'/>
            <br/>
            <LabelledSlider id='accessibility' text='How accessible do you want an event to be?' min={0} max={1} minText={'Very Accessible'} maxText={'Inaccessible'} step={0.01}/>
            <LabelledSlider id='price' text='How costly do you want an event to be?' min={0} max={1} minText={'Free'} maxText={'Expensive'} step={0.01}/>
            <LabelledInput type='number' id='participants' text='How many people could involve in this activity?' placeholder='Number of people' recommendation={false}/>
            <LabelledDropDown id='type' text='What is the type of the activity do you enjoy?' list={["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]}/>
            <br/>
            <Button type='submit' text='Submit'/>
        </form>
    );
}
