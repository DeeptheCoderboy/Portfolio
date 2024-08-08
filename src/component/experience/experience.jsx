import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from "react-icons/bs"
function Experience() {
  return (
    <div>
      <section id="experience">
        <h5>What Skill I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience_container">
          <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
              <BsFillPatchCheckFill  className="experience_details-icon"/>
              <div>
              <h4>HTML</h4>
              <small className="text_light">
              Intermediate
              </small>
              </div>
             
              </article>
              <article className="experience_details">
              <BsFillPatchCheckFill  className="experience_details-icon"/>
              <div>
              <h4>CSS</h4>
              <small className="text_light">
                Intermediate
              </small>
              </div>
              
              </article>
              <article className="experience_details">
              <BsFillPatchCheckFill  className="experience_details-icon"/>
              <div>
              <h4>JavaScript</h4>
              <small className="text_light">
              Intermediate
              </small>
              </div>
             
              </article>
              <article className="experience_details">
              <BsFillPatchCheckFill  className="experience_details-icon"/>
              <div>
              <h4>BootStrap</h4>
              <small className="text_light">
              Intermediate
              </small>
              </div>
              
              </article>
              <article className="experience_details">
              <BsFillPatchCheckFill  className="experience_details-icon"/>
              <div>
              <h4>Tailwind</h4>
              <small className="text_light">
              Intermediate
              </small>
              </div>
              
              </article>
              <article className="experience_details">
              <BsFillPatchCheckFill  className="experience_details-icon"/>
              <div>
              <h4>React</h4>
              <small className="text_light">
                Intermediate
              </small>
              </div>
            
              </article>
              <article className="experience_details">
              <BsFillPatchCheckFill  className="experience_details-icon"/>
              <div>
              <h4>NextJs</h4>
              <small className="text_light">
                Basic
              </small>
              </div>
            
              </article>
              
            </div>
            </div>
            
          
   {/* END OF FORNTEND */}

            <div className="experience_backend">
            <h3>Backend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
              <BsFillPatchCheckFill  className="experience_details-icon"/>
              <div>
              <h4>Node Js</h4>
              <small className="text_light">
              Intermediate
              </small>
              </div>
              
              </article>
              <article className="experience_details">
              <BsFillPatchCheckFill  className="experience_details-icon"/>
              <div>
              <h4>MongoDB</h4>
              <small className="text_light">
                Intermediate
              </small>
              </div>
              
              </article>
              <article className="experience_details">
              <BsFillPatchCheckFill  className="experience_details-icon"/>
              <div>
              <h4>Express Js</h4>
              <small className="text_light">
              Intermediate
              </small>
              </div>
             
              </article>
              <article className="experience_details">
              <BsFillPatchCheckFill  className="experience_details-icon"/>
              <div>
              <h4>Mysql</h4>
              <small className="text_light">
                Experienced
              </small>
              </div>
              
              </article>

              <article className="experience_details">
              <BsFillPatchCheckFill  className="experience_details-icon"/>
              <div>
              <h4>Python</h4>
              <small className="text_light">
                Experienced
              </small>
              </div>
             
              </article>
            </div>
            </div>



          </div>
        
      </section>
    </div>
  )
}

export default Experience
