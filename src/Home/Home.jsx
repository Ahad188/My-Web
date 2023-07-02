import React from 'react';
import Navbar from '../Components/Navigation/Navbar';
import Banner from '../Components/Banner/Banner';
import SubServices from '../Components/SubServices/SubServices';
import About from '../Components/About/About';
import Skill from '../Components/Skill/Skill';
import Services from '../Components/Services/Services';
import Portfolio from '../Components/Portfolio/Portfolio';
import Contact from '../Components/Contact/Contact';
import Success from '../Components/SucessP/Success';
import Footer from '../Components/Footer/Footer';

const Home = () => {
     return (
          <div>
               <Navbar></Navbar>
               <Banner></Banner>
               <SubServices></SubServices>
               <About></About>
               <Skill></Skill>
               <Services></Services>
               <Portfolio></Portfolio>
               <Contact></Contact>
               <Success></Success>
               <Footer></Footer>
          </div>
     );
};

export default Home;