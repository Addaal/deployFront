import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Menu = ({category}) => {

    // const posts =
    //     [{
    //         id: 1,
    //         title: "dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem",
    //         Des: "et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend",
    //         img: "https://source.unsplash.com/random"
    //     },
    //     { id: 2, title: "phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitoridconsequat in consequat ut", Des: "primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio", img: "https://source.unsplash.com/random" },
    //     { id: 3, title: "luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec", Des: "cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque", img: "https://source.unsplash.com/random" },
    //     { id: 4, title: "est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis", Des: "ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas", img: "https://source.unsplash.com/random" },
    //     { id: 5, title: "tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac", Des: "tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent", img: "https://source.unsplash.com/random" }
    //     ];


    const [posts, setPosts] = useState([]);
   
    
    useEffect(()=>{
        const fetchData = async ()=>{
          try{
            const res = await axios.get(`/posts/?category=${category}`);
            setPosts(res.data);
          }catch(err){
            console.log(err);
          }
        }
          fetchData()
      }, [category])


    return (
        <div className='menu'>
            <h1> Other post you may like</h1>
            {
             
                posts.map(post => (
                    <div className='post' key={post.id}>
                        <img src={`../upload/${post.img}`} alt='' />
                        <h2>{post.title}</h2>
                        <Link to={`/post/${post.id}`}>

              <button>Read More</button>
              </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Menu