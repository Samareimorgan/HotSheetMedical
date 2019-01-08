import React from "react";
import classes from "./SideDrawer.css";
import Logo from "../../Logo/Logo";
import Auxiliary from "../../../hoc/Auxiliary";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../Backdrop/Backdrop";


const sideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    
    return (
    <Auxiliary>
    <Backdrop show={props.open} clicked={props.closed}/>
    <div className ={attachedClasses.join(' ')}>
        <div className = {classes.Logo}>
            <Logo />
         
            <nav className ={classes.NavigationItems}>
                <NavigationItems />
            </nav>
        </div>
    </div>
    </Auxiliary>
)
};

export default sideDrawer;