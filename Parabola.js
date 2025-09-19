import React from "react";

const Parabola = (props) => {
  return (
    <div>
 <svg
      viewBox="0 0 500 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-90" 
    ><br/>
      {/* Background */}
     

      {/* Quadratic Bézier curve for parabola */}
      <path
        d="M 60 250 Q 250 -90, 450 250"
        stroke="#6f42c1"
        strokeWidth="20"
        fill="transparent"  
      />
    
      {/* Start, control, and end points */}
    </svg>
    <div className="container-fluid">
    <h4 className="text-center text-success fw-bold" style={{marginTop:-80}}>Join our WhatsApp channel</h4>
    <p className="text-center">Stay updated with the latest news,offers,and exclusive content.</p>
    </div>
    <div>
    
    </div>
    </div>
   
  );
};

export default Parabola;
