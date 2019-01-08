import React, {Component} from "react";
import classes from "./LogIn.css";



class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state ={};

    }

    submitLogin = props=> {

    }
    render() {
    return( 
    <div className = {classes.InnerContainer}>
        <div className ={classes.Box}> 
            <div className = {classes.InputGroup}>
                <label htmlFor="username">Username</label>
                <input type = "text" name = "username" className = {classes.LogInInput} placeholder = "Username"/>
            </div>

            <div className = {classes.InputGroup}>
                <label htmlFor="password">Password</label>
                <input type = "password" name = "password" className = {classes.LogInInput} placeholder = "Password"/>
            </div>

            <button type = "button" className={classes.LogInBtn} onClick = {this.submitLogin}>Login</button>
        </div>
     </div>

  )
 }
};

export default LogIn; 