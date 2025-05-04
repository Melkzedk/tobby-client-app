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
          {/* Left Side - Orange Background with Person in Orange */}
          <div className="col-md-6 position-relative">
            <img 
              src={image1}
              alt="Person in orange clothing" 
              className="w-100"
              style={{ objectFit: 'cover', height: '400px' }}
            />
            {/* Overlay text */}
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
          
          {/* Right Side - Yellow Background with Person in White */}
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
          <div className="row g-3">
            {/* Gallery Images */}
            <div className="col-md-3">
              <div style={{ backgroundColor: '#FF7C43', height: '200px' }}>
                <img 
                  src={image3}
                  alt="Medical uniform" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div style={{ backgroundColor: '#5DADE2', height: '200px' }}>
                <img 
                  src={image4}
                  alt="Construction worker" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div style={{ backgroundColor: '#333', height: '200px' }}>
                <img 
                  src={image5}
                  alt="Barista uniform" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div style={{ backgroundColor: '#3498DB', height: '200px' }}>
                <img 
                  src={image6}
                  alt="Blue work shirt" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="d-flex justify-content-between mt-3">
            <button className="btn" style={{ fontSize: '2rem' }}>&lt;</button>
            <button className="btn" style={{ fontSize: '2rem' }}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clothing;