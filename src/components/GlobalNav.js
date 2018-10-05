import React from 'react';
import { NavLink } from 'react-router-dom';

const GlobalNav = () => (
  <div>
    <nav className="navbar-sticky fixed-top" id="nav">
      <ul>
        <li><img src="https://s3-us-west-1.amazonaws.com/tacostar/logo-letters.png" className="x-small" alt="home logo"/></li>
        <li><NavLink to="/" activeClassName="current" exact={true}>Home</NavLink></li>
        <li className="nav-item dropdown">
          <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Food</NavLink>
          <div className="dropdown-menu">
            <ul className="list-unstyled">
              <li><NavLink to="/food" className="dropdown-item">View All</NavLink></li>
              <li><NavLink to="/food/burritos" className="dropdown-item">Burritos</NavLink></li>
              <li><NavLink to="/food/tacos" className="dropdown-item">Tacos</NavLink></li>
              <li><NavLink to="/food/tortas" className="dropdown-item">Tortas</NavLink></li>
              <li><NavLink to="/food/combination-plates" className="dropdown-item">Combos</NavLink></li>
              <li><NavLink to="/food/side-orders" className="dropdown-item">Side Orders</NavLink></li>
              <li><NavLink to="/food/enchiladas" className="dropdown-item">Enchiladas</NavLink></li>
              <li><NavLink to="/food/rolled-tacos" className="dropdown-item">Rolled Tacos</NavLink></li>
              <li><NavLink to="/food/breakfast-burritos" className="dropdown-item">Breakfast Burritos</NavLink></li>
              <li><NavLink to="/food/breakfast-plates" className="dropdown-item">Breakfast Plates</NavLink></li>
              <li><NavLink to="/food/drinks" className="dropdown-item">Drinks</NavLink></li>
            </ul>
          </div>
        </li>
        <li><NavLink to="/locations" activeClassName="current" exact={true}>Locations</NavLink></li>
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

// <li><NavLink to="/specials" activeClassName="current" exact={true}>Specials</NavLink></li>
