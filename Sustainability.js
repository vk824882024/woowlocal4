import React from 'react'
import Sustain from './Sustain'

const Sustainability = () => {
  return (
    <div className='container mt-5'>
       <h1 className="font-weight-bolder h-100">Small actions<br/><span style={{backgroundColor:"brown",color:"yellow"}}>Big impact</span> </h1><br/>
    <div className=" row" style={{width:"auto"}}>
   <div class="container"><h2 class="fw-bold mb-4 py-5">Sustainability at talabat</h2>
   <div class="row">
    <div class="col-md-4">
      <p class="text-dark">Sustainability in woowlocal is embedded into the way we work, further emphasizing our commitment to the communities, partners, and key stakeholders that contribute to the success of woowlocal.</p></div>
      <div class="col-md-4">
        <p class="text-dark">All our sustainability initiatives are in line with the United Nations Sustainable Development Goals (UNSDGs) most relevant to our business, forming the foundation of our three key pillars: Fostering decent work and economic growth, promoting food equity, and accessibility, and Reducing our carbon footprint.</p>
      </div>
      </div>
      
        </div>
   
    </div>
    <Sustain/>
    </div>
  ) 
}

export default Sustainability