import React, { useContext } from 'react'
import Logo from "../images/Group1.svg";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link to="/">

            <img src={Logo} alt='' />
          </Link>
        </div>
        <div className='links'>
          <Link className='link' to="/?category=art"><h6>ART</h6></Link>
          <Link className='link' to="/?category=tech"><h6>TECH</h6></Link>
          <Link className='link' to="/?category=nature"><h6>NATURE</h6></Link>
          <Link className='link' to="/?category=biology"><h6>BIOLOGY</h6></Link>
          <Link className='link' to="/?category=science"><h6>SCIENCE</h6></Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span className='authentication_LO'>

              <span onClick={logout}>Logout</span>
              <span className="write">
                <Link className="link" to="/write">
                  Write
                </Link>
              </span>
            </span>
          ) : (
            <Link className="link login_styling" to="/login">
              Login
            </Link>
          )}


        </div>
      </div>
    </div>
  )
}

export default Navbar