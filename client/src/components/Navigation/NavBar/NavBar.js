import React from 'react';
// import DrawerToggleBtn from "../SideDrawer/DrawerToggleBtn";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggleBtn from "../SideDrawer/DrawerToggleBtn";
import classes from "./NavBar.css";


const navbar = props => (
    <header className = {classes.Navbar}>
        <div >
            <DrawerToggleBtn clicked = {props.toggleOpen}/>
        </div>
        <div className = {classes.Logo}>
        <Logo />
        </div>
        <nav className ={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
); 

export default navbar;