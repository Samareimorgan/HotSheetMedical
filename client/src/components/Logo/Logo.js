import React from "react";
import classes from "./Logo.css";

import HotSheetLogo from "../../assets/Images/Hotsheetlogocolor.png";

const logo = props => (
    <div className = {classes.Logo}>
        <img src = {HotSheetLogo} alt = "HotSheet Medical Logo" />
    </div>

);

export default logo;