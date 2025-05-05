import React from 'react';
import image1 from '../Assets/clothing1.jpg';
import image2 from '../Assets/clothing2.jpg';
import image3 from '../Assets/clothing3.jpg';
import image4 from '../Assets/clothing4.jpg';
import image5 from '../Assets/clothing5.jpg';
import image6 from '../Assets/clothing6.jpg';

function Clothing() {
  return (
    <div className="clothing-section">
      {/* Full-width container with no padding */}
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* Left - Full-height Image touching browser edge */}
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

          {/* Right - Image touching the navbar */}
          <div className="col-md-6 p-0">
            <div className="position-relative w-100 h-100">
              <div className="d-flex flex-column h-100">
                {/* Image positioned to touch the navbar */}
                <div className="position-relative" style={{ backgroundColor: '#FFB347', height: '350px' }}>
                  <img
                    src={image2}
                    alt="Horizontal Clothing"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                  <div
                    className="position-absolute w-100 text-center"
                    style={{ top: '20px', color: '#fff', fontSize: '1.8rem', fontWeight: 'bold' }}
                  >
                    <span style={{ color: '#ccc' }}>#</span>CELSIUS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Social Icons */}
        <div className="d-flex justify-content-end align-items-center p-2 bg-dark">
          {['linkedin', 'facebook', 'instagram', 'tiktok', 'youtube', 'twitter'].map((social, i) => (
            <div
              key={i}
              className="mx-1 rounded-circle d-flex justify-content-center align-items-center"
              style={{
                width: '30px',
                height: '30px',
                backgroundColor:
                  i === 0 ? '#0077B5' :
                  i === 1 ? '#3B5998' :
                  i === 2 ? '#E1306C' :
                  i === 3 ? '#000000' :
                  i === 4 ? '#FF0000' :
                            '#1DA1F2',
                color: '#fff',
                fontSize: '0.8rem',
              }}
            >
              {social.charAt(0).toUpperCase()}
            </div>
          ))}
        </div>

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
