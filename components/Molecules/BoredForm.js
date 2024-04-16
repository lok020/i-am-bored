import React, { useContext } from "react";
import { boredContext } from "../Context/Context";
import LabelledInput from "../Atoms/LabelledInput";
import LabelledSlider from "../Atoms/LabelledSlider";
import LabelledDropDown from "../Atoms/LabelledDropdown";
import Button from "../Atoms/Button";

export default function BoredForm() {
    const {setData} = useContext(boredContext);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        updateNameRecommendation();
        fetchData();
    }

    const updateNameRecommendation = () => {
        // save inside userData.json locally
        let name = document.getElementById('name').value;
        let localData = JSON.parse(localStorage.getItem('iambored-users'));

        // init if there are no users in localStorage
        if (!localData) return localStorage.setItem('iambored-users', JSON.stringify({name:[name]}));
        // TODO: check if name exist in userData.user
        if(localData.length < 10){
            let newLocalData = localData;
            // newLocalData.name.push();
            // localStorage.setItem('iambored-users', JSON.stringify(newLocalData));
        }
        else{
            console.log('too much');
            // remove 1
            // add the most recent 1
        }
    }

    const fetchData = async() => {
        let accessibility = document.getElementById('accessibility').value;
        let price = document.getElementById('price').value;
        let type = document.getElementById('type').value;

        try{
            const res = await fetch(`http://www.boredapi.com/api/activity?accessibility=${accessibility}&?price=${price}&?type=${type}`);
            if(res.ok){
                const data = await res.json();
                setData(data);
            }
        }catch(err){
            console.error('Error: ', err);
        }
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <LabelledInput type='text' id='name' text='Your name:' placeholder='Enter your name'/>
            <br/>
            <LabelledSlider id='accessibility' text='How accessible do you want an event to be?' min={0} max={1} minText={'Very Accessible'} maxText={'Inaccessible'} step={0.01}/>
            <LabelledSlider id='price' text='How costly do you want an event to be?' min={0} max={1} minText={'Free'} maxText={'Expensive'} step={0.01}/>
            <LabelledDropDown id='type' text='What is the type of the activity do you enjoy?' list={["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]}/>
            <br/>
            <Button type='submit' text='Submit'/>
        </form>
    );
}
