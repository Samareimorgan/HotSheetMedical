import React from 'react';
import { Button } from 'reactstrap';
import classes from "./EmergencyButton.css";

export default props => {
  return (
    
    <Button  className={classes.EmergencyBtn} {...props.name}> Patient Name </Button>
   
  );
};