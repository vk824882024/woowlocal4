// FeaturesSection.js
import React from "react";
import { FaHeart, FaRocket, FaChartLine } from "react-icons/fa"; // using react-icons

function Section2() {
  const features = [
    {
      icon: <FaHeart size={40} color="orangered" />,
      title: "Experience first",
      text: "People come first—always.",
    },
    {
      icon: <FaRocket size={40} color="orangered" />,
      title: "Make it happen",
      text: "We dive in, learn fast, and deliver big.",
    },
    {
      icon: <FaChartLine size={40} color="orangered" />,
      title: "Together we grow",
      text: "Diverse minds, one team, endless possibilities.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#f5f0e9",
        padding: "60px 20px",
      }}
    >
      <div
        className="container bg-white rounded-4 shadow-sm p-4"
        style={{ maxWidth: "1100px" }}
      >
        <div className="row text-center g-4">
          {features.map((feature, index) => (
            <div className="col-md-4" key={index}>
              <div className="mb-3">{feature.icon}</div>
              <h5 className="fw-bold">{feature.title}</h5>
              <p className="text-muted">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section2;
