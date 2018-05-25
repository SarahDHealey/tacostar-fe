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
  <nav className="navbar-expand-lg navbar-default">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <a className="nav-link" href="/">Taco Star</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Food</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/about">About</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
      <button className="btn btn-outline-alert my-2 my-sm-0" type="submit">Search Locations</button>
    </form>
  </div>
</nav>
  </div>
);

export default GlobalNav;
