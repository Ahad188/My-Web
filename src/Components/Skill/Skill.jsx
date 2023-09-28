import './Skill.css'
import html from "../../assets/skill/html.png"  
import css from "../../assets/skill/css.png"  
import js from "../../assets/skill/javascript.png"  
import boos from "../../assets/skill/bootstrap.png"  
import tal from "../../assets/skill/tailwind-css.png"  
import react from "../../assets/skill/Why is React so popular as a JavaScript library_.jpeg"  
import fire from "../../assets/skill/firebase.png"  
import mongo from "../../assets/skill/mongodb.png"  
import ex from "../../assets/skill/express.png"  
import git from "../../assets/skill/github.png"  
import node from "../../assets/skill/nodejs.png" 
const Skill = () => {
     return (
          <section className="w-[100%] mx-auto" id="skill" data-aos="zoom-in-down">

               {/*  */}
               <div className="">
            <h1 className="title-text"> My Skill</h1>

            <div className="big">
                    <div className="box" data-aos="flip-left">
                         <img src={html} title="Html" alt="" />
                          
                    </div>
                    <div className="box" data-aos="flip-left">
                         <img src={css} title="css" alt="" />
                    </div>
                    <div className="box" data-aos="zoom-in">
                         <img src={js} title="Javascript"alt="" />
                    </div>
                    <div className="box" data-aos="flip-right">
                         <img src={boos} title="Bootstrap" />
                    </div>
                    <div className="box" data-aos="flip-right">
                         <img src={tal} title=" Tailwind css"alt="" />
                    </div>
                    <div className="box" data-aos="flip-left">
                         <img src={react} title="React" alt="" />
                    </div>
                    <div className="box" data-aos="flip-left">
                         <img src={fire} title="Firebox" alt="Firebox" />
                    </div>
                    <div className="box" data-aos="zoom-in">
                         <img src={mongo} title="MongoDB" alt="" />
                    </div>
                    <div className="box" data-aos="flip-right">
                         <img src={ex} title="Express" alt="" />
                    </div>
                    <div className="box" data-aos="flip-right">
                         <img src={git} title="Git" alt="" />
                    </div>
                    <div className="box" data-aos="flip-left">
                         <img src={node} title="Node" alt="" />
                    </div>
               </div>
        </div>
               {/*  */}
                
          
     </section>
     );
};

export default Skill;