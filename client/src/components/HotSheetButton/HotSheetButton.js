import React from "react";
import {Button}from "reactstrap";
import classes from "./HotSheetButton.css";

const hotSheetButton = props => (

    <div >
        <Button className ={classes.HotSheetBtn}>Go To HotSheet <i className="fas fa-fire"></i></Button>
    </div>
)

export default hotSheetButton;