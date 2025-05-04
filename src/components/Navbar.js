import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo_transparent.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#001b4e' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Revolve Logo" height="50" />
        </Link>
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About Revolve</Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link text-warning fw-bold"
                id="navbarDropdown"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                What We Do
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><Link className="dropdown-item" to="/branding">Branding</Link></li>
                <li><Link className="dropdown-item" to="/illustrations">Illustrations</Link></li>
                <li><Link className="dropdown-item" to="/product-photography">Product Photography</Link></li>
                <li><Link className="dropdown-item" to="/clothing">Clothing</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/clients">Clients</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
