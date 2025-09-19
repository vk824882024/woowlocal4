import React from 'react'
import burgger from './burgger.jpg'
import kabab from './kabab.jpg'
import foodnoon from './foodnoon.jpg'
const Sectionfood = () => {
  return (
    <div className="container" style={{backgroundColor:"#e515b4d1"}}>

        <h2 className="text-light text-center">Our investment strategy</h2>
        <h2 className="text-warning text-center">Starts with you</h2>
 <div className="row text-light" >
    <div className=" col-5">
        <center>
<img src={burgger} alt='trr' width={100} className=" rounded-circle"></img>
  <h5>Small Fees.Big Taste.</h5>
  <p>Delivering your dishes with the fairest and most sustainable commission rates in the region, guranteed.</p>
        </center>
 </div>
     <div className="col-2">
        <center>
<img src={kabab} alt='trr' width={100} className=" rounded-circle"></img>
  <h5>Hungry for more.</h5>
  <p>
    Get access to noon's millions of active customers and drive business
    growth through our marketing channels.
  </p>
  
        </center>
  </div>
   <div className="col-5">
        <center>
<img src={foodnoon} alt='trr' width={100} className=" rounded-circle"></img>
  <h5>Hungry for more.</h5>
  <p>
    Get access to noon's millions of active customers and drive business
    growth through our marketing channels.
  </p>
  
        </center>
  </div>
      </div>       
    </div>
  )
}

export default Sectionfood