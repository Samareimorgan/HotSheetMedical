import React from "react";
import classes from "./HotSheetData.css";



const hotsheet = props => (
    <div>
        <div className={classes.Profile}>
        
            <div className = {classes.Name}>
                <h2 >{props.name}</h2>   
            </div>   
            
        </div>

        <div className = {classes.InfoHeader}>
        <h2>Personal Information</h2>
        </div>
            <div className ={classes.PersonalContainer}>
            <p> <strong> Birthdate:</strong> {props.birthdate}</p>
            <p> <strong>Street Address:</strong> {props.address}</p>
            <p> <strong>Phone number:</strong> {props.phone}</p>
            <p> <strong> Email: </strong> {props.email}</p>
        </div>

        <div className= {classes.MedicalInfoHeader}>
            <h2>Medical Information</h2>
        </div>
        <div>
            <div className = {classes.MedicalInfoContainer}>
                <h3> Primary Doctor </h3>
                <p><strong>Name: </strong> {props.docname}</p>
                <p><strong>Company Name: </strong>{props.doccompany}</p>
                <p><strong>Office Address: </strong>{props.docaddress}</p>
                <p><strong>Phone: </strong>{props.docphone}</p>

                <h3> Current Medications </h3>
                <p> {props.medicationslist}</p>
            
                <h3> Allergies </h3>
                <p> {props.allergies}</p>
            </div>
        </div>
    </div>
)
