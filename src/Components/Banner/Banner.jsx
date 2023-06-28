import { FaFacebookF,FaLinkedinIn,FaInstagram} from "react-icons/fa";
import img from '../../../src/assets/Banner.jpg'
import pdf from '../../../public/AbuAhad-Resume.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css'
import { useEffect } from "react";
const Banner = () => {
     useEffect(()=>{AOS.init();},[])
     return (
          <section className="home" id="home">
          <div className="home-t" data-aos="fade-right" data-aos-duration='1500'>
               <h3>Hello I,am</h3>
               <h1>Abu <span>Ahad</span></h1>
               <h5> Creative web <span>Developer</span></h5>
               <p>I'm creative  web Developer and Designer. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam omnis commodi harum consequuntur nesciunt atque maxime ab alias cupiditate doloremque, fugit et quis quaerat ducimus, non eveniet officiis veritatis nulla! </p>
                <div className="social">
                    <a href=""><FaFacebookF></FaFacebookF></a>
                    <a href=""><FaLinkedinIn></FaLinkedinIn></a>
                    <a href=""><FaInstagram></FaInstagram></a>
                </div>
                    <a href={pdf} download={pdf} className="btn-d">Download-Resume</a> 
          </div>
          <div className="home-img" data-aos="fade-left" data-aos-duration='3000'>
               <img src={img} alt="" />
          </div>
     </section>
     );
};

export default Banner;