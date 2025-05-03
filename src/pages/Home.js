import React from 'react';
import img1 from '../Assets/image1.jpg';
import img2 from '../Assets/image2.jpg';
import img3 from '../Assets/image3.jpg';
import img4 from '../Assets/image4.jpg';
import img5 from '../Assets/image5.jpg';
import img6 from '../Assets/image6.jpg';

function Home() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="container-fluid px-0">
      <div className="row g-0">
        {images.map((image, index) => (
          <div className="col-12 col-md-4" key={index}>
            <img src={image} alt={`layout-${index}`} className="img-fluid w-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
