import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Switch, Link} from 'react-router-dom';


class contactus extends Component {
  render() {
    return (
      <div>
           <div className= "top">
        <div className= "logo"></div>
        <div className= "motto">The perfect treats for your Dogs</div>
        </div>
        <header className="App-header">
          <Link className= "tab" to="/">Home</Link>
          <Link className= "tab"  to="/whoweare">Who We Are</Link>
           <Link className= "tab"  to="/products">Products</Link>
          <Link className= "tab"  to="/contactus">Contact Us</Link> 
        </header>
       
        <div className= "body">
            <div className= "body-contactus"></div>
        </div>

         <div className= "footer">
          Information for the footer goes here ...............
        </div>
           
      </div>
    );
  }
}

export default contactus;