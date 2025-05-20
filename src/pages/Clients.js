import React from 'react';

function Clients() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Clients</h2>
      <p className="text-muted text-center mb-5">
        We are proud to work with these amazing organizations.
      </p>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Client A</h5>
              <p className="card-text">A trusted partner in technology services.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Client B</h5>
              <p className="card-text">Leading solutions in logistics and supply chain.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Client C</h5>
              <p className="card-text">Empowering education through innovation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
