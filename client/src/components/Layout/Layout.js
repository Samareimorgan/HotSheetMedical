import React, {Component} from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.css";
import NavBar from "../Navigation/NavBar/NavBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Footer from "../Footer/Footer";



class Layout extends Component {
    state = {
        showSideDrawer: true 
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
        <SideDrawer open={this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler}/>
        <main className = {classes.Content}>
        {this.props.children}</main>
    
        <Footer />
        </Auxiliary>
        )
    }

    
};

export default Layout;