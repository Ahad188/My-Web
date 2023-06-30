import React from 'react';
import Navbar from '../Components/Navigation/Navbar';
import Banner from '../Components/Banner/Banner';
import SubServices from '../Components/SubServices/SubServices';
import About from '../Components/About/About';

const Home = () => {
     return (
          <div>
               <Navbar></Navbar>
               <Banner></Banner>
               <SubServices></SubServices>
               <About></About>
          </div>
     );
};

export default Home;