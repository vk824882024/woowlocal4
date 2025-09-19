import React from "react";


function CallToAction() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="p-5 text-white"
        style={{
          backgroundColor: "#6f42c1", // Orange background
          borderRadius: "40px",
          width: "90%",
          maxWidth: "1000px",
        }}
      >
        <h1 className="fw-bold" style={{ fontSize: "3rem", lineHeight: "1.2" }}>
          READY FOR YOUR{" "}
          <span style={{ color: "#d6ff00" }}>NEXT STEP?</span>
          <br />
          LET’S GO!
        </h1>

        <button
          className="btn mt-4 px-4 py-2 fw-bold"
          style={{
            backgroundColor: "#d6ff00",
            color: "black",
            borderRadius: "50px",
          }}
        >
          Talk to our team
        </button>
      </div>
    </div>
  );
}

export default CallToAction;
