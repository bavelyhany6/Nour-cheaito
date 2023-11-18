import React from 'react'
import './About.css'
import { useState, useEffect } from 'react';
import { InfinitySpin } from "react-loader-spinner";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   setIsLoading(true);
   setTimeout(() => {
    setIsLoading(false);

   }, 2000);

    
  }, []);
  return<>
  
  {isLoading?(<div className=" d-flex justify-content-center align-items-center vh-100">
      <InfinitySpin 
  width='200'
  color="#F9EF23"
/>
      </div>):<>
   <div className="container">
        <div className="row my-5 align-items-center">
          <div className="col-md-6">
            <div>
              <h1 className="text-center text-white about-title ">
                NOUR <span className="yellow">CHEAITO</span>
              </h1>
              <p className="my-5 text-center text-white about-text">
                NOUR IS LICENSED IN PHYSICAL EDUCATION, A CERTIFIED PERSONAL
                TRAINER, AN ATHLETE, A FITNESS COACH SPECIALIZED IN STRENGTH AND
                CONDITIONING FOR FOOTBALL AND A FIFA REFEREE. NOUR SUCCESSFULLY
                HELPED HUNDREDS OF PEOPLE INCLUDING NUMEROUS ATHLETES REACH
                THEIR FITNESS GOAL.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <img
                src={require("../Images/cons1.png")}
                className="w-100 border-yellow"
                alt=""
              />
            </div>
          </div>
        </div>


        <section>
          <h1 className=" text-white text-center my-5 title">
            ABOUT <span className="yellow">NOUR</span>
          </h1>
          <div className="container">
          <div className="row my-3">
            <div className="col-md-4">
              <div className="text-white text-center border border2 p-4 fs-3 font-not">
                <p>HUNDREDS OF SUSTAINABLE RESULTS</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-white text-center border border2 p-5 fs-3 font-not my-3">
                <p>FACE OF PUMA</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-white text-center border border2 p-5 fs-3 font-not">
                <p>FIFA FUTSAL REFEREE</p>
              </div>
            </div>
          </div>
          </div>
        </section>
        <section>
          <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 ">
              <div className="text-white text-center border border2 p-5 fs-3 font-not">
                <p>FITNESS COACH FOR FOOTBALL TEAMS</p>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="text-white text-center border border2 p-5 fs-3 font-not my-3">
                <p>STRENGTH AND CONDITIONING COACH</p>
              </div>
            </div>
          </div>
          </div>
        </section>

        
        <section className="my-5">
          <h1 className=" text-white text-center my-5 title">
          FROM <span className="yellow">FIELD</span> TO <span className="yellow">WORLD STAGE</span>
          </h1>
          <div className="row">
            <div className="col-md-6">
              <div>
              <img src={require("../Images/cons2.png")} className="w-100" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div>
              <img src={require("../Images/cons3.png")} className="w-100" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                <img src={require("../Images/cons4.png")} className='w-100 ' alt="" />
                <img src={require("../Images/cons7.png")} className='w-100 ' alt="" />
                </div>
                <div className="col-md-6">
                <img src={require("../Images/cons5.png")} className='w-100 mt-1' alt="" />
                <img src={require("../Images/cons6.png")} className='w-100 ' alt="" />
                </div>
              </div>
            </div>
              <div className="col-md-6">
                <img src={require("../Images/cons8.png")} className='w-100' alt="" />
              </div>
          </div>
        </section>
      </div>
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
  

  </>}
  </>
}
