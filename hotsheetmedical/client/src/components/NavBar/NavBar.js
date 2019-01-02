 import React from 'react';
import "./NavBar.css";
import DrawerToggleBtn from "../SideDrawer/DrawerToggleBtn";
import logo from "./Logo/Hotsheetlogocolor.png";

const navbar = props => (
    <header className = "navbar">
        <nav className="navbar_navigation">
            <div className = "navbar-toggle-button">
                <DrawerToggleBtn click={props.drawerClickHandler}/>
            </div>
            <div className = "navigation-logo"> <a href="/"> <img className="logo" src={logo} alt ={"logo"}/></a></div>
            <div className ="spacer"></div>
            <div className ="navbar_navigation_items">
                <ul>
                    <li><a href ="/">Home</a></li>
                    <li><a href ="/">Profile</a></li>
                    <li><a href ="/">Settings</a></li>
                    <li><a href ="/">Connections</a></li>
                    <li><a href ="/">About</a></li>
                    <li><a href ="/">Logout/LogIn</a></li>
                </ul>
            </div>
        </nav>
    </header>
); 

export default navbar;