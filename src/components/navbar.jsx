import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar-venturus'>
      <div className="logo">
        <img src="/assets/images/venturus-logo.png" alt="Venturus-logo" />
        <p>Squad Managment Tool</p>
      </div>
      <div className="logged-in">
        <p className='navbar-name'>
          Fernando Gomes
        </p>
        <div className="avatar border">
          <img src="/assets/images/avatar.png" alt=""/>
        </div>
      </div>
    </div>
  );
};


export default Navbar;
