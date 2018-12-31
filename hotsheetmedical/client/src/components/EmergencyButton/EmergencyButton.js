import React from 'react';
import { Button } from 'reactstrap';
import "./EmergencyButton.css";

export default props => {
  return (
    
    <Button  className="emergencyBtn" {...props.name}> Patient Name </Button>
   
  );
};