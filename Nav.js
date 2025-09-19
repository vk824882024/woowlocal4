import React from 'react'
import './App.css';
import image3 from './Hamburger Button.jpg';
import image4 from './woowlocal.png';
import image5 from './banner1.png';
import image6 from './banner2.png';
import image7 from './banner3.png';
import video from './banner_video.mp4';
const Nav = () => {
  return (
    <div className="container-fluid header h-100 center" style={{backgroundAttachment:"fixed"}}>
      
  <nav className="navbar navbar-expand-lg  w-100 text-light" >
  <div className="container-fluid">
    <a className="navbar-brand text-dark" href="/" style={{paddingTop:20}} ><img src={image4} width={100}style={{borderRight:"1px solid black"}}></img>Corporate</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <img src={image3} className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" style={{width:10,height:100,margin:0,backgroundColor:'white', }} id="navbarSupportedContent">
      
      <ul className="navbar-nav m-lg-auto mb-2 ml-4 mb-lg-0" style={{paddingTop:13}}>
        <li className='nav-item'>
           
        </li>
        {/* <li className="nav-item">
          <a href="/" className="nav-link active text-dark">Home</a>
        </li> */}
         <li className="nav-item">
          <a className="nav-link text-dark  mb-1" href="/About">About</a>
        </li>
        <li className="nav-item"> 
          <a className="nav-link text-dark" href="/ourmenu">our menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="/Sustainability">Sustainability</a>-
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="/Newsroom">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="  ">Careers</a>
        </li>
        <li className="nav-item">
          <a class="nav-link text-dark" href="/">Investors</a>
        </li>
        <li className='nav-item'>
          <a href='/Contact'  className='nav-link text-light bg-dark rounded' type="button">Contact us</a>
        </li>
      </ul>
      
    </div>
   
  </div>
</nav>
<br/>
 <section className='container-fluid'>
   <video controls autoPlay="on">
  <source src={video} type="video/mp4" className="container-fluid">
  </source>
 <div class="facebook mb-2"><a href="https://www.facebook.com/profile.php?id=61570642586944"><i class="mdi mdi-facebook"></i></a></div>
 
  </video>
   {/* <div className="text-center justify-content-end" style={{marginLeft:30,paddingTop:3}}>
      <h1 className="fw-bold text-light ml-5 mt-5" style={{marginRight:40}}>Welcome to Woowlocal </h1>
      <p className="text-light">Your one-stop shop for fresh groceries & daily needs</p>
      
    </div> */}
    <center>
 <div className="container-fluid row-cols-md-4 row-cols-lg-6 row-cols-sm-2" style={{paddingTop:3}}>
 <img src={image5} width={200} style={{marginTop:-400,backgroundAttachment:"fixed"}} className=" container-sm"/>
 <img src={image6} width={200} style={{marginTop:-400}} className=""/>
  <img src={image7} width={200} style={{marginTop:-400}} className="container-sm"/> 
 
</div>
</center>
</section>



    </div>
  )
}

export default Nav