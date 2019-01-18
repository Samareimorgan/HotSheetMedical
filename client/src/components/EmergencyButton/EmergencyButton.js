import React from 'react';
import { Button } from 'reactstrap';
import classes from "./EmergencyButton.css";

const EmergencyButton = props => {
  return (
    
    <Button  className={classes.EmergencyBtn} > {props.name} </Button>
   
  );
};

export default EmergencyButton; 