import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderBar.css'

const HeaderBar = () => {
  return (
    <div className= "headBar">
    <div >
      <Link to="/">Home</Link>
    </div>

    <div>
      <Link to="/createpage">Create Page</Link>
    </div>
    </div>
  )
}

export default HeaderBar