// HeroSection.js
import React from "react";

function HeroSection() {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        backgroundColor: "#fefaf5",
        minHeight: "100vh",
        padding: "50px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Rays */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            style={{
              width: "150px",
              height: "20px",
              background: "orange",
              transform: `rotate(${i * 30}deg)`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ zIndex: 1 }}>
        <h1 className="fw-bold display-4" style={{ color: "orangered" }}>
          Delivering connections, <br /> not just orders.
        </h1>
        <p className="mt-3 fs-5 text-dark">
          Discover how we’re delivering impact, creating value, <br />
          and driving growth across MENA.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
