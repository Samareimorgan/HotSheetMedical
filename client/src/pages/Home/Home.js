import React, {Component} from "react";
//import API from "../../utils/API";
import EmergencyButton from "../../components/EmergencyButton/EmergencyButton";
import Layout from "../../components/Layout/Layout";
import {Link} from "react-router-dom";
import classes from "./home.css"

class Home extends Component {
  

render() {
    return (
    <div> 
        <Layout>
     
        <div className ={classes.EmergencyHomeTitle}>
            <h2> Emergency Information</h2>
        </div>
     
            <div className ={classes.HomeEmergencyBtns}> 

                <EmergencyButton name =" Samantha Johnston" link="/QRCode"/>
                {/* <EmergencyButton name = "Different Patient" />
                <EmergencyButton name = "Different Patient" />
                <EmergencyButton name = "Different Patient" />
                <EmergencyButton name = "Different Patient" /> */}
            
            </div>
        </Layout>
    </div>
        );
    }
}

export default Home;