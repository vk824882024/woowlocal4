import React from 'react';

const RecipeForSuccess = () => {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#6482dd', color: 'white' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Heading */}
          <div className="col-lg-4 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold">
              THE <br /> RECIPE <br /> FOR <br /> SUCCESS
            </h1>
          </div>

          {/* Right Column: Text Content */}
          <div className="col-lg-8 col-md-12">
            <p className="fs-5 mb-4">
              At <strong className="fw-bold">noon Food</strong>, we understand that fostering successful
              partnerships requires a two-way street of excellent service
              and support. We are passionate about connecting local
              businesses with local customers and believe in creating a
              balanced relationship that works for the restaurant, the
              customer, and the community.
            </p>
            <p className="fs-5 mb-0">
              Our goal is to drive the food and beverage delivery industry
              forward through convenient technology and fair pricing. We
              want to ensure that everyone has the opportunity to
              benefit from our services in a friendly and welcoming
              environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeForSuccess;