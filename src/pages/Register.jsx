import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () => {
  const [input, setInput] = useState({
    username:"",
    email:"",
    password:"",
  });

  const [error,setError] = useState(null);
  const navigate = useNavigate();

  const handleChange= e =>{
setInput(prev=>({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async e =>{ //async because is an api req
    e.preventDefault();  //prevents refreshing the page
    try{
      
      const res = await axios.post("https://app-blog-hopeitowkrs-fde410f2c677.herokuapp.com/api/auth/register", input)
      console.log(res)
      navigate("/login")

    }catch(err){
      setError(err.response.data)
    }
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='username' name='username' onChange={handleChange}/>
        <input  required type='email' placeholder='email' name='email' onChange={handleChange}/>
        <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Register</button>
        {error && <p>{error}</p>}
        <span>Already have an account? <Link to="/login"> Login </Link></span>
        
      </form>
    </div>
  )
}

export default Register