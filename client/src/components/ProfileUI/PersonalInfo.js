import React from "react";
import classes from "./PersonalInfo.css";
import Auxiliary from "../../hoc/Auxiliary";

const personalInfo = props => (
    <Auxiliary>
    <div className = {classes.InfoHeader}>
        <h2>Personal Information</h2>
    </div>
    <div className ={classes.PersonalContainer}>
        <p> <strong> Birthdate:</strong> {props.birthdate}</p>
        <p> <strong>Street Address:</strong> {props.address}</p>
        <p> <strong>Phone number:</strong> {props.phone}</p>
        <p> <strong> Email: </strong> {props.email}</p>
     <button>Edit Information</button>
    </div>
    </Auxiliary>
)

export default personalInfo;