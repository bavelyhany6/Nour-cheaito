import React from "react";
import { Link } from "react-router-dom";
import "./downloads.css";
import DownloadsSlider from './../DownloadsSlider/DownloadsSlider';
import DownloadsSlider1 from './../DownloadsSlider1/DownloadsSlider1';
import { useState, useEffect } from 'react';
import { InfinitySpin } from "react-loader-spinner";

export default function Downloads() {
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
      </div>): <>
      <section>
        <div className="container my-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="left">
                <p className="down-text1 text-white text-center">
                  DISCOVER THE POWER OF{" "}
                  <span className="yellow">TRANSFORMATION</span>
                </p>
                <Link
                  to={"https://forms.gle/b9yzokWv3Y4MrDcg6"}
                  className="justify-content-center d-flex"
                  target={"_blank"}
                >
                  <button className=" btn bg-yellow p-4 rounded-4 fs-2 ">
                    START NOW
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right">
                <img
                  src={require("../Images/down1.png")}
                  className="w-100 my-5 rounded-3"
                  alt="Trainer Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-black py-3">
        <div className="container my-5">
          <h1 className=" text-center text-white text-uppercase title">
            ELEVATE <span className="yellow">YOUR</span> FITNESS{" "}
            <span className="yellow">JOURNEY</span> WITH OUR <br />
            <span className="yellow">SUCCESS STORIES</span>
          </h1>
          <div className="row testmo ">
            <div className="col-md-4">
              <div className="">
                <div className="justify-content-center d-flex">
                  <img
                    src={require("../Images/down2.png")}
                    className="w-50 my-5 justify-content-center d-flex"
                    alt=""
                  />
                </div>
                <h6 className=" text-center text-white fs-4 mb-3">
                  SANDRA CHAHINE
                </h6>
                <p className=" text-center text-white testmo people1">
                  NOUR’S WORKOUTS, NUTRITION ADVICE, AND UNWAVERING SUPPORT HAVE
                  NOT ONLY HELPED ME REACH MY FITNESS GOALS BUT HAVE EXCEEDED MY
                  EXPECTATIONS. I FEEL STRONGER, HEALTHIER, AND MORE CONFIDENT
                  THAN EVER BEFORE, AND I OWE IT ALL TO HER DEDICATION AND
                  KNOWLEDGE.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="">
                <div className="justify-content-center d-flex">
                  <img
                    src={require("../Images/prog4.png")}
                    className="w-50 my-5 justify-content-center d-flex"
                    alt=""
                  />
                </div>
                <h6 className=" text-center text-white fs-4 ">
                  MOHAMAD GHALAYINI
                </h6>
                <h6 className=" text-center text-white text-uppercase mb-3 fs-5">
                  footballer
                </h6>
                <p className=" text-center text-white people1">
                  I DEEPLY APPRECIATE MY COACH'S REMARKABLE DEDICATION IN
                  SHAPING ME AS A FOOTBALL PLAYER. BEYOND THE RIGOROUS TRAINING,
                  HER EXPERT CARE DURING MY INJURIES HAS BEEN TRULY INVALUABLE.
                  SHE'S NOT JUST A COACH BUT ALSO A COMPASSIONATE HEALER, AND
                  HER UNWAVERING COMMITMENT TO MY GROWTH AND WELL-BEING SETS HER
                  APART AS AN EXCEPTIONAL MENTOR.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="">
                <div className="justify-content-center d-flex">
                  <img
                    src={require("../Images/down3.png")}
                    className="w-50 my-5 justify-content-center d-flex"
                    alt=""
                  />
                </div>
                <h6 className=" text-center text-white fs-4 mb-3">
                  MOHAMMAD CHAHINE
                </h6>
                <p className=" text-center text-white people1">
                  NOUR HAS BEEN A GAME-CHANGER FOR ME. HET SUPPORT, EXPERT
                  GUIDANCE, AND DEDICATION HAVE TRANSFORMED MY HEALTH,
                  CONSISTENCY, AND LIFESTYLE IN WAYS I NEVER THOUGHT POSSIBLE.
                  THANK YOU FOR YOUR INCREDIBLE INFLUENCE ON MY JOURNEY TO A
                  HEALTHIER AND HAPPIER ME.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DownloadsSlider/>
      <DownloadsSlider1/>

      <section>
        <div className="row align-items-center">
          <div className="col-md-4">
            <p className=" down-text-v text-center text-white ">
              THIS CAN BE <span className="yellow">YOU!</span> BOOK A{" "}
              <span className="yellow">FREE</span> CONSULTATION WITH NOUR{" "}
              <span className="yellow">AND START</span> TRANSFORM YOURSELF
            </p>
          </div>
          <div className="col-md-8">
            <img
              src={require("../Images/down4.png")}
              className="w-100"
              alt=""
            />
          </div>
        </div>
      </section>

      <section>
        <div className="row mt-5 align-items-center">
        <div className="col-md-5 down-bottom">
            <div>
              <p className="down-text1 text-white text-center">
                CONNECT <br /><span className="yellow">START</span><br /> TRANSFORM
              </p>
              <Link
                to={"https://forms.gle/b9yzokWv3Y4MrDcg6"}
                className="justify-content-center d-flex"
                target={"_blank"}
              >
                <button className=" btn bg-yellow p-4 rounded-4 mb-4 down-btn">
                  BOOK A FREE CONSULTATION
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-7">
            <img src={require("../Images/down5.png")} className='w-100' alt="" />
          </div>
          <div className="col-md-5 down-bottom1">
            <div>
              <p className="down-text1 text-white text-center">
                CONNECT <br /><span className="yellow">START</span><br /> TRANSFORM
              </p>
              <Link
                to={"https://forms.gle/b9yzokWv3Y4MrDcg6"}
                className="justify-content-center d-flex"
                target={"_blank"}
              >
                <button className=" btn bg-yellow p-4 rounded-4 fs-2 ">
                  BOOK A FREE CONSULTATION
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>}
   </>
  );
}
