// src/pages/Home.js
import React from 'react';

function Home() {
  return (
    <div className="container-fluid px-0">
      <div className="row g-0">
        {[...Array(6)].map((_, index) => (
          <div className="col-12 col-md-4" key={index}>
            <img
              src={`https://via.placeholder.com/600x400?text=Image+${index + 1}`}
              alt={`layout-${index}`}
              className="img-fluid w-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
