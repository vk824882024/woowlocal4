import React from 'react'
import './App.css'
import HeroSection from './HeroSection';
import VideoSection from './VideoSection';
import TextSection from './TextSection';
import ImageSection from './ImageSection';
import Values from './Values';  
import Section2 from './Section2';
import SlickDemo from './Blogs';
import Footer from './Footer';
const About = () => {
  return (
   <div className="container-fluid">
    <HeroSection/>
    <VideoSection/>
    <TextSection/>
    <ImageSection/>
    <Values/>
    <Section2/>
    <SlickDemo/>
     
   </div>
  )
}

export default About;
