import React from 'react';
import { Button } from 'reactstrap';
import classes from "./EmergencyButton.css";

const EmergencyButton = props => {
  return (
    
    <a href = {props.link}>
     <Button  className={classes.EmergencyBtn} > {props.name} </Button> </a>
   
  );
};

export default EmergencyButton; 