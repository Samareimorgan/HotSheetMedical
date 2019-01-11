import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
    <ul className = {classes.NavigationItems}>
        <NavigationItem link = "/" active>Home</NavigationItem>
        <NavigationItem link = "/">Profile</NavigationItem>
        <NavigationItem link = "/">Settings</NavigationItem>
        <NavigationItem link = "/"> Connections</NavigationItem>
        <NavigationItem link = "/">About</NavigationItem>
        <NavigationItem link = "/LoginOrRegister" >Login</NavigationItem>
        


    </ul>
);

export default navigationItems;