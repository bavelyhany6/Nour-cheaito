import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";


export default function Footer() {
  return<>
  <div className=' py-5  bg-yellow testmo footer-dis'>
  <div className="mx-5">
         <p className=" text-uppercase fs-5  "><em>email address</em></p>
         <Link to={"https://www.Nour_chaito@hotmail.com"} className='text-black fw-bolder'><p>Nour_chaito@hotmail.com</p></Link>
      </div>
      <div className="mx-5">
         <p className=" text-uppercase fs-5 fw-bolder"><em>phone number</em></p>
         <p className="">+961 71 407 149</p>
      </div>
      </div>
     
      

  
  
  </>
}
