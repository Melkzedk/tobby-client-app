// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="py-3" style={{ backgroundColor: '#0a1451' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="text-warning">
              <span>Logo</span>
              <span className="mx-2">|</span>
              <span>Brand Guidelines</span>
              <span className="mx-2">|</span>
              <span>Brochures</span>
              <span className="mx-2">|</span>
              <span>Print Production</span>
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="https://revolve.ke" className="text-warning me-3">revolve.ke</a>
            <div className="d-inline-block">
              <a href="linkedin.com" className="text-white me-2">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="facebook.com" className="text-white me-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="instagram.com" className="text-white me-2">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="tiktok.com" className="text-white me-2">
                <i className="bi bi-tiktok"></i>
              </a>
              <a href="youtube.com" className="text-white me-2">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="twitter.com" className="text-white me-2">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;