// src/pages/ProductPhotography.js
import React from 'react';
import image1 from '../Assets/productphoto1.jpg';
import image2 from '../Assets/productphoto2.jpg';

function ProductPhotography() {
  return (
    <div className="container-fluid px-0">
      <div className="row g-0">
        <div className="col-12 col-md-6 position-relative">
          <img
            src={image1}
            alt="Product 1"
            className="img-fluid w-100"
            style={{ objectFit: 'cover', height: '80vh' }}
          />
          <div 
            className="position-absolute" 
            style={{ 
              bottom: 0, 
              left: 0, 
              backgroundColor: '#F7941D', 
              padding: '15px 35px',
              borderTopRightRadius: '20px',
              zIndex: 10
            }}
          >
            <h2 className="text-navy m-0 fw-bold">Product Photography</h2>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img
            src={image2}
            alt="Product 2"
            className="img-fluid w-100"
            style={{ objectFit: 'cover', height: '80vh' }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPhotography;