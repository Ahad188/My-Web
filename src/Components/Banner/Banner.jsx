import { FaFacebookF,FaLinkedinIn,FaInstagram} from "react-icons/fa";
import img from '../../../src/assets/about.jpg'
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
               <p>I'm creative  web Developer and Designer. I'm very passionate and dedicated to my work. </p>
                <div className="social">
                    <a href="https://www.facebook.com/ahad.shorun.1" target="/_blank"><FaFacebookF></FaFacebookF></a>
                    <a href="https://www.linkedin.com/in/abu-ahad-171b8723b" target="/_blank"><FaLinkedinIn></FaLinkedinIn></a>
                    <a href="https://www.instagram.com/abuahad35188" target="/_blank"><FaInstagram></FaInstagram></a>
                </div>
                    <a href='https://drive.google.com/file/d/1Ykm0_FykKyzMyR9tpdRQGWwa7hBxOktb/view?usp=sharing' download={'https://drive.google.com/file/d/1Ykm0_FykKyzMyR9tpdRQGWwa7hBxOktb/view?usp=sharing'} className="btn-d">Download-Resume</a> 
          </div>
          <div className="home-img" data-aos="fade-left" data-aos-duration='3000'>
               <img src={img} alt="" />
          </div>
     </section>
     );
};

export default Banner;