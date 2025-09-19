// TextSection.js
import React from "react";

function TextSection() {
  return (
    <section
      style={{
        backgroundColor: "#fefaf5",
        padding: "60px 20px",
      }}
    >
      <div className="container">
        {/* Headline */}
        <h2 className="fw-bold mb-4 text-center">
          Delivering to the{" "}
          <span style={{ color: "orangered", position: "relative" }}>
            real you
            {/* Underline effect */}
            <span
              style={{
                position: "absolute",
                bottom: -3,
                left: 0,
                width: "100%",
                height: "5px",
                backgroundColor: "limegreen",
                zIndex: -1,
              }}
            ></span>
          </span>
          , every day
        </h2>

        {/* Two-column text */}
        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <p className="fs-5">
              We’re on a mission to make life easier by connecting people,
              businesses, and communities through smarter solutions.
            </p>
          </div>
          <div className="col-md-6 mb-3">
            <p className="fs-5">
              From supporting local economies to driving innovation, we’re here
              to deliver impact that goes beyond the doorstep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextSection;
