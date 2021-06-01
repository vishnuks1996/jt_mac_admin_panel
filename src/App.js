import react from 'react';
import './App.css';

import Footer from './components/footer';
import Header from './components/Header.js';
import Landing from './components/Landing.js';
import Appointment from './container/Appointment.js';
import Payment1 from './container/Payment1.js';
import Payment2 from './container/Payment2.js';
import Payment3 from './container/Payment3.js';
import AdminLogin from './container/AdminLogin.js';
import AdminDashboard from './container/AdminDashboard.js';
import Configuration from './container/Configuration.js';



function App() {
  return (
    <div>
      <Header></Header>
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
