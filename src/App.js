import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Service from './components/Home/Service/Service';
import Testimonial from './components/Home/Testimonial/Testimonial';
import Contact from './components/Home/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddService from './components/Dashboard/AddService/AddService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import OrderList from './components/Dashboard/OrderList/OrderList';
import ManageService from './components/Dashboard/ManageService/ManageService';
import CheckOut from './components/CheckOut/CheckOut';
import ManageOrders from './components/Dashboard/ManageOrders/ManageOrders';
import Review from './components/Dashboard/Reveiw/Review';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] =  useState({});
 
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
       
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard/>
        </PrivateRoute>
        <PrivateRoute path="/addservice">
          <AddService/>
        </PrivateRoute>
        <Route path="/makeadmin">
          <MakeAdmin/>
        </Route>
        <Route path="/orderslist">
          <OrderList/>
        </Route>
        <Route path="/manageservice">
          <ManageService/>
        </Route>
        <Route path="/manageorders">
          <ManageOrders/>
        </Route>
        <Route path="/service">
          <Service/>
        </Route>
        <Route path="/testimonial">
          <Testimonial/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/checkout/:id">
          <CheckOut/>
        </PrivateRoute>
        <PrivateRoute path="/review">
          <Review/>
        </PrivateRoute>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
