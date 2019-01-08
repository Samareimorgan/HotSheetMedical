import React, {Component} from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.css";
import NavBar from "../Navigation/NavBar/NavBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Footer from "../Footer/Footer";



class Layout extends Component {
    state = {
        showSideDrawer: true, 
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});

    }
    render () {
        return (
        <Auxiliary>
        <NavBar/>
        <SideDrawer open={this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler}/>
        <main className = {classes.Content}>
        {this.props.children}</main>
    
        <Footer />
        </Auxiliary>
        )
    }

    
};

export default Layout;