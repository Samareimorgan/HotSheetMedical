import React from 'react';
import Layout from './components/Layout/Layout';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home.js";

const App = () => (

  <Layout>
    <p>test</p>
  </Layout>
//  <Router>
//    <div>
//      <Switch>
//        <Route exact path = "/" component={Home} />
//       </Switch>
//    </div>
//  </Router>

);

export default App;
