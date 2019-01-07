import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import NavBar from "../Navigation/NavBar/NavBar";
import Logo from "../Navigation/NavBar/Logo/Hotsheetlogocolor.png";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import DrawerToggleBtn from "../Navigation/SideDrawer/DrawerToggleBtn";
import Backdrop from "../Navigation/Backdrop/Backdrop";

const layout = (props) => (
    <Auxiliary>

    <div>NavBar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
    </Auxiliary>
);

export default layout;