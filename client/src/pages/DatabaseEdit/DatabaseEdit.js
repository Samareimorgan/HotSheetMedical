import React from "react";
import UserMedication from "../../Containers/UserMedication/UserMedication";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./DatabaseEdit.css";

const databaseEdit = () => {
 return(
    <Auxiliary>
        <UserMedication />
    </Auxiliary>
 )
};

export default databaseEdit;


