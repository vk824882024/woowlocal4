import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer';
import DeliveringMoments from './DeliveringMoments';
import Blogs from './Blogs';
import Section from './Section';
import CallToAction from './Calltoaction';
import Section3 from './Section3';
import Section4 from './Section4';  
import Section5 from './Section5';
import Section11 from "./section11";
import Features from "./Features";
import Banner from "./Banner";  
import PricingPlans from "./PricingPlans"   
import RecipeForSuccess from "./RecipeForSuccess";
const Home = () => {

  return (
<div>
  <Features/>
   <DeliveringMoments/>
    <Section3/>
    <Banner/>
    <Section4/>
    <Section5/>
    <Section11/>
    <PricingPlans/><br/>
    <RecipeForSuccess/>
    <Blogs/>
    {/* <Section/>
    <CallToAction/> */}
   
</div>
  )
}

export default Home
