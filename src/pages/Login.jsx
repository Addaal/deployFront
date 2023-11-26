import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { AuthContext } from '../context/authContext';
import loginImgae from '../images/writingguy.jpg'
const Login = () => {

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { login } = useContext(AuthContext)


  const handleChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => { //async because is an api req
    e.preventDefault();  //prevents refreshing the page
    try {
      await login(input)
      navigate("/")
    } catch (err) {
      setError(err.response.data)
    }
  }

  return (
    <div className='auth'>
      <div className='left_login'>
        <div className='inner_left'>

          <h1>Login</h1>
          <form>
            <input type='text' placeholder='username' name='username' onChange={handleChange} />
            <input type='password' placeholder='password' name='password' onChange={handleChange} />
            <button onClick={handleSubmit}>Login</button>
            {error && <p>{error}</p>}
            <span>Don't you have an account? <Link to="/register"> Register </Link></span>
          </form>
        </div>
      </div>
      <div className='right_login'>
        <img src={loginImgae} />
      </div>
    </div>
  )
}

export default Login