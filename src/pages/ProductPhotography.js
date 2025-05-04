// src/pages/ProductPhotography.js
import React from 'react';
import image1 from '../Assets/productphoto1.jpg';
import image2 from '../Assets/productphoto2.jpg';

function ProductPhotography() {
  return (
    <div className="container-fluid px-0">
      <div className="row g-0">
        <div className="col-12 col-md-6">
          <img
            src={image1}
            alt="Product 1"
            className="img-fluid w-100"
            style={{ objectFit: 'cover', height: '80vh' }} // or 70vh, 60vh etc.
          />
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
