// VideoSection.js
import React from "react";

function VideoSection() {
  return (
    <section
      className="d-flex flex-column align-items-center text-center"
      style={{
        backgroundColor: "#fefaf5",
        padding: "40px 20px",
      }}
    >
      <h4 className="fw-bold mb-3">
        talabat's Story: Delivering Tomorrow
      </h4>

      <div
        className="ratio ratio-16x9"
        style={{
          maxWidth: "700px",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <iframe 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video link
          title="Talabat Story Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default VideoSection;
