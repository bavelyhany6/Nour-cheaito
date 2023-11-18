import React from "react";
import "./home.css";
import { Link } from 'react-router-dom';
import About from './../About/About';
import { InfinitySpin } from "react-loader-spinner";
import { useState, useEffect } from 'react';



export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   setIsLoading(true);
   setTimeout(() => {
    setIsLoading(false);

   }, 2000);

    
  }, []);

  return (<>
   {isLoading?(<div className=" d-flex justify-content-center align-items-center vh-100">
      <InfinitySpin 
  width='200'
  color="#F9EF23"
/>
      </div>):<>
      <header
        id="home"
        class="home d-flex justify-content-center
                align-items-center"
      >
        <div class="container text-center text-white">
          <h1 className=" text-home">
            <em>
              BE YOUR <span className=" yellow">BEST</span>
            </em>
          </h1>
          <Link to={"https://forms.gle/b9yzokWv3Y4MrDcg6"} target="_blank">
          <button className="btn mt-3 p-4 border-0 bg-yellow text-uppercase fs-4 testmo ">
            Join today
          </button>
          </Link>
        </div>
      </header>

      {/* /////////////////////////////About/////////////////////////////////////////// */}
      <div className="container mt-5">
        <h1 className="yellow text-center my-4 title">ABOUT NOUR CHEATIO</h1>
        <p className="text-center text-white my-4 font-not home1">
          Nour is licensed in physical education, a certified personal trainer,
          an athlete, and a FIFA referee and specialises in strength and
          conditioning. Nour successfully helped hundreds of people including
          numerous athletes reach their fitness goal
        </p>
        <div className=" d-flex justify-content-center">
          <Link to={"/About"}>
          <button className=" btn btn-light rounded-pill text-center font-not fs-5">
            {" "}
            Read More <i class="fa-regular fa-circle-right"></i>
          </button>
          </Link>
        </div>
      </div>
      <img
        src={require("../Images/croped1.jpg")}
        className="w-100 mt-4"
        alt=""
      />

      {/* ////////////////////////////////Programs////////////////////////////////////////////////////// */}


      <div className="container my-5">
        <h1 className="yellow fw-bold text-center my-4 title">WHAT WE OFFER</h1>
        <p className="text-center text-white font-not my-4">
          We're committed to bringing you the best workout experience.
        </p>
        <div className="row g-4">
          <div className="col-md-4">
            <div className=" bg-white">
              <img
                src={require("../Images/image1.png")}
                className="w-100"
                alt=" ATHLETIC PROGRAM"
              />
              <h3 className=" p-3 text-center fw-bolder fs-2">
                <em>ATHLETIC PROGRAM</em>
              </h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className=" bg-white">
              <img
                src={require("../Images/image2.png")}
                className="w-100"
                alt=" ATHLETIC PROGRAM"
              />
              <h3 className=" p-3 text-center fw-bolder fs-2">
                <em>TOUR OUR GYM </em>
              </h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className=" bg-white">
              <img
                src={require("../Images/image3.png")}
                className="w-100"
                alt=" ATHLETIC PROGRAM"
              />
              <h3 className=" p-3 text-center fw-bolder fs-2">
                <em>ONLINE PROGRAM</em>
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* ////////////////////////////////Downloads/////////////////////////////////////////////// */}
      <div className="container">
      <p className="res text-uppercase title fw-bold yellow text-center my-1 mb-4">transformations</p>
        <div className="row g-1">
          <div className="col-md-3">
            <img src={require("../Images/trans1.png")} className='w-100' alt="" />
            <img src={require("../Images/trans3.png")} className='w-100' alt="" />
          </div>
          <div className="col-md-6">
            <img src={require("../Images/trans4.png")} className='w-100' alt="" />
            <p className="res1 text-uppercase title fw-bold yellow text-center my-1">transformations</p>
           <div className="d-flex justify-content-around">
           <img src={require("../Images/trans6.png")} className='imp' alt="" />
            <img src={require("../Images/trans7.png")} className='imp' alt="" />
           </div>
          </div>
          <div className="col-md-3">
            <img src={require("../Images/trans5.png")} className='w-100' alt="" />
            <img src={require("../Images/trans2.png")} className='w-100' alt="" />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h1 className="yellow fw-bold text-center my-4 title">WHAT CLIENTS SAY ?</h1>
        <div className="row g-4 font-not">
          <div className="col-md-4">
            <div className=" bg-yellow">
              <img
                src={require("../Images/image4.png")}
                className="w-100"
                alt=" ATHLETIC PROGRAM"
              />
              <p className=" p-3 fw-bolder home2">
                <em>
                  “ Thank you, Nour! From zero commitment to an incredible
                  transformation. Your dedication inspired me to ask for extra
                  sessions. You've changed my life! "
                </em>
              </p>
              <p className="ms-3 pb-3 fw-bolder ">
                <em>Ghinwa Bou Orm</em>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className=" bg-yellow">
              <img
                src={require("../Images/image5.png")}
                className="w-100"
                alt=" ATHLETIC PROGRAM"
              />
              <p className=" p-3 fw-bolder home2">
                <em>
                  “ Thanks, Nour! Your support and dedication to your regular
                  gym sessions transformed my body. Your belief in my potential
                  pushed me beyond limits, physically and mentally. You're my
                  inspiration, and with your guidance, I'm on my way to my dream
                  body! "
                </em>
              </p>
              <p className="ms-3 pb-3 fw-bolder ">
                <em>Zahra Khalifah</em>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className=" bg-yellow">
              <img
                src={require("../Images/image6.png")}
                className="w-100"
                alt=" Zahra Khalifah"
              />
              <p className=" p-3 fw-bolder home2" >
                <em>
                  “ With Nour, it's all about focus and results! Her expertise
                  and dedication transformed my confidence and strength. She
                  makes every session feel comfortable and motivating. In two
                  years, she's transformed my perspective on fitness, creating a
                  motivating and comfortable environment. She's the reason for
                  my fitness journey's success! “
                </em>
              </p>
              <p className="ms-3 pb-3 fw-bolder ">
                <em>Rana Ghaddar</em>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ////////////////////////////////Consultations//////////////////////////////////////// */}

      
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="left">
              <p className="cons-text yellow text-center my-5">
                BOOK <br /> CONSULTATION <br /> WITH <br /> NOUR
              </p>
              <Link to={"https://forms.gle/b9yzokWv3Y4MrDcg6"} className="justify-content-center d-flex" target="_blank">
              <button className="cons-btn ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="70"
                  height="70"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  ></path>
                </svg>
                <span>Register Now</span>
              </button>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right">
              <img
                src={require("../Images/image7.png")}
                className="w-100 my-5"
                alt="Trainer Image"
              />
            </div>
          </div>
        </div>
      </div>


      {/* ///////////////////////////////////Contact////////////////////////////////////// */}

      <section
        className="contact d-flex justify-content-center ">
        <div class="container">
          <h1 
          className="yellow cotact-text ">
            <em>
              GET IN TOUCH <br /> TODAY
            </em>
          </h1>
        </div>
      </section>
     





    </>}
  
  </>
   
  );
}
