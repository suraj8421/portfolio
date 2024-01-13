import React from "react";

import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../Assets/Docs/resume.pdf";

import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <Fade right>
            <h2>Hi👋 i'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer!",
                    "MERN Stack Developer!",
                    "Front-end Devloper!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a className="btn btn-hire" href="https://api.whatsapp.com/send?phone=8421312250"
              rel="noreferrer"
              target="_blank"
              >Hire Me</a>
            
              <a className="btn btn-cv" href={Resume} download="suraj.pdf">
                {" "}
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
