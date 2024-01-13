import React from "react";
import "./Projects.css";
import ecommerce from "../../Assets/images/banner.png"
import weatherApp from "../../Assets/images/weatherapp.jpg"
import foodies from "../../Assets/images/foodie.jpg"
import book from "../../Assets/images/book.jpeg"
import Merngpt from "../../Assets/images/chatgpt.jpg"
import Url from "../../Assets/images/url.png"

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top recent projects
        </h2>
        <hr />
        <div className="contaner">
          <p className="pb-3 text-center project-content">
            👉 Transforming ideas into dynamic web solutions, our MERN stack
            projects seamlessly integrate MongoDB, Express.js, React, and
            Node.js. From efficient e-commerce management to streamlined blood
            donation processes and interactive chat-bots, we deliver innovative,
            scalable applications that elevate user experiences and simplify
            complex workflows.
          </p>
          <div className="row" id="ads">
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img src={ecommerce} alt="Project1"/>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="add-title">
                    <h5 className="text-uppercase">E-Shopping</h5>
                  </div>
                  <a className="ad-btn " href="https://github.com/suraj8421/Ecommerce-app
                  "
                  rel="noreferrer"
                  target="_blank"
                  >view</a>
 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Front-end</span>
                  <img src={weatherApp} alt="Project2"/>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Javascript</span>
                  
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Css</span>
                </div>
                <div className="card-body text-center">
                  <div className="add-title">
                    <h5 className="text-uppercase">Weather-App</h5>
                  </div>
                  <a className="ad-btn " href="https://github.com/suraj8421/weather-app"
                  rel="noreferrer"
                  target="_blank">view</a>
 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Front-end</span>
                  <img src={foodies} alt="Project1"/>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Javascript</span>
                  <span className="card-detail-badge">Tailwind-css</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Redux</span>
                </div>
                <div className="card-body text-center">
                  <div className="add-title">
                    <h5 className="text-uppercase">Foodies</h5>
                  </div>
                  <a className="ad-btn " href="https://github.com/suraj8421/foodie"
                  rel="noreferrer"
                  target="_blank">view</a>
 
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Fullstack</span>
                  <img src={Merngpt} alt="Project1"/>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Javascript</span>
                  <span className="card-detail-badge">Bootstrap</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">NoSql</span>


                
                </div>
                <div className="card-body text-center">
                  <div className="add-title">
                    <h5 className="text-uppercase">MERN-Gpt</h5>
                  </div>
                  <a className="ad-btn " href="https://github.com/suraj8421/react-chatgpt"
                  rel="noreferrer"
                  target="_blank">view</a>
 
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">back-end</span>
                  <img src={Url} alt="Project1"/>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">Redis</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="add-title">
                    <h5 className="text-uppercase">Url-Shortner</h5>
                  </div>
                  <a className="ad-btn " href="https://github.com/suraj8421/URL-Shortner"
                  rel="noreferrer"
                  target="_blank">view</a>
 
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Back-end</span>
                  <img src={book} alt="Project1"/>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Javascript</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">NoSql</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="add-title">
                    <h5 className="text-uppercase">Book-Management</h5>
                  </div>
                  <a className="ad-btn " href="https://github.com/suraj8421/Book-management/tree/master"
                  rel="noreferrer"
                  target="_blank">view</a>
 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
