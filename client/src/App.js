import React from 'react';
import Layout from './components/Layout/Layout';
import Auxiliary from "./hoc/Auxiliary";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home/Home.js";
import UserProfile from "./pages/UserProfile/UserProfile";
import DatabaseEdit from "./pages/DatabaseEdit/DatabaseEdit";
import LoginOrRegister from "./pages/LoginOrRegister/LoginOrRegister";
import Qrcode from "./pages/QRCode/QRCode";



const App = () => (
<Auxiliary>
  <Layout>
    
 
    <Router>
      <div>
          <Route exact path = "/" component={Home} />
    
          <Route path = "/DatabaseEdit" component = {DatabaseEdit} />
       
          <Route  path = "/UserProfile" component = {UserProfile} />
      
          <Route  path = "/LoginOrRegister" component = {LoginOrRegister} />

          <Route  path = "/QRCode" component = {Qrcode} />
        </div>
    </Router>
    
    </Layout>
  </Auxiliary>
);

export default App;
