import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
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
import ForgotPassword1 from './containers/ForgotPassword1';
import MentorRegistration from './containers/MentorRegistration';
import ChangePassword from './containers/ChangePassword';
import MentorList from './containers/MentorList';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';
import PrivateRoute from './components/HOC/PrivateRoute'



function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate])

  return (
    <div>
      <Header />     
        <Switch>
          <PrivateRoute path="/admindashboard" component={AdminDashboard} />
          <PrivateRoute path="/configuration" component={Configuration} />
          <PrivateRoute path="/change_password" component={ChangePassword} />

          <Route path="/" exact component={Landing} />
          <Route path="/appointment/:id" component={Appointment} />
          <Route path="/payment1" component={Payment1} />
          <Route path="/payment" component={Payment2} />
          <Route path="/payment3" component={Payment3} />
          <Route path="/adminlogin" component={AdminLogin} />          
          <Route path="/forgotpassword1" component={ForgotPassword1} />
          <Route path="/mentorregistration" component={MentorRegistration} />
          <Route path="/mentor_list" component={MentorList} />
         
        </Switch>
      <Footer />
    </div>
  );
};

export default App;
