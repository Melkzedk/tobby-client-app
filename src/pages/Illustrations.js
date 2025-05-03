import React from 'react';
import image1 from '../Assets/Design1.jpg';
import image2 from '../Assets/Design2.jpg';
import image3 from '../Assets/Design3.jpg';

function Illustrations() {
  return (
    <div className="container-fluid p-0 m-0 overflow-hidden illustrations-section">
      <div className="row g-0">
        <div className="col-9">
          <img src={image1} alt="Image 1" className="w-100 h-100 object-fit-cover" />
        </div>
        <div className="col-3 d-flex flex-column">
          <img src={image2} alt="Image 2" className="w-100 flex-fill object-fit-cover" />
          <img src={image3} alt="Image 3" className="w-100 flex-fill object-fit-cover" />
        </div>
      </div>
    </div>
  );
}

export default Illustrations;
