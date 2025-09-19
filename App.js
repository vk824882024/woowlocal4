
import './App.css';
import About from './About';
import{BrowserRouter,Routes,Route}from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Ourmenu from './Ourmenu';
import Footer from './Footer';
import Sustainability from './Sustainability';
import Contact from './Contact';
import Newsroom from './Newsroom';


function App() {

  return (
    <div className="">
      <Nav/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Ourmenu' element={<Ourmenu/>}></Route>
        <Route path='/Sustainability' element={<Sustainability/>}></Route>
        <Route path='/Newsroom' element={<Newsroom/>}></Route>
         <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
