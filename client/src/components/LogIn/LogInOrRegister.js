import React, {Component} from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Modal from "../Modal/Modal";
import classes from "./LogInOrRegister.css";


class LogInOrRegister extends Component{
    constructor(props) {
        super(props);
        this.state ={};
    }
    render() {
    return(
    <Auxiliary> 
        <Modal> 
            <div className = {classes.MainContainer}>
             <div className = {classes.BoxContainer}>
              <div className = {classes.Controller}>
              Login
              </div>
              <div className = {classes.Controller}>
              Register
              </div>
             </div>
            </div>
        </Modal>

    </Auxiliary>

    )
 }
};

export default LogInOrRegister;