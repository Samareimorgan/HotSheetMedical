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
        <div className = {classes.BoxHeader}>
        Register 
        </div>
        <div className ={classes.Box}> 
            <div className = {classes.InputGroup}>
                <label htmlFor="username" className ={classes.RegisterLabel}>Username</label>
                <input type = "text" name = "username" className = {classes.RegisterInput} placeholder = "Username"/>
            </div>

            <div className = {classes.InputGroup}>
                <label htmlFor="email" className ={classes.RegisterLabel}>Email</label>
                <input type = "email" name = "email" className = {classes.RegisterInput} placeholder = "Email"/>
            </div>

            <div className = {classes.InputGroup}>
                <label htmlFor="password" className ={classes.RegisterLabel}>Password</label>
                <input type = "password" name = "password" className = {classes.RegisterInput} placeholder = "Password"/>
            </div>

            <button type = "button" className={classes.RegisterBtn} onClick = {this.submitRegister}>Register</button>
        </div>
     </div>

  )
 }
};

export default Register; 