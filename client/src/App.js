import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import Auxiliary from "./hoc/Auxiliary";

import axios from "axios";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Home from "./pages/Home/Home.js";
import UserProfile from "./pages/UserProfile/UserProfile";
import DatabaseEdit from "./pages/DatabaseEdit/DatabaseEdit";
// import LoginOrRegister from "./pages/LoginOrRegister/LoginOrRegister";
import Qrcode from "./pages/QRCode/QRCode";

import LoginModal from "../src/components/LogIn/LoginModal/LoginModal";
import Auth from "./pages/Auth/Auth";
import HotSheet from "./pages/HotSheet/HotSheet";




const app = props => (
  // state = {
  //   isAuth: true, 
  //   authmode: "login",
  //   error: null
  // };

  // logoutHandler = () => {
  //   this.setState({ isAuth: false});
  // };

  // authHandler = (event, authData) => {
  //   event.preventDefault();
  //   if(authData.email.trim() === "" || authData.password.trim() ==="") {
  //     return; 
  //   }
  //   let request; 
  //   if (this.state.authMode === "login") {
  //     request = axios.post("https://localhost:3001/login", authData);
  //   } else {
  //     request = axios.post ("https://localhost:3001/signup"), authData;
  //   }
  //   request
  //   .then(authResponse => {
  //     if(authResponse.status ===201 || authResponse.status ===200) {
  //       const token = authResponse.data.token; 
  //       console.log(token);
  //       setStorage.setItem("createdtoken", {token});
  //       const createdtoken = sessionStorage.getItem("createdtoken");
  //       console.log(createdtoken);
  //       this.setState({ isAuth: true});
  //     }
  //   })
  //   .catch(err => {
  //     this.errorHandler(err.response.data.message);
  //     console.log(err);
  //     this.setState({ isAuth: false });
  //   });
  // };

  // errorHandler = message => {
  //   this.setState({
  //     error: message
  //   });
  // };

  // render() {
  //   let routes = (
  //     <Switch> 

  //       <Redirect from ="/" to="/" exact />
  //       <Redirect from ="/auth" to="/" exact />
  //       <Redirect from ="/signup" to="/" exact />
  //     <Route
  //       path =""


  //   )
  // }
  
  
  
    <Auxiliary>
    <Layout>
 
    

      
  
      <Router>
        <div>
            <Route exact path = "/" component={Home} />
      
            <Route path = "/DatabaseEdit" component = {DatabaseEdit} />
        
            <Route  path = "/UserProfile" component = {UserProfile} />
        
            {/* <Route  path = "/LoginOrRegister" component = {LoginOrRegister} /> */}

            <Route  path = "/QRCode" component = {Qrcode} />

            <Route path = "/HotSheet" component = {HotSheet} />

            <Route path = "/Auth" component = {Auth} />
          </div>
      </Router>
      
      </Layout>
    </Auxiliary>

      );
    
  

export default app;

