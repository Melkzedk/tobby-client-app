import React from 'react';

function Clothing() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="display-4 mb-4">Design Your Clothing</h1>
      <p className="lead text-muted mb-4">
        Create your own custom designs. Upload logos, add text, and preview your clothing in real-time.
      </p>

      {/* Upload design */}
      <div className="mb-3">
        <label htmlFor="designUpload" className="form-label">Upload Your Design</label>
        <input type="file" className="form-control w-50 mx-auto" id="designUpload" />
      </div>

      {/* Choose clothing type */}
      <div className="mb-4">
        <label className="form-label">Select Clothing Type:</label>
        <select className="form-select w-50 mx-auto">
          <option>T-Shirt</option>
          <option>Hoodie</option>
          <option>Cap</option>
          <option>Jacket</option>
        </select>
      </div>

      {/* CTA */}
      <button className="btn btn-success btn-lg">Preview Design</button>
    </div>
  );
}

export default Clothing;
