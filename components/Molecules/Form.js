import React from "react";
import LabelledInput from "../Atoms/LabelledInput";
import LabelledSlider from "../Atoms/LabelledSlider";
import LabelledDropDown from "../Atoms/LabelledDropdown";
import Button from "../Atoms/Button";

export default function Form() {
    const fetchData = async(e) => {
        e.preventDefault();
        // TODO: save inside userData.json locally
        // let name = document.getElementById('name').value;
        let accessibility = document.getElementById('accessibility').value;
        let price = document.getElementById('price').value;
        let participants = document.getElementById('participants').value;
        let type = document.getElementById('type').value;

        try{
            const res = await fetch(`http://www.boredapi.com/api/activity?accessibility=${accessibility}&?price=${price}&?participants=${participants}&?type=${type}`);
            if(res.ok){
                const data = await res.json();
                console.log(data);
            }
        }catch(err){
            console.error('Error: ', err);
        }
    }

    return (
        <form onSubmit={fetchData}>
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
