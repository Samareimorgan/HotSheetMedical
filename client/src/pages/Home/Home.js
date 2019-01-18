import React, {Component} from "react";
//import API from "../../utils/API";
import EmergencyButton from "../../components/EmergencyButton/EmergencyButton";
import Layout from "../../components/Layout/Layout";

import classes from "./home.css"

class Home extends Component {
  


onClickHandler = props => {
  
}

render() {
    return (
    <div> 
        <Layout>
     
        <div className ={classes.EmergencyHomeTitle}>
            <h2> Emergency Information</h2>
        </div>
     
            <div className ={classes.HomeEmergencyBtns}> 

                <EmergencyButton name =" Samantha Johnston" clicked = {this.onClickHandler}/>
                <EmergencyButton name = "Different Patient" />
                <EmergencyButton name = "Different Patient" />
                <EmergencyButton name = "Different Patient" />
                <EmergencyButton name = "Different Patient" />
            
            </div>
        </Layout>
    </div>
        );
    }
}

export default Home;