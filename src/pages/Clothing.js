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
      {/* Hero Banner Section */}
      <div className="position-relative" style={{ backgroundColor: '#FF7C43' }}>
        <div className="row g-0">
          {/* Left Side */}
          <div className="col-md-6 position-relative">
            <img 
              src={image1}
              alt="Person in orange clothing" 
              className="w-100"
              style={{ objectFit: 'cover', height: '400px' }}
            />
            <div 
              className="position-absolute text-dark fw-bold p-2 rounded-1"
              style={{ 
                bottom: '20px', 
                left: '0px',
                backgroundColor: '#FFB347', 
                fontSize: '1.5rem',
                zIndex: 10
              }}
            >
              Clothing
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-6 position-relative" style={{ backgroundColor: '#FFB347' }}>
            <div className="text-center pt-4">
              <p style={{ fontSize: '1.2rem', color: '#333' }}>
                <span style={{ color: '#ccc' }}>#</span> ELSIUS
              </p>
            </div>
            <img 
              src={image2}
              alt="Person in white t-shirt" 
              className="w-100"
              style={{ objectFit: 'cover', height: '350px' }}
            />
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="d-flex justify-content-end p-2 bg-dark">
          {['linkedin', 'facebook', 'instagram', 'tiktok', 'youtube', 'twitter'].map((social, index) => (
            <div 
              key={index} 
              className="rounded-circle mx-1 d-flex justify-content-center align-items-center"
              style={{ 
                width: '30px', 
                height: '30px', 
                backgroundColor: index === 0 ? '#0077B5' : 
                                 index === 1 ? '#3B5998' : 
                                 index === 2 ? '#E1306C' : 
                                 index === 3 ? '#000000' : 
                                 index === 4 ? '#FF0000' : '#1DA1F2',
                color: '#fff',
                fontSize: '0.8rem'
              }}
            >
              {social.charAt(0).toUpperCase()}
            </div>
          ))}
        </div>
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
  );
}

export default Clothing;
