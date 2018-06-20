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
        <li className="nav-item dropdown">
        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Food</NavLink>
        <div className="dropdown-menu">
        <ul className="list-unstyled">
        <li><NavLink to="#" className="dropdown-item">View All</NavLink></li>
        <li><NavLink to="#" className="dropdown-item">Burritos</NavLink></li>
        <li><NavLink to="#" className="dropdown-item">Tacos</NavLink></li>
        <li><NavLink to="#" className="dropdown-item">Tortas</NavLink></li>
        <li><NavLink to="#" className="dropdown-item">Combos</NavLink></li>
        <li><NavLink to="#" className="dropdown-item">Tostadas</NavLink></li>
        <li><NavLink to="#" className="dropdown-item">Enchiladas</NavLink></li>
        <li><NavLink to="#" className="dropdown-item">Rolled Tacos</NavLink></li>
        <li><NavLink to="#" className="dropdown-item">Breakfast Burritos</NavLink></li>
        <li><NavLink to="#" className="dropdown-item">Breakfast Plates</NavLink></li>
        </ul>
      </div>
        </li>
        <li><NavLink to="/locations" activeClassName="current" exact={true}>Locations</NavLink></li>
        <li><NavLink to="/specials" activeClassName="current" exact={true}>Specials</NavLink></li>
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

// nav dropdown halfwork
// <li>
//         <div className="NavDropdown">
//         <button activeClassName="btn current dropdown-toggle" exact={true} className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//         Dropdown button
//         </button>
//         <div activeClassName="current" className="dropdown-menu">
//         <NavLink to="/" className="dropdown-item" href="#">Action</NavLink>
//         <NavLink to="/"  className="dropdown-item" href="/">Another action</NavLink>
//         <NavLink to="/"  className="dropdown-item" href="#">Something else here</NavLink>
//       </div>
//         </div>
//         </li>

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
