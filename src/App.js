import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './containers/Landing';
import Appointment from './containers/Appointment';
import Payment1 from './containers/Payment1';
import Payment2 from './containers/Payment2';
import Payment3 from './containers/Payment3';
import AdminLogin from './containers/AdminLogin';
import AdminDashboard from './containers/AdminDashboard';
import Configuration from './containers/Configuration';



function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/appointment" component={Appointment} />
          <Route path="/payment1" component={Payment1} />
          <Route path="/payment2" component={Payment2} />
          <Route path="/payment3" component={Payment3} />
          <Route path="/adminlogin" component={AdminLogin} />
          <Route path="/admindashboard" component={AdminDashboard} />
          <Route path="/configuration" component={Configuration} />
        </Switch>
      </Router>
      <Footer />
      
      {/* <h1>heading</h1> */}
      {/* <Landing /> */}
      {/* <Landing></Landing> */}
      {/* <Appointment></Appointment> */}
      {/* <Payment1></Payment1> */}
      {/* <Payment2></Payment2> */}
      {/* <Payment3></Payment3> */}
      {/* <AdminLogin></AdminLogin> */}
      {/* <AdminDashboard></AdminDashboard> */}
      {/* <Configuration></Configuration> */}
      
      
      </div>
  );
};

export default App;
