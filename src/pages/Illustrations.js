import React from 'react';
import image1 from '../Assets/Design1.jpg';
import image2 from '../Assets/Design2.jpg';
import image3 from '../Assets/Design3.jpg';

function Illustrations() {
  return (
    <div className="container-fluid p-0 m-0 overflow-hidden illustrations-section position-relative">
      <div
        className="row g-0"
        style={{
          maxHeight: '300px',
          height: '300px',
        }}
      >
        <div className="col-9 col-sm-9 col-xxs-9" style={{ height: '100%' }}>
          <img
            src={image1}
            alt="abstract illustration 1"
            className="w-100 h-100"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="col-3 col-sm-3 d-flex flex-column" style={{ height: '100%' }}>
          <img
            src={image2}
            alt="abstract illustration 2"
            className="w-100"
            style={{ height: '50%', objectFit: 'cover' }}
          />
          <img
            src={image3}
            alt="abstract illustration 3"
            className="w-100"
            style={{ height: '50%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Overlay text */}
      <div
        className="position-absolute text-dark fw-semibold px-3 py-2 rounded-2"
        style={{
          bottom: '10px',
          left: '10px',
          backgroundColor: '#f8a21c',
          fontSize: '1rem',
          zIndex: 10,
        }}
      >
        Illustrations
      </div>
    </div>
  );
}

export default Illustrations;
