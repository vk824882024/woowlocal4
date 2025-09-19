// ImageSection.js
import React from "react";
import image2 from './womenrest.jpg'
import image3 from './bowloffruits.jpg'
function ImageSection() {
  return (
    <section
      style={{
        backgroundColor: "#fefaf5",
        padding: "60px 20px",
      }}
    >
      <div className="container">
        <div className="row g-4">
          {/* Left Image */}
          <div className="col-md-6">
            <img
              src={image2} // Replace with actual image
              alt="Woman relaxing with phone and snack"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>

          {/* Right Image */}
          <div className="col-md-6">
            <img
              src={image3} // Replace with actual image
              alt="Bowl of fruits"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageSection;
