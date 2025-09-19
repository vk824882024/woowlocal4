import React from 'react'

const Section6 = () => {
  return (
    <div className="container">
        {/* Text Row */}
    <h2 className="fw-bold mb-4 py-5">Numbers that deliver</h2>
       <div className="row">
        <div className="col-md-6">
           <p className="text-dark">
             Our numbers reflect more than growth—they tell the story of how talabat 
             connects communities and drives impact across MENA.
           </p>
         </div>
         <div className="col-md-6">
           <p className="text-dark">
             From empowering thousands of riders and partners to delivering billions 
             in value, we’re building connections that move the region forward every day.
           </p>
         </div>
       </div>

      {/* Button */}
      <div className="mt-4">
         <button className="btn btn-dark rounded-pill px-4 py-2 fw-bold">
           Read more about us
        </button>
     </div>
   </div>
  )
}

export default Section6