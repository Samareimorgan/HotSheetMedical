import React, {Component} from "react";
//import API from "../../utils/API";
import EmergencyButton from "../../components/EmergencyButton/EmergencyButton";
import Layout from "../../components/Layout/Layout";

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

                <EmergencyButton />
                <EmergencyButton />
                <EmergencyButton />
                <EmergencyButton />
                <EmergencyButton />
            
            </div>
        </Layout>
    </div>
        );
    }
}

export default Home;