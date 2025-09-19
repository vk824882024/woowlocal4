import React from 'react';
import './App.css'; // For custom styles
import Blogs from './Blogs'
function Newsroom() {
  return (
    <div className="headlines-section container-fluid">   
      <div className="row align-items-center">
        {/* Left Text Column */}
        <div className="col-md-6 text-column">
          <h1 className="display-1 font-weight-bolder  mb-0">Making</h1>
          <h1 className="display-1 font-weight-bolder  mb-0">headlines</h1>
          <h1 className="display-1 font-weight-bolder highlight-text">that matter</h1>
          <p className="mt-4  description-text">
            Catch the latest news, updates, and stories from <br />
            talabat! From new tech to in-house innovations, <br />
            we're shaping the future with every story.
          </p>
        </div>

        {/* Right Image Column */}
        <div className="col-md-6 image-column position-relative">
          {/* This div acts as the speech bubble shape */}
          <div className="speech-bubble-shape"></div>
          {/* The image itself */}
          <img
            src="https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Wrap+Image" // Replace with your actual image URL
            alt="Person holding a wrap"
            className="img-fluid wrapped-image"
          />
        </div>
      </div>
      <Blogs/>
    </div>
  );
}

export default Newsroom;