import React from 'react'
import HomeDetails from '../components/home/HomeDetails'
import LandingPage from '../components/home/LandingPage'

const HomePage = () => {
  return (
    <div>
      <div>
        <LandingPage />
      </div>    
      <HomeDetails />
    </div>
  )
}

export default HomePage