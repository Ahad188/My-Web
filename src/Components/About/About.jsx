 import imga from '../../assets/about.jpg'
 import './About.css'

const About = () => {
     return (
          <section className="about" id="about">
          <div className="about-img"  data-aos="zoom-in-right" data-aos-offset="400"
     data-aos-easing="ease-in-sine">
               <img src={imga} alt="" />
          </div>
          <div className="about-txt"  data-aos="zoom-in-down">
               <h3>I am a Designer</h3>
               <h2>I Can Design Anything You Want</h2>
               <p>Hello there! I'm a web designer, and I'm very passionate and dedicated to my work., I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
               <button href="#" className="btn-d">Hair Me</button> 
          </div>
     </section>
     );
};

export default About;