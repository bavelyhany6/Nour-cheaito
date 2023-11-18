import React from "react";
import { Link } from "react-router-dom";
import "./Consultation.css";
import { useState, useEffect } from 'react';
import { InfinitySpin } from "react-loader-spinner";
 
export default function Consultation() {
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
          <h1 className=" text-white text-center my-5 text-uppercase cons-title">
            ARE YOU <span className="yellow">READY</span> TO{" "}
            <span className="yellow">ACHIEVE</span> YOUR FITNESS{" "}
            <span className="yellow">GOALS?</span>
          </h1>
          <img src={require("../Images/consa1.png")} className="w-100 consimage" alt="" />
      </section>




      <section>
        <div className="container my-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div>
                <h1 className=" text-white text-center text-uppercase cons-title">
                  <span className="yellow">DON'T</span> MISS OUT{" "}
                  <span className="yellow">YOUR CHANCE</span> TO CLAIM A{" "}
                  <span className="yellow">FREE</span> CONSULTATION
                </h1>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img src={require("../Images/consa2.png")} className='w-100' alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>







      <section>
        <div className="container my-5">
          <h1 className=" text-white text-center text-uppercase my-5 title">
            <span className="yellow">WHY</span> BOOK A{" "}
            <span className="yellow">CONSULTATION?</span>
          </h1>
          <div className="row align-items-center">
            <div className="col-md-4">
              <div>
                <p className=" text-white text-center border border-2 p-5 mx-3 cons-text-res">
                  PERSONALIZED FITNESS ASSESSMENT TO UNDERSTAND YOUR CURRENT
                  FITNESS LEVEL AND GOALS
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <p className=" text-white text-center border border-2 p-5 mx-3 cons-text-res">
                  NUTRITIONAL ADVICE BASED ON YOUR INDIVIDUAL NEEDS
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <p className=" text-white text-center border border-2 p-5 mx-3 cons-text-res">
                  AN OPPORTUNITY TO DISCUSS YOUR FITNESS CHALLENGES AND EXPLORE
                  POTENTIAL SOLUTIONS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <section>
        <div className="container my-5">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <div>
              <p className=" text-white text-center mb-4 cons-foot">TAKE THE <span className="yellow">FIRST</span> STEP TOWARDS A <span className="yellow">BETTER</span> YOU!</p>
              <Link to={"https://forms.gle/b9yzokWv3Y4MrDcg6"} className="justify-content-center d-flex" target="_blank">
              <button className=" text-uppercase btn btn-light p-3 px-5 fw-bold fs-4 font-not">Book Now</button>
              </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className=" d-flex justify-content-center">
                <img src={require("../Images/image7.png")} className='w-100' alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>}
   </>
  );
}
