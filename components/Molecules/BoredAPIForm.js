import React, { useContext, useState } from "react";
import { boredAPIContext } from "../Context";
import LabelledInput from "../Atoms/LabelledInput";
import LabelledSlider from "../Atoms/LabelledSlider";
import LabelledDropDown from "../Atoms/LabelledDropdown";
import Button from "../Atoms/Button";

export default function BoredAPIForm() {
    const {setFetchData, setLocalData} = useContext(boredAPIContext);
    const [activity, setActivity] = useState("random");
    const RECOMMENDATION_NUM = 5;

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
        updateRecommendation(e);
        fetchData();
    }

    const updateRecommendation = (e) => {
        const recommendationInputs = e.target.querySelectorAll('[id^="recommendation-"]');
        let payload = {};
        // loop all id with `recommendation-`, add them in payload 
        for(let i=0; i<recommendationInputs.length; i++){
            const inputId = recommendationInputs[i].id.split('recommendation-');
            inputId.shift();
            const id = inputId.join('');
            const value = recommendationInputs[i].value;
            id in payload ? payload[id].push(value) : payload[id] = [value];
        }
        // init if there are no users in localStorage
        if (!localStorage.hasOwnProperty('i-am-bored')){
            setLocalData(payload);
            return localStorage.setItem('i-am-bored', JSON.stringify(payload));
        }
        let newLocalData = JSON.parse(JSON.stringify(JSON.parse(localStorage.getItem('i-am-bored'))));
        for (const [key, val] of Object.entries(payload)) {
            newLocalData[key] = [...new Set([...newLocalData[key], ...val])];
            if(newLocalData[key].length >= RECOMMENDATION_NUM-1)
                newLocalData[key] = newLocalData[key].slice(1, RECOMMENDATION_NUM-1);
        }
        setLocalData(newLocalData);
        localStorage.setItem('i-am-bored', JSON.stringify(newLocalData));
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
                setFetchData(data);
            }
        }catch(err){
            console.error('Error: ', err);
            setFetchData(err);
        }
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <LabelledInput type='text' id='name' text='Your name:' placeholder='Enter your name' recommendation={true}/>
            <LabelledDropDown id='activity' text='What is the metric you want the activity based on?' list={["random", "participants", "accessibility", "price", "type"]} update={setActivity}/>
            <div className="py-3">{component[activity]}</div>
            <Button type='submit' text='Submit'/>
        </form>
    );
}
