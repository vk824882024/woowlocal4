import React from 'react'
import mobilephone from './mobilephone.png'
import woowlocal from './woowlocal.png';
import PricingPlans from './PricingPlans';
import App from './App';
const section11 = () => {
  return (
    <div className="banner">
        <center>
 <section style={{backgroundColor:"#FCD100",textAlign:"center"}}>
     <h5 style={{fontWeight:"bold"}}>Customer Journey With</h5> 
     {/* <span style={{fontSize:30}}>noon <span style={{color:"#e611e2fb",fontWeight:"bolder"}}>Food</span></span> */}
     <img src={woowlocal} width={100}></img>
     {/* <p>Customers enjoy a deamless ordering experiance, helping to drive transactions for restaurants</p> */}
     <div className="container row-cols-md-4 row-cols-lg-6 row-cols-sm-3">
     <img className="" src={mobilephone} width={100}></img>
     <img className="" src={mobilephone} width={100}></img>
      <img className="" src={mobilephone} width={100}></img>
        <img className="" src={mobilephone} width={100}></img>
     </div>
     </section>
     <section className="text-white" style={{backgroundColor:"#6A0DAD"}}>
        <div className=" p-5">
         <h1 className="text-warning">Commercial Proposition</h1>
      <p>
       We always to be fair and transparent with all our restaurant partners. We want to provide a sustainable program for our partners 
       while simultaneously supporting our delivery fleet. Our fees consist of a 21% commission, which includes fees for both markeplace and delivery, plus a 2% fee for handling payments, bringing it to a total of 23%
       Additionally we also have preferred commercials for our noon VIP+ partner restaurants.
      </p>
        </div>
       <div className="card-deck w-50 p-3" >
       <div className="card" style={{backgroundColor:"#C1F52F"}}>
       <div className="card-body">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
      </svg>
        <h1 className="card-text text-dark">Accesss more areas </h1>
       </div>
       </div>
       <div className="card" style={{backgroundColor:"#C1F52F"}}>
       <div className="card-body">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
  <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
</svg>
        <h1 className="card-text text-dark">Reach more woowlocal customers</h1>
       </div>
       </div>
       </div>
        <div className='row'>
          <div className=" container-fluid d-inline-flex" style={{overflow:'hidden',backgroundAttachment:"fixed",paddingLeft:630}}>
         
          </div>
        </div>

     </section>
        </center>
     
    </div>
  )
}

export default section11