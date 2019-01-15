import React from "react";
import classes from "./MedicalInfo.css";
import Auxiliary from "../../hoc/Auxiliary";

const medicalInfo = props => (
    <Auxiliary >
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
            <button>Edit Information</button>
            </div>
            <div className = {classes.MedicalInfoContainer}>
                <h3> Current Medications </h3>
                <p> {props.medicationslist}</p>
            <button>Edit Information</button>
            </div>
            <div className = {classes.MedicalInfoContainer}>
                <h3> Allergies </h3>
                <p> {props.allergies}</p>
            <button>Edit Information</button>
            </div>
        </div>

    </Auxiliary>
)

export default medicalInfo;