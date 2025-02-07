import React from 'react'
import cyscomlogo from '../../assets/Landing/cyscom.png'
import cyscomMainSVG from '../../assets/Landing/mainCyscom.svg'
import './Landing.css'

import { useState, createContext, useContext,useEffect}  from "react";

const Landing = () => {

  

  return (
    <>
    

    <div className="main-div">
   <a href = "https://cyscomvit.com" target="_blank">  <div className="flex-divison"><h2 className="head-2">Cyscom </h2><img src= {cyscomlogo} style={{"width":"8vw"}}/></div></a>
    <h1 className="head-1 hover:animate-pulse ">Meet Our Legacy</h1>
    <h3 className="head-3">Our Legacy Comprises of The Members That Crafted Some Amazing And Memorable Projects That Helped The Club and Community Grow In Several Aspects. </h3>
    <img className="main-img" src={cyscomMainSVG} alt="Image of people giving lost items"></img>
      

    
      


     
    </div>
    </>
  )
}

export default Landing