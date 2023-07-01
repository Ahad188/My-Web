import React from 'react';
import Navbar from '../Components/Navigation/Navbar';
import Banner from '../Components/Banner/Banner';
import SubServices from '../Components/SubServices/SubServices';
import About from '../Components/About/About';
import Skill from '../Components/Skill/Skill';

const Home = () => {
     return (
          <div>
               <Navbar></Navbar>
               <Banner></Banner>
               <SubServices></SubServices>
               <About></About>
               <Skill></Skill>
          </div>
     );
};

export default Home;