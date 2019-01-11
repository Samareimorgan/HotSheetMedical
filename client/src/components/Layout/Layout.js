import React, {Component} from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.css";
import NavBar from "../Navigation/NavBar/NavBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Footer from "../Footer/Footer";
import LoginOrRegister from "../LogIn/LogInOrRegister";



class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});

    }

    sideDrawerToggleHandler = () => {
        this.setState({showSideDrawer: true});
    }
    render () {
        return (
        <Auxiliary>
        <NavBar toggleOpen = {this.sideDrawerToggleHandler}/>
        <LoginOrRegister />
        <SideDrawer open={this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler}/>
        <main className = {classes.Content}>
        {this.props.children}</main>
    
        <Footer />
        </Auxiliary>
        )
    }

    
};

export default Layout;