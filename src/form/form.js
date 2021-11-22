import React, {setState, useState} from "react";
export default function userInput(){
    function handleChange(event){
        setState(event.target.value);
    }
    function handleSubmit(event){

    }
    return(
        <form onSubmit={handleSubmit()} className={"form__wrap"}>

            <div className="form__group">
                <div className="centered">
                    <div className="group">
                        <input type="text" id="name" required="required"/>
                        <label htmlFor="name">ask (e.g. 15 usd in rub)</label>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
        </form>
    );
}