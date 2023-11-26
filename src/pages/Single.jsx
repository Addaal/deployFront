import React, { useContext, useEffect, useState } from 'react'
import Pen from '../images/pen-solid.svg'
import Delete from '../images/trash-solid.svg'
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import Menu from '../components/Menu'
import axios from 'axios'
import moment from 'moment';
import { AuthContext } from '../context/authContext';
import DOMPurify from "dompurify";


const Single = () => {

  const [post, setPost] = useState({})
  const location = useLocation()
  const postId = location.pathname.split("/")[2];
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate();
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`https://app-blog-hopeitowkrs-fde410f2c677.herokuapp.com/posts/${postId}`);
        setPost(res.data);
      }catch(err){
        console.log(err);
      }
    }
      fetchData()
  }, [postId])

  console.log(post);

  const handleDelete = async ()=>{
    try{
      const res = await axios.delete(`https://app-blog-hopeitowkrs-fde410f2c677.herokuapp.com/posts/${postId}`);
      navigate("/")
    }catch(err){
      console.log(err);
    }
  }

  // const getText = (html) =>{
  //   const doc = new DOMParser().parseFromString(html, "text/html")
  //   return doc.body.textContent
  // }

  return (
    <div className='single'>
      <div className='content'>
        <img src={`../upload/${post?.img}`} alt='' />
        <div className='user'>
          <img src={post?.userImg} />
          <div className='info'>
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
         { currentUser.username === post.username && 
         (
         <div className='edit'>
            <Link to={"/write?edit=2"} state={post}>
              <img src={Pen} alt='' />
            </Link>
            <img onClick={handleDelete} src={Delete} alt='' />
          </div>
          )}
        </div>
        <h1>{post.title}</h1>
      
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p> 
       
      </div>

      <Menu category={post.category}/>
    </div>
  )
}

export default Single