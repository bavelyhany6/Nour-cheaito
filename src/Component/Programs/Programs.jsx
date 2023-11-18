import React from "react";
import { Link } from "react-router-dom";
import "./programs.css";
import { useState, useEffect } from 'react';
import { InfinitySpin } from "react-loader-spinner";

export default function Programs() {
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
        <h1 className=" text-white text-center cons-title my-5"><span className=" yellow">FITNESS</span> PROGRAMS</h1>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-5">
              <p className=" text-white text-center text-uppercase prog-text">
                YOUR <span className="yellow">JOURNEY</span>, YOUR{" "}
                <span className="yellow">MASTERPIECE</span> - UNLEASH THE{" "}
                <span className="yellow">POWER</span> WITHIN
              </p>
              <Link to={"https://forms.gle/b9yzokWv3Y4MrDcg6"} className="justify-content-center d-flex" target="_blank">
              <button className=" text-uppercase btn btn-light p-3 px-5 fw-bold fs-4 mb-3 testmo">
                start now
              </button>
              </Link>
            </div>
            <div className="col-md-7">
              <div>
                <img
                  src={require("../Images/prog1.png")}
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="prog-background">
        <div className="container">
          <h1 className=" text-center text-white fw-bold my-5 title">
            UNLEASH <span className="yellow">YOUR</span> POTENTIAL{" "}
            <span className="yellow">WITH</span> TAILORED{" "}
            <span className="yellow">FITNESS</span> SOLUTIONS
          </h1>
          <div className="row g-5 font-not">
            <div className="col-md-4">
              <div className=" text-white fw-bolder bg-black p-3 mx-3">
                <h4 className="text-center yellow prog-title">ONLINE FITNESS PROGRAM</h4>
                <h5 className="yellow my-4 prog-title">
                  "BREAKTHROUGH ANYTIME, ANYWHERE"
                </h5>
                <ul className=" prog-ul">
                  <li>
                    CUSTOM WORKOUT PROGRAM WITH HOME OR GYM (ACCORDING TO YOU)
                  </li>
                  <li>NUTRITION TIPS AND COMPREHENSIVE SHEET</li>
                  <li>DETAILED EXERCISES ( VIDEO TUTORIALS)</li>
                  <li>24/7 EMAIL SUPPORT</li>
                  <li>FREE BODY WEIGHT EBOOK</li>
                  <li>WORLDWIDE</li>
                  <li>CANCELLATION ANYTIME</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" text-white fw-bolder bg-black p-3 mx-3">
                <h4 className="text-center yellow prog-title">TOUR THE GYM</h4>
                <h5 className="yellow my-4 prog-title">
                  "SCULPT YOURSELF IN OUR SPACE"
                </h5>
                <ul className=" prog-ul">
                  <li>INDUCTION AND ASSESSMENT</li>
                  <li>CUSTOMIZED WORKOUT PLAN</li>
                  <li>EQUIPMENT GUIDANCE</li>
                  <li>NUTRITION GUIDANCE</li>
                  <li>PROGRESSIVE OVERLOAD TECHNIQUES</li>
                  <li>MOTIVATIONAL SUPPORT</li>
                  <li>REGULAR CHECK-INS & TRACKING PROGRESS</li>
                  <li>BODY COMPOSITION</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" text-white fw-bolder  bg-black p-3 mx-3">
                <h4 className="text-center yellow prog-title">ATHLETIC PROGRAM</h4>
                <h5 className="yellow my-4 prog-title">
                  "ELEVATE YOUR GAME, IGNITE YOUR PASSION"
                </h5>
                <ul className=" prog-ul">
                  <li>ASSESSMENT AND GOAL SETTING</li>
                  <li>PERIODIZED TRAINING PLAN</li>
                  <li>NUTRITION GUIDANCE</li>
                  <li>INJURY REDUCTION STRATEGIES</li>
                  <li>PROGRESS TRACKING</li>
                  <li>MOTIVATIONAL SUPPORT</li>
                  <li>REGULAR CHECK-INS</li>
                  <li>EQUIPMENT GUIDANCE</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-black py-5">
        <div className="container my-5">
          <h1 className=" text-center text-white text-uppercase title">
            <span className="yellow">MEASURE</span> WITH{" "}
            <span className="yellow">RESULTS</span>
          </h1>
          <div className="row testmo ">
            <div className="col-md-4">
              <div className="">
                <div className="justify-content-center d-flex">
                <img
                  src={require("../Images/prog3.png")}
                  className="w-50 my-5 justify-content-center d-flex"
                  alt=""
                />
                </div>
                <h6 className=" text-center text-white fs-4 mb-3">GHINWA BOU ORM</h6>
                <p className=" text-center text-white testmo peo">
                  THANKS, NOUR! YOUR SUPPORT AND DEDICATION TO YOUR REGULAR GYM
                  SESSIONS TRANSFORMED MY BODY. YOUR BELIEF IN MY POTENTIAL
                  PUSHED ME BEYOND LIMITS, PHYSICALLY AND MENTALLY. YOU'RE MY
                  INSPIRATION, AND WITH YOUR GUIDANCE, I'M ON MY WAY TO MY DREAM
                  BODY!
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
                <h6 className=" text-center text-white fs-4 ">MOHAMAD GHALAYINI</h6>
                <h6 className=" text-center text-white text-uppercase mb-3 fs-5">
                  footballer
                </h6>
                <p className=" text-center text-white peo">
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
                  src={require("../Images/prog5.png")}
                  className="w-50 my-5 justify-content-center d-flex"
                  alt=""
                />
                </div>
                <h6 className=" text-center text-white fs-4 mb-3">ZAHRA KHALIFA</h6>
                <p className=" text-center text-white peo">
                  THANK YOU, NOUR! FROM ZERO COMMITMENT TO AN INCREDIBLE
                  TRANSFORMATION. YOUR DEDICATION INSPIRED ME TO ASK FOR EXTRA
                  SESSIONS. YOU'VE CHANGED MY LIFE!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      <section>
        <div className="container my-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="right">
                <img
                  src={require("../Images/cons1.png")}
                  className="w-100 my-5"
                  alt="Trainer Image"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="left">
                <p className="cons-text yellow text-center my-5">
                  BOOK <br /> CONSULTATION <br /> WITH <br /> NOUR
                </p>
                <Link
                  to={"https://forms.gle/b9yzokWv3Y4MrDcg6"}
                  className="justify-content-center d-flex"
                  target="_blank"
                >
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
          </div>
        </div>
      </section>
      <section>
      <section
        className="contact d-flex justify-content-center align-items-center">
        <div class="container">
          <h1 
          className="yellow cotact-text">
            <em>
              GET IN TOUCH <br /> TODAY
            </em>
          </h1>
        </div>
      </section>
      </section>
    </>}
   
   </>
  );
}
