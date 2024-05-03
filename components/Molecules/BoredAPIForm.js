import React, { useContext, useState } from "react";
import { boredAPIContext } from "../Context";
import LabelledInput from "../Atoms/LabelledInput";
import LabelledSlider from "../Atoms/LabelledSlider";
import LabelledDropDown from "../Atoms/LabelledDropdown";
import Button from "../Atoms/Button";

export default function BoredAPIForm() {
    const {setData, localData, setLocalData} = useContext(boredAPIContext);
    const [activity, setActivity] = useState("random");

    // component list for display based on activity state
    const component = {
        'random': <></>,
        'participants': <LabelledInput type='number' id='participants' text='How many participants will be involved?' placeholder='Enter a number'/>,
        'accessibility': <LabelledSlider id='accessibility' text='How accessible do you want an event to be?' min={0} max={1} minText={'Very Accessible'} maxText={'Inaccessible'} step={0.01}/>,
        'price': <LabelledSlider id='price' text='How costly do you want an event to be?' min={0} max={1} minText={'Free'} maxText={'Expensive'} step={0.01}/>,
        'type': <LabelledDropDown id='type' text='What is the type of the activity do you enjoy?' list={["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]}/>
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        updateNameRecommendation();
        fetchData();
    }

    const updateNameRecommendation = () => {
        let name = document.getElementById('name').value;

        // init if there are no users in localStorage
        if (!localStorage.hasOwnProperty('iambored-users')){
            const payload = {name:[name]};
            setLocalData(payload);
            return localStorage.setItem('iambored-users', JSON.stringify(payload));
        }
        if(!localData.name.includes(name)){
            setLocalData(JSON.parse(localStorage.getItem('iambored-users')));
            let newLocalData = localData;
            if(localData.name.length >= 5)
                newLocalData.name.shift();
            newLocalData.name.push(name);
            setLocalData(newLocalData);
            localStorage.setItem('iambored-users', JSON.stringify(newLocalData));
        }
    }

    const fetchData = async() => {
        const basedUrl = "http://www.boredapi.com/api/activity";

        // get the additional query based on picked activity
        let additionalURL = "";
        switch(activity) {
            case 'participants':
                const participants = document.getElementById('participants').value;
                additionalURL = `?participants=${participants}`;
                break;
            case 'accessibility':
                const accessibility = document.getElementById('accessibility').value;
                additionalURL = `?minaccessibility=0&maxaccessibility=${accessibility}`;
                break;
            case 'price':
                const price = document.getElementById('price').value;
                additionalURL = `?minprice=0&maxprice=${price}`;
                break;
            case 'type':
                const type = document.getElementById('type').value;
                additionalURL = `?type=${type}`;
                break;
            default:
                additionalURL = "/";
        }

        try{
            const res = await fetch(`${basedUrl}${additionalURL}`);
            if(res.ok){
                const data = await res.json();
                setData(data);
            }
        }catch(err){
            console.error('Error: ', err);
            setData(err);
        }
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <LabelledInput type='text' id='name' text='Your name:' placeholder='Enter your name'/>
            <LabelledDropDown id='activity' text='What is the metric you want the activity based on?' list={["random", "participants", "accessibility", "price", "type"]} update={setActivity}/>
            <div className="py-3">{component[activity]}</div>
            <Button type='submit' text='Submit'/>
        </form>
    );
}
