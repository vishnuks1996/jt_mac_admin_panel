import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Footer from './components/footer';
import Header from './components/Header';
import Landing from './components/Landing';
import Appointment from './container/Appointment';
import Payment1 from './container/Payment1';
import Payment2 from './container/Payment2';
import Payment3 from './container/Payment3';
import AdminLogin from './container/AdminLogin';
import AdminDashboard from './container/AdminDashboard';
import Configuration from './container/Configuration';



function App() {
  return (
    <div>
      <Header></Header>
      <h1>heading</h1>
      {/* <Landing></Landing> */}
      {/* <Appointment></Appointment> */}
      {/* <Payment1></Payment1> */}
      {/* <Payment2></Payment2> */}
      {/* <Payment3></Payment3> */}
      {/* <AdminLogin></AdminLogin> */}
      {/* <AdminDashboard></AdminDashboard> */}
      <Configuration></Configuration>
      
      <Footer></Footer>
      </div>
  );
};

export default App;
