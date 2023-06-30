 import './SubServices.css'
 import img1 from '../../../src/assets/sub-ser/anchor.svg'
 import img2 from '../../../src/assets/sub-ser/brush.svg'
 import img3 from '../../../src/assets/sub-ser/contact.svg'

const SubServices = () => {
     return (
          <section className="sub-services">
          <div className="items">
               <div className="sub-box" data-aos="flip-up">
                    <div className="sub-img">
                         <img src={img1} alt="" />
                    </div>
                    <h3>Pixel Perfect</h3>
                    <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
               </div>
               <div className="sub-box" data-aos="flip-up">
                    <div className="sub-img">
                    <img src={img2} alt="" />
                    </div>
                    <h3>Pixel Perfect</h3>
                    <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
               </div>
               <div className="sub-box" data-aos="flip-up">
                    <div className="sub-img">
                    <img src={img3} alt="" />
                    </div>
                    <h3>Pixel Perfect</h3>
                    <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
               </div>
          </div>
     </section>
     );
};

export default SubServices;