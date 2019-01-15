
import React from "react";
import classes from "./ProfileHeader.css";

const profileHeader =props => (

    <div className={classes.Profile}>
       
        <div className = {classes.Name}>
            <h2 >{props.name}</h2>   
        </div>
       
        
        
    </div>
)

export default profileHeader;