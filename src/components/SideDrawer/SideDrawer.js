import React from "react";
import "./SideDrawer.css";
import logo from "../NavBar/Logo/Hotsheetlogocolor.png";

const sideDrawer = props => {
    let drawerClasses = "side-drawer";
    if (props.show) {
        drawerClasses = "side-drawer open";
    }
    
    return (
    <nav className = {drawerClasses}>
    <img src = {logo} alt={"logo"} className ="side-drawer-logo"/>
        <ul>
        
            <li><a href ="/">Home</a></li>
            <li><a href ="/Profile">Profile</a></li>
            <li><a href ="/Settings">Settings</a></li>
            <li><a href ="/Connections">Connections</a></li>
            <li><a href ="/About">About</a></li>
            <li><a href ="/Login/Logout">Logout/LogIn</a></li>
        
        </ul>
    </nav>
)
};

export default sideDrawer;