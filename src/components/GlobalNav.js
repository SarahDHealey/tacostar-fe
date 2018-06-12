import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
        <li><NavLink to="/" activeClassName="current" exact={true}>Home</NavLink></li>
        <li>
          <NavLink to="/food" activeClassName="current" exact={true}>Food</NavLink>
          <ul>
            <li><Link to="#">Lorem ipsum dolor</Link></li>
            <li><Link to="#">Magna phasellus</Link></li>
            <li><Link to="#">EtiLinkm dolore nisl</Link></li>
            <li>
              <Link to="#">Phasellus consequat</Link>
              <ul>
                <li><Link to="#">Magna phasellus</Link></li>
                <li><Link to="#">Etiam dolore nisl</Link></li>
                <li><Link to="#">Veroeros feugiat</Link></li>
                <li><Link to="#">Nisl sed aliquam</Link></li>
                <li><Link to="#">Dolore adipiscing</Link></li>
              </ul>
            </li>
            <li><Link to="#">Veroeros feugiat</Link></li>
          </ul>
        </li>
        <li><NavLink to="left-sidebar.html" activeClassName="current" exact={true}>Locations</NavLink></li>
        <li><NavLink to="right-sidebar.html" activeClassName="current" exact={true}>Specials</NavLink></li>
        <li><NavLink to="/about" activeClassName="current" exact={true}>About</NavLink></li>
      </ul>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search by Zipcode"/>
        <button className="btn btn-success my-2 my-sm-0" type="submit">Search Locations</button>
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
