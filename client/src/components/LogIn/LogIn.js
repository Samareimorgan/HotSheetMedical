import React, {Component} from "react";
import classes from "./LogIn.css";



class Login extends Component {

    constructor(props) {
        super(props);
        this.state ={};

    }

    submitLogin = props=> {

    }
    render() {
    return( 
    <div className = {classes.InnerContainer}>
     <div> className = {classes.BoxHeader}>
        Register 
        </div>
        <div className ={classes.Box}> 
            <div className = {classes.InputGroup}>
                <label htmlFor="username" className ={classes.LoginLabel}>Username</label>
                <input type = "text" name = "username" className = {classes.LogInInput} placeholder = "Username"/>
            </div>

            <div className = {classes.InputGroup}>
                <label htmlFor="password">Password</label>
                <input type = "password" name = "password" className = {classes.LoginInput} placeholder = "Password"/>
            </div>

            <button type = "button" className={classes.LoginBtn} onClick = {this.submitLogin}>Login</button>
        </div>
     </div>

  )
 }
};

export default Login; 