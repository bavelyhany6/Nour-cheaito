import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";
import "./Contact.css";
import { useState, useEffect } from 'react';
import { InfinitySpin } from "react-loader-spinner";


export default function Contact() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   setIsLoading(true);
   setTimeout(() => {
    setIsLoading(false);

   }, 2000);

    
  }, []);



  return (
    <>
      {isLoading?(<div className=" d-flex justify-content-center align-items-center vh-100">
      <InfinitySpin 
  width='200'
  color="#F9EF23"
/>
      </div>):<><Navbar />
      <section>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-7">
              <h1 className="text-center text-white contact-title">
                <span className=" yellow">CONTACT</span> US
              </h1>
              <div className="row testmo my-3 text-white">
                <div className="col-md-6">
                  <div className="  ">
                    <p className=" text-uppercase cont-info">
                      <em>email address</em>
                    </p>
                    <Link
                      to={"https://www.Nour_chaito@hotmail.com"}
                      target="_blank"
                    >
                      <p className=" text-white">Nour_chaito@hotmail.com</p>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="mx-5">
                    <p className=" text-uppercase cont-info ">
                      <em>phone number</em>
                    </p>
                    <p className="">+961 71 407 149</p>
                  </div>
                </div>
              </div>
              <h1 className="text-center text-white contact-title">
                <span className=" yellow">STAY</span> CONNECTED
              </h1>
              <p className=" text-white fw-bolder fs-3 font-not text-center">
                CONNECT WITH US ON SOCIAL MEDIA FOR THE LATEST UPDATES, TIPS,
                AND INSPIRATION.
              </p>
              <ul className=" d-flex align-items-center justify-content-center fs-1 text-white list-unstyled my-4">
                <Link
                  to={
                    "https://instagram.com/nourcheaito_?igshid=MXd6Nzlnc3FiMHVvaw=="
                  }
                  target="_blank"
                >
                  <li>
                    <i class="fa-brands fa-instagram me-5  text-white insta"></i>
                  </li>
                </Link>
                <Link
                  to={"https://www.tiktok.com/@nourcheaito_"}
                  target="_blank"
                >
                  <li>
                    <i class="fa-brands fa-tiktok me-5 tik  text-white"></i>
                  </li>
                </Link>
                <Link
                  to={"https://www.Nourcheaito98@gmail.com"}
                  target="_blank"
                >
                  <li>
                    <i class="fa-solid fa-m me-5 email  text-white"></i>
                  </li>
                </Link>

                <Link to={"https://wa.me/+96171407149"} target="_blank">
                  <li>
                    <i class="fa-brands fa-whatsapp whats  text-white"></i>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="col-md-5">
              <img
                src={require("../Images/cont1.png")}
                className="w-100 rounded-3"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-3">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-5">
            <h1 className="text-center text-white contact-title2 mb-4 ">
                  <span className=" yellow">LEAVE A</span> MESSAGE
                </h1>
              <img
                src={require("../Images/cont2.png")}
                className="w-100 rounded-3 my-4"
                alt=""
              />
            </div>
            <div className="col-md-7">
              <div>
                <h1 className="text-center text-white contact-title3 mb-4">
                  <span className=" yellow">LEAVE A</span> MESSAGE
                </h1>
                <div className=" d-flex justify-content-center">
                  <form
                    action="https://formspree.io/f/mzblqeoq"
                    method="post"
                    className="w-75 font-not"
                  >
                    <label className="bg-main form-label text-white" for="text">
                      Name
                    </label>
                    <input
                      className="form-control"
                      name="text"
                      id="text"
                      type="text"
                    ></input>
                    <label className="form-label mt-3 text-white" for="email">
                      Email
                    </label>
                    <input
                      className="form-control mb-3 w-100"
                      name="Email"
                      id="email"
                      type="email"
                    ></input>
                    <label className="form-label text-white" for="textarea">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      name="textarea"
                      id="textarea"
                      type="textarea"
                    ></textarea>
                    <button className=" btn btn-light mt-2" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
                <div>
                <p className=" text-center yellow fs-3 mt-4">"STRENGTH DOES NOT COME FROM THE BODY. IT COMES FROM THE WILL."</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section></>}
    </>
  );
}
