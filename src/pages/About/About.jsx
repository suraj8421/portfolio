import React from 'react'
import "./About.css"
import Aboutpic from "../../Assets/images/about.jpeg"
import Jump from "react-reveal/Jump"
const About = () => {
  return (
    <>
    <Jump>

    <div className="about" id='about'>
      <div className="row">
        <div className="col-md-4  col-xl-4 col-lg-4 col-xs-12 about-img">
          <img src={Aboutpic} alt='about'/>
        </div>
        <div className="col-md-8 col-xl-8 col-lg-8 col-xs-12 about-content">
          <h1>About me</h1>
          <p>
    
          I'm Suraj Nikam, an aspiring full-stack and MERN stack web developer. Proficient in HTML, CSS, JavaScript, Node.js, Express.js, React, and MongoDB, I bring a fresh perspective and a hunger for learning to any team. With hands-on experience from projects and internships, I've developed a solid foundation in web development.

My commitment to staying updated on industry trends reflects my eagerness to contribute enthusiastically to collaborative projects. As a dedicated and adaptable fresher, I am actively seeking job opportunities that allow me to apply my skills, learn from experienced professionals, and make a positive impact in the dynamic field of web development. I am confident in my ability to bring a blend of theoretical knowledge and practical application to any role, and I am excited about the prospect of contributing to innovative and challenging projects in the web development landscape.





          </p>
        </div>
      </div>
    </div>
      
    </Jump>
    </>
  )
}

export default About
