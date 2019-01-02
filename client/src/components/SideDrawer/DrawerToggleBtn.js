import React from "react";
import "./DrawerToggleBtn.css";

const drawerToggleBtn = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button_line"></div>
        <div className="toggle-button_line"></div>
        <div className="toggle-button_line"></div>
    </button>
);

export default drawerToggleBtn;