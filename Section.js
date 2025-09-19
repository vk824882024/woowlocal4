import React from 'react'

const Section = () => {
  return (
    <div className='container-fluid '>
         <div className="m-5">
      
        <div className="col-md-6  text-left">
         <h1 className='text-left'>What’s on the menu?<br/>Everything you need</h1>
         <div className="col-md-6">
            <p className="" style={{fontFamily:"sans-serif"}}>
               Woowlocal goes beyond food delivery, offering groceries, pharmacy products, cosmetics, electronics, flowers and pet supplies. 
            With subscription programs providing free delivery and discounts, a rewards system for redeemable points, simplified payment options, and enhanced dining experiences, talabat ensures convenience and savings at every step of your journey.
       
             </p>
        
         </div><br/>
          <a href="" style={{backgroundColor:"brown",padding:10,borderRadius:20 }}>Learn More</a>
        </div>

        
      </div>
      <br/><br/>
          {/*About */}
          <div className='container-fluid row m-auto'>
            <div className="col-md-4 text-left">
            <h1 style={{fontFamily:"monospace",fontWeight:"bolder"}}>About Woowlocal</h1>
            <span>
              Woowlocal online marketplace offers customers a convenient, personalised and simple way of ordering food, groceries and other convenience products from a wide selection of restaurants and retailers.
            </span>
            </div>
             <div className="col-md-4 container">
            <span>
              Woowlocal focuses on mobile platforms and continually enhances its technology through data-driven insights. By optimizing the entire order fulfillment process—picking, packing, and delivery—it ensures efficient operations across the platform.
            </span>
            
            </div>
            
         </div> 
         <div style={{marginLeft:-20}}>
          <button className="border-0 m-lg-5 bg-primary text-light p-4" style={{borderRadius:20}}>Read more about us</button>  
         </div>
         
    </div>
  )
}

export default Section