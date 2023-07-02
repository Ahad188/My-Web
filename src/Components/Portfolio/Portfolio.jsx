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
                              <a href='https://bistro-boss-4985a.web.app' target  ='/_blank'className='text-orange'>Live</a> <br />
                              <a href='https://github.com/Ahad188/Bistro-Resturent-C' target  ='/_blank'className='text-orange'>
                                   Git
                                   </a> <br />
                              
                          </h3>
                    </div>
               </div>
               <div className="col">
               <img src={work2} alt="" />
                    <div className="layer">
                         <h3>Presenter</h3>
                         <h5 className='my-2'>This Side is Education self development</h5>
                         <h3><a href="https://presenter-79764.web.app" target='/_blank'>LIve</a></h3>
                         <h3><a href="https://github.com/Ahad188/Presenter" target='/_blank'>Git</a></h3>
                    </div>
               </div>
               <div className="col">
               <img src={work3} alt="" />
                    <div className="layer">
                         <h3>Toy Shop</h3>
                         <h5 className='my-2'>This is Toy Shop web page</h5>
                         <h3><a href="https://toy-world-5bfd6.web.app" target='/_blank'>LIve</a></h3>
                         <h3><a href="https://github.com/Ahad188/Toy-world" target='/_blank'>Git</a></h3>
                    </div>
               </div>
               <div className="col">
               <img src={work4} alt="" />
                    <div className="layer">
                         <h3>Chef World</h3>
                         <h5 className='my-2'> POpular Chef in india</h5>
                         <h3><a href="https://mtr-chef.web.app" target='/_blank'>LIve</a></h3>
                         <h3><a href="https://github.com/Ahad188/Mtr-chef" target='/_blank'>Git</a></h3>
                    </div>
               </div>
               <div className="col">
               <img src={work5} alt="" />
                    <div className="layer">
                         <h3> Job Circular</h3>
                         <h5 className='my-2'>World wire job in this side.</h5>
                         <h3><a href="https://classy-tanuki-9e6f67.netlify.app" target='/_blank'>LIve</a></h3>
                         <h3><a href="https://github.com/Ahad188/World-Job" target='/_blank'>Git</a></h3>
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