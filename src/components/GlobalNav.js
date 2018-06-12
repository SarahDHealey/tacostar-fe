import React from 'react';
import Link from 'react-router-dom';
import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
import { NavbarHeader } from "react-bootstrap"
import { NavbarBrand } from "react-bootstrap"
import { NavItem } from "react-bootstrap"
import { NavDropdown } from "react-bootstrap"
import { MenuItem } from "react-bootstrap"
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';



const GlobalNav = () => (
  <div>
    <nav id="nav">
      <ul>
        <li><img src="images/logo3-transparency.png" className="x-small" alt="Responsive image"/>
        </li>
        <li className="current"><a href="/">Home</a></li>
        <li>
          <a href="/food">Food</a>
          <ul>
            <li><a href="#">Lorem ipsum dolor</a></li>
            <li><a href="#">Magna phasellus</a></li>
            <li><a href="#">Etiam dolore nisl</a></li>
            <li>
              <a href="#">Phasellus consequat</a>
              <ul>
                <li><a href="#">Magna phasellus</a></li>
                <li><a href="#">Etiam dolore nisl</a></li>
                <li><a href="#">Veroeros feugiat</a></li>
                <li><a href="#">Nisl sed aliquam</a></li>
                <li><a href="#">Dolore adipiscing</a></li>
              </ul>
            </li>
            <li><a href="#">Veroeros feugiat</a></li>
          </ul>
        </li>
        <li><a href="left-sidebar.html">Locations</a></li>
        <li><a href="right-sidebar.html">Specials</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search by Zipcode"/>
        <button className="btn btn-success my-2 my-sm-0" type="submit">Search Locations<i class="fas fa-search"></i></button>
      </form>
    </nav>
  </div>
);

export default GlobalNav;


// <nav className="my-navbar navbar-expand-lg">
// <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//   <span className="navbar-toggler-icon"></span>
// </button>
// <div className="col-xs-3 col-sm-1">
// <img src="images/logo3-transparency.png" className="x-small img-rounded" alt="Responsive image"/>
// </div>

// <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//   <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//     <li className="nav-item">
//       <a className="nav-link" href="/">Home</a>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link" href="#">Food</a>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link" href="/about">About</a>
//     </li>
//     <li className="nav-item">
//     <a className="nav-link" href="/about">Find Us</a>
//   </li>
//   </ul>
//   <form className="form-inline my-2 my-lg-0">
//     <input className="form-control mr-sm-2" type="search" placeholder="Search by Zipcode"/>
//     <button className="btn btn-outline-alert my-2 my-sm-0" type="submit">Search Locations</button>
//   </form>
// </div>
// </nav>
