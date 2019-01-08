import React, {Component} from "react";
import classes from "./Register.css";


class Register extends Component {

    constructor(props) {
        super(props);
        this.state ={};

    }

    submitRegister = props=> {

    }
    render() {
    return( 
    <div className = {classes.InnerContainer}>
        <div> className = {classes.BoxHeader}>
        Register 
        </div>
        <div className ={classes.Box}> 
            <div className = {classes.InputGroup}>
                <label htmlFor="username">Username</label>
                <input type = "text" name = "username" className = {classes.LogInInput} placeholder = "Username"/>
            </div>

            <div className = {classes.InputGroup}>
                <label htmlFor="password">Password</label>
                <input type = "password" name = "password" className = {classes.LogInInput} placeholder = "Password"/>
            </div>

            <button type = "button" className={classes.LogInBtn} onClick = {this.submitRegister}>Login</button>
        </div>
     </div>

  )
 }
};

export default Register; 