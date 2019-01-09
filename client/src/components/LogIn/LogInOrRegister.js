import React, {Component} from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Modal from "../Modal/Modal";
import classes from "./LogInOrRegister.css";
import Login from "./LogIn";
import Register from "./Register";


class LogInOrRegister extends Component{
    constructor(props) {
        super(props);
        this.state ={ 
            isLoginOpen: true,
            isRegisterOpen: false
        };
    }
    showLoginBox =() => {
        this.setState({isLoginOpen: true, isRegisterOpen: false})
        
    }
    showRegisterBox =() =>  {
        this.setState({isRegisterOpen: true, isLoginOpen:false});
    }



    render() {
    return(
    <Auxiliary> 
        <Modal> 
            <div className = {classes.MainContainer}>
             <div className = {classes.BoxController}>
                <div className = {classes.Controller} onClick ={this.showLoginBox}>
                Login
                </div>
                <div className = {classes.Controller} onClick = {this.showRegisterBox}>
                Register
                </div>
             </div>
             <div className = {classes.BoxContainer}> 
                {this.state.isLoginOpen && <Login />}
                {this.state.isRegisterOpen && <Register />}
             </div>
            </div>
        </Modal>

    </Auxiliary>

    )
 }
};

export default LogInOrRegister;