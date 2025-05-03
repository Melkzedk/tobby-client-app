import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MySite</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">What We Do</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Clients</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Image Layout */}
      <div className="container-fluid px-0">
        <div className="row g-0">
          {[...Array(6)].map((_, index) => (
            <div className="col-12 col-md-4" key={index}>
              <img
                src={`https://via.placeholder.com/600x400?text=Image+${index + 1}`}
                alt={`layout-${index}`}
                className="img-fluid w-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-3">
        &copy; 2025 MySite. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
