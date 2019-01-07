import React, {Component} from "react";
//import API from "../../utils/API";
import EmergencyButton from "../../components/EmergencyButton/EmergencyButton";
import NavBar from "../../components/NavBar/NavBar";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Backdrop from "../../components/Backdrop/Backdrop";
import Footer from "../../components/Footer/Footer";
import "./home.css"

class Home extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return{sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backDropClickHandler = () => {
        this.setState({sideDrawerOpen:false});
    };


render() {
     
    let backDrop;
    
    if(this.state.sideDrawerOpen) {
        
        backDrop = <Backdrop click = {this.backDropClickHandler}/>
    }
    return (
    <div>
        <NavBar drawerClickHandler = {this.drawerToggleClickHandler}/>
        <SideDrawer show = {this.state.sideDrawerOpen}/>
        {backDrop}
        <div className ="emergency-home-title">
            <h2> Emergency Information</h2>
        </div>
     
            <div className ="homeEmergencyBtns"> 

                <EmergencyButton />
                <EmergencyButton />
                <EmergencyButton />
                <EmergencyButton />
                <EmergencyButton />
            
            </div>
        <Footer />
    </div>
        );
    }
}

export default Home;