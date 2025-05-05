import React from 'react';
import img1 from '../Assets/image1.jpg';
import img2 from '../Assets/image2.jpg';
import img3 from '../Assets/image3.jpg';
import img4 from '../Assets/image4.jpg';
import img5 from '../Assets/image5.jpg';
import img6 from '../Assets/image6.jpg';
import Branding from './Branding'; // Import the Branding component

function Home() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="container-fluid px-0">
      {/* Image Grid Section */}
      <div className="row g-0">
        {images.map((image, index) => (
          <div className="col-6 col-md-4" key={index}>
            <img src={image} alt={`layout-${index}`} className="img-fluid w-100" />
          </div>
        ))}
      </div>

      {/* Branding Section */}
      <div className="mt-5">
        <h3 className="text-center mb-4 fw-bold">Our Trusted Brands</h3>
        <Branding />
      </div>
    </div>
  );
}

export default Home;
