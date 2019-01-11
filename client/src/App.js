import React from 'react';
import Layout from './components/Layout/Layout';
import Auxiliary from "./hoc/Auxiliary";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home.js";
import UserProfile from "./pages/UserProfile/UserProfile";

const App = () => (
<Auxiliary>
  <Layout>
    <p>test</p>
  </Layout>
    <Router>
      <div>
        <Switch>
          <Route exact path = "/" component={Home} />
          </Switch>
        <Switch>
          <Route exact page = "/UserProfile" component = {UserProfile} />
        </Switch>
      </div>
    </Router>
  </Auxiliary>
);

export default App;
