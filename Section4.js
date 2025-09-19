import React from 'react'

const Section4 = () => {
  return (
        <div className="container-fluid py-5">
       <div className="row align-items-center">
         {/* Left Side Image */}
         <div className="col-md-6 text-center">
           <img
      src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" // Replace with your uploaded image URL
             alt="Food Box"
             className="card-img rounded"
             style={{height:500}}
           />
         </div>

         {/* Right Side Text */}
         <div className="col-md-6">
           <h3 className="fw-bold text-dark">
             MENA's leading on demand delivery platform
           </h3>

           {/* Section 1 */}
           <h4 className="fw-bold text-danger mt-4">Delivering Big (Water)</h4>
           <span className="badge bg-dark text-warning fs-5">
             24 Olympic pools
           </span>
           <p className="text-muted mt-2">
             That's how much water we moved in Q1.
           </p>

           {/* Section 2 */}
           <h4 className="fw-bold text-danger mt-4">We Went Bananas</h4>
           <span className="badge bg-dark text-success fs-5">
             25 million!
           </span>
           <p className="text-muted mt-2">
             Enough to keep the region fruit-fueled for weeks – sold in just one quarter.
           </p>

           {/* Section 3 */}
           <h4 className="fw-bold text-danger mt-4">We Delivered Love</h4>
           <span className="badge bg-dark text-success fs-5">
             150,000 bouquets
          </span>
           <p className="text-muted mt-2">
             Sent across MENA to celebrate Valentine's Day and Mother's Day.
           </p>
         </div>
       </div>
    </div> 
  )
}

export default Section4