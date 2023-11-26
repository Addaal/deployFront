import React from 'react'
import Logo from "../images/Group1.svg";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt=''/>
      
      <div className='links'>
          <Link className='link' to="/?category=art"><h6>ART</h6></Link>
          <Link className='link' to="/?category=tech"><h6>TECH</h6></Link>
          <Link className='link' to="/?category=nature"><h6>NATURE</h6></Link>
          <Link className='link' to="/?category=biology"><h6>BIOLOGY</h6></Link>
          <Link className='link' to="/?category=science"><h6>SCIENCE</h6></Link>
      </div>
      <span>Made for Networks Course - UPTP</span>
    </footer>
  )
}

export default Footer