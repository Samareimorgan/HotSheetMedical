import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./FormatDropdown.css";

const formatdropdown = props => (

    <Auxiliary>
        <select className = {classes.Dropdown}>
            <option>Choose first responder</option>
            <option>South Metro Fire</option>
            <option> Denver Health Paramedics </option>
            <option> American Medical Response</option>
            <option> Mile High Ambulance</option>

        </select>
    </Auxiliary>
)

export default formatdropdown;