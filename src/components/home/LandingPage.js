import React from 'react'
import Particles from "react-particles";
import { loadFull } from 'tsparticles';
import { particlesOptions } from "./ParticlesConfig";
import './HomeDetails.css'

const LandingPage = () => {
    const particlesInit = (engine) => {
        loadFull(engine);
      };

  return (
    <div className='landingPage'>
        <Particles init={particlesInit} options={particlesOptions} className="particles"/>
        <h1 className='landingText'>Welcome To My Blog</h1>
    </div>

  )
}

export default LandingPage