import React from 'react';
import './App.css';

const   MenuSection = () => {
  return (
    <section className="menu-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Text */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold">
              What's on <span className="highlight-text">our menu?</span>
              <br />
              Everything you crave.
            </h1>
            <p className="lead mt-4">
              From meals and groceries to gifts and health essentials, we deliver what you need, when you need it. But we're more than that. We're shaping how the Middle East moves, connects, and grows.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="image-container">
              <img
                src="your-image-url-here.jpg" // Replace with the URL of the food image
                alt="Delicious meal in a bowl with side dishes"
                className="img-fluid rounded-circle-like-shape"
              />
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* Bottom Section - Cards */}
        <div className="row text-center mt-5">
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold">Industry Success</h5>
            <p className="text-muted">
              Your go-to delivery platform in MENA, connecting millions to an endless variety of partners.
            </p>
          </div>
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold">Fueling Growth</h5>
            <p className="text-muted">
              Local connections that power growth and build loyalty.
            </p>
          </div>
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold">Tech Innovators</h5>
            <p className="text-muted">
              Driven by cutting-edge tech and a team of passionate specialists.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;