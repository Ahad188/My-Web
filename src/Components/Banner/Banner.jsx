import './Banner.css'
import { FaFacebookF,FaLinkedinIn,FaInstagram} from "react-icons/fa";

import img from '../../../public/IMG_3629.jpg'
const Banner = () => {
     return (
          <section className="home" id="home">
          <div className="home-t">
               <h3>Hello I,am</h3>
               <h1>Abu <span>Ahad</span></h1>
               <h5> Creative web <span>Developer</span></h5>
               <p>I'm creative designer based in New York, and I'm very passionate and dedicated to my work.</p>
                <div className="social">
                    <a href=""><FaFacebookF></FaFacebookF></a>
                    <a href=""><FaLinkedinIn></FaLinkedinIn></a>
                    <a href=""><FaInstagram></FaInstagram></a>
                </div>
                    <a href="#" className="btn">About Me</a> 
          </div>
          <div className="home-img">
               {/* <img src="../../assets/banner.JPG" alt="" width="550"/> */}
               <img src={img} alt="" />
          </div>
     </section>
     );
};

export default Banner;