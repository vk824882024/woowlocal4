import React from 'react'
import pasta from './pasta.png'
import Briyani from './briyani.png'
import chickenwrap from './chickenwrap.png'
const Banner = () => {
  return (
    <div className="container-fluid py-5">
          
       <div class="container-fluid py-1 px-5" style={{backgroundColor: "#FCD100"}}>
        <div class="container-fluid">
    <div class="row g-0">
        <div class="col-md-4 bg-pink">
            <img src={pasta} class="img-fluid" alt="Pasta dish"/>
        </div>
        <div class="col-md-4 bg-green">
            <img src={Briyani} class="img-fluid" alt="Biryani dish"/>
        </div>
        <div class="col-md-4 bg-yellow">
            <img src={chickenwrap} class="img-fluid" alt="Chicken wrap"/>
        </div>
    </div>
</div>
    <div class="text-center text-white mb-4">
        <h1 class="display-1 fw-bold">3<span class="fs-2">main benefits</span></h1>
        <p class="lead">We have crafted a food delivery service that puts restaurants first.</p>
    </div>
    <div class="row text-center text-white">
        <div class="col-md-4">
            <div class="p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" className="rounded-circle bg-primary" height="50" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
  <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
</svg>
                <h3 class="mt-3">Instant access to noon's millions of customers</h3>
                
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="rounded-circle bg-primary"  fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
  <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
</svg>
                <h3 class="mt-3">Attractive & fair commission structure</h3>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="rounded-circle bg-primary" class="bi bi-truck" viewBox="0 0 16 16">
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
</svg>
                <h3 class="mt-3">Finest delivery & customer experience</h3>
            </div>
        </div>
    </div>
</div>
    </div> 
  )
}

export default Banner