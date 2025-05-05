import React from 'react';
import image1 from '../Assets/clothing1.jpg';
import image2 from '../Assets/clothing2.png';
import image3 from '../Assets/clothing3.jpg';
import image4 from '../Assets/clothing4.jpg';
import image5 from '../Assets/clothing5.jpg';
import image6 from '../Assets/clothing6.jpg';
import Footer from '../components/Footer'; // Importing Footer component

function Clothing() {
  return (
    <div className="clothing-section">
      {/* Full-width container with no padding */}
      <div className="container-fluid p-0">
        {/* Images Row - Equal height and no gap */}
        <div className="row g-0 m-0" style={{ height: '500px' }}>
          {/* Left - Full-height Image */}
          <div className="col-md-6 position-relative p-0">
            <img
              src={image1}
              alt="Vertical Clothing"
              className="w-100"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <div
              className="position-absolute fw-bold text-dark px-3 py-1"
              style={{
                bottom: '20px',
                left: '0',
                backgroundColor: '#FFB347',
                fontSize: '1.5rem',
              }}
            >
              Clothing
            </div>
          </div>

          {/* Right - Full-height Image with overlay text */}
          <div className="col-md-6 position-relative p-0">
            <img
              src={image2}
              alt="Horizontal Clothing"
              className="w-100"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <div
              className="position-absolute w-100 text-center"
              style={{ top: '20px', color: '#fff', fontSize: '1.8rem', fontWeight: 'bold' }}
            >
              <span style={{ color: '#ccc' }}>#</span>CELSIUS
            </div>
          </div>
        </div>

        {/* 👇 Replaced hardcoded icons with reusable Footer component */}
        <Footer />

        {/* Gallery Section */}
        <div className="py-4" style={{ backgroundColor: '#f5f5f5' }}>
          <div className="container">
            <h3 className="mb-4">Clothing</h3>

            <div className="d-flex align-items-center">
              {/* Left Arrow */}
              <button className="btn p-2" style={{ fontSize: '2rem' }}>&lt;</button>

              {/* 4 Images in one row, no gaps */}
              <div className="d-flex flex-nowrap w-100">
                {[image3, image4, image5, image6].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Gallery ${index}`}
                    style={{ width: '25%', height: '200px', objectFit: 'cover' }}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button className="btn p-2" style={{ fontSize: '2rem' }}>&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clothing;
