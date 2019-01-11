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
            isRegisterOpen: false,
            // activeClass1: classes.SelectedContoller, 
            // activeClass2: classes.Controller
            
        }
    }

    showLoginBox =() => {
        this.setState({isLoginOpen: true, isRegisterOpen: false});
      
        
        
    }

    showRegisterBox =() =>  {
        this.setState({isRegisterOpen: true, isLoginOpen:false});
    }

    // toggleClasses = () => {
    //     if(this.state({isRegisterOpen: false, isLoginOpen:true})) {
    //         this.setState({activeClass1:classes.SelectedController, activeClass2:classes.Controller})
    //     } else if (this.state({isRegisterOpen: true, isLoginOpen:false}))
    //         this.setState({activeClass1:classes.Controller, activeClass2:classes.SelectedController})
    // }


    render() {
        return (
            <Auxiliary> 
                <Modal> 
                    <div className = {classes.MainContainer}>
                    <div className = {classes.BoxController}>
                        <div className = {classes.Controller} onClick = {this.showLoginBox} {...this.toggleclass}> Login
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