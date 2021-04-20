import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="nav-container">
      <div className='navbar-venturus'>
        <Link to='/' className='logo-link'>
        <div className="logo">
          <img src="/assets/images/venturus-logo.png" alt="Venturus-logo" />
          <p>Squad Managment Tool</p>
        </div>
        </Link>
          <div className="logged-in">
            <p className='navbar-name'>
              Fernando Gomes
            </p>
            <div className="avatar border">
              <img src="/assets/images/avatar.png" alt=""/>
            </div>
          </div>
      </div>
    </div>
  );
};


export default Navbar;
