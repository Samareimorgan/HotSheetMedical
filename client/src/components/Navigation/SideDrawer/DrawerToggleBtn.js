import React from "react";
import classes from "./DrawerToggleBtn.css";

const drawerToggleBtn = props => (
    <button className={classes.ToggleButton} onClick={props.clicked}>
        <div className={classes.ToggleButtonLine}></div>
        <div className={classes.ToggleButtonLine}></div>
        <div className={classes.ToggleButtonLine}></div>
    </button>
);

export default drawerToggleBtn;