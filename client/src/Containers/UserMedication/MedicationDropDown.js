import React from "react";
import Option from "./Option";
import classes from "./MedicationDropDown.css";

const medicationDropDown = (props) => {
    return (
        <div>
            <select className ={classes.DropDown}>
                <Option suggestion = {suggestion.suggestion}/>
            </select>

        </div>
    )
    //grab the 3 letters of the medication from the medication input form
    //then we need to add those 3 letters to the mapi api get query
    //we need to invoke the query
    //we need to receive the json object response of response suggestions
    // take that json response and push them to the select options portion of the dropdown menu

}

export default medicationDropDown; 