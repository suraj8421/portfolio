import React from "react";
import "./Contact.css";
import contact from "../../Assets/images/contact.jpg";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
const Contact = () => {
  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="raw border-line">
                  <img src={contact} alt="contact" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact with{" "}
                      <a
                        href="https://www.linkedin.com/in/suraj-nikam-957979249/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                      </a>
                      <a
                        href="https://github.com/suraj8421?tab=repositories"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <BsGithub className="ms-2" size={30} color="black" />
                      </a>
                      <a
                        href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/FMfcgzGwJckGmXlGHfbvkKbqrjdnWmJD"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <CgMail color="red" size={40} className="ms-2" />
                      </a>
                      <a
                        href="https://api.whatsapp.com/send?phone=8421312250"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <BsWhatsapp color="green" size={30} className="ms-2" />
                      </a>
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Write your name"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email Address"
                      className="mb-3"
                    />
                  </div>
                  <div className="row  px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                    />
                  </div>
                  <div className="row  px-3">
                    <button className="button" type="submit">
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
