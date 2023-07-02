 import work1 from '../../assets/Work/work1.jpg'
 import work2 from '../../assets/Work/work2.jpg'
 import work3 from '../../assets/Work/work3.jpg'
 import work4 from '../../assets/Work/work4.jpg'
 import work5 from '../../assets/Work/work5.jpg'
 import work6 from '../../assets/Work/work6.jpg'
import './Portfolio.css'
const Portfolio = () => {
     return (
          <section className="portfolio" id="portfolio">
          <div className="heading">
               <h3>Portfolio</h3>
               <h2>My Amazing Work</h2>
               <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
          </div>
          <div className="portfolio-content">
               <div className="col">
                   <img src={work1} alt="" />
                    <div className="layer">
                         <h3>Restaurant</h3>
                         <h5 className='my-2'>This is Restaurant web site</h5>
                          <h3>
                              <span className='text-orange'>live</span> <br />
                              <span className='text-orange'>Repo</span>
                          </h3>
                    </div>
               </div>
               <div className="col">
               <img src={work2} alt="" />
                    <div className="layer">
                         <h3>Web Designed</h3>
                         <h5>Popup</h5>
                    </div>
               </div>
               <div className="col">
               <img src={work3} alt="" />
                    <div className="layer">
                         <h3>Web Designe</h3>
                         <h5>Popup</h5>
                    </div>
               </div>
               <div className="col">
               <img src={work4} alt="" />
                    <div className="layer">
                         <h3>Web Designe</h3>
                         <h5>Popup</h5>
                    </div>
               </div>
               <div className="col">
               <img src={work5} alt="" />
                    <div className="layer">
                         <h3>Web Designe 56</h3>
                         <h5>Popup</h5>
                    </div>
               </div>
               <div className="col">
               <img src={work6} alt="" />
                    <div className="layer">
                         <h3>Web Designe</h3>
                         <h5>Popup</h5>
                    </div>
               </div>
          </div>
     </section>
     );
};

export default Portfolio;