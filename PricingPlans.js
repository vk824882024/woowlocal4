import React from 'react';
import screencapture from './screencapture.png'
import mobilephone from './phonescreens.png'
const pricingPlans = [
  {
    title: 'Basic(Onboard)',
    price: 'Free',
    features: [
      'Standard listing',
      'Basic analytics',
      'Limited promotion options',
    ],
  },
  {
    title: 'Starter',
    price: '₹999',
    features: [
      'Enhanced product showcase',
      'Advanced analytics',
      'Priority placement',
      'Marketing support',
    ],
  },
  {
    title: 'Enterprise',
    price: '₹2,499',
    features: [
      'Complete platform integration',
      'Full marketing support',
      'Lowest commission rate',
      'Dedicated account manager',
    ],
  },
];

// Reusable Pricing Card Component
const PricingCard = ({ title, price, features }) => {
  return (
    <div className="col-md-4">
      <div className="card p-4 rounded-circle-top shadow-sm h-100">
        <h2 className="card-title fw-bold">{title}</h2>
        <div className="display-3 fw-bold">{price}</div>
        <ul className="list-unstyled text-start my-4">
          {features.map((feature, index) => (
            <li key={index}>
              <i className="bi bi-check-circle-fill text-success me-2"></i> {feature}
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <button className="btn  btn-lg w-100 rounded-pill" style={{backgroundColor:"#6A0DAD",color:"white"}}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

// Main Pricing Page Component
const PricingPage = () => {
  return (
    <div className="container py-5 text-center">
      {/* Header Section */}
      <h1 className="display-4 fw-bold" style={{color:"purple",fontWeight:"bold"}}>WoowLocal Pricing Plans</h1>
      <p className="lead mb-5">Select your business category and unlock the perfect plan to skyrocket your growth by 5x!</p>

      {/* Category Navigation (can be its own component) */}
      <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
        <button className="btn btn-dark-purple active" style={{borderColor:'black'}}>Mobile Devices & Electronics</button>
         <button className="btn btn-dark-purple active" style={{borderColor:'black'}}>Home Appliances</button>
         <button className="btn btn-dark-purple active border-black" style={{borderColor:'black'}}>Fashion & Apparel</button>
         <button className="btn btn-dark-purple active border-black" style={{borderColor:'black'}}>Sports Shops</button>
         <button className="btn btn-dark-purple active border-black" style={{borderColor:'black'}}>Restaurants</button>
         <button className="btn btn-dark-purple active border-black" style={{borderColor:'black'}}>General Retail</button>
        {/* Other category buttons */}
      </div>

      {/* Pricing Plans Section */}
      <div className="row justify-content-center g-4">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>

      <div className="mt-5">
        <button className="btn btn-outline-secondary">For More Details</button>
      </div><br/><br/><br/><br/>
      <div className="">
        {/* <img src={screencapture} width={1000}></img> */}
       <section className="container" id='poster'>
       
        <div className="text-light">
        <div className="row align-items-center">
          {/* Left Column: Heading */}
          <div className="col-lg-4 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold font-weight-bolder" style={{fontSize:20}}>
              Growth Your Business with WoowLocal!
            </h1>
            <p>
             Showcase your products to local customers, receive online resewrvations, and have drive more in-store sales. Join now and expand your reach! 
            </p>
          </div>

          {/* Right Column: Text Content */}
           {/* <img src={mobilephone}  style={{marginTop:-20,marginLeft:500  }}></img> */}
           
          </div>
        </div>
      
        
       </section>
      </div>
    </div>
  );
};

export default PricingPage;