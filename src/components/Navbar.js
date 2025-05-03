// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MySite</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                id="navbarDropdown"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                What We Do
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/branding">Branding</Link></li>
                <li><Link className="dropdown-item" to="/illustrations">Illustrations</Link></li>
                <li><Link className="dropdown-item" to="/product-photography">Product Photography</Link></li>
                <li><Link className="dropdown-item" to="/clothing">Clothing</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/clients">Clients</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
