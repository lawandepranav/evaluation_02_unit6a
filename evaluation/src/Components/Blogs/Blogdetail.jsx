import React from "react";
import { useEffect } from "react";
import {useParams} from "react-router-dom"

const Blogdetails =()=>{
    const {id} = useParams()
    const [blogs,setBlogDetails] = React.useState({})
  
    useEffect(()=>{
       fetch (`http://localhost:8080/blogs`)
       .then((res) => (res.json()))
       .then ((res) =>setBlogDetails(res))
    },[id])


   

  return (
    <div>
       <h1 >Blog Details</h1>
       {blogs.map((item)=>(
       <div  >
             <p>{item.title}</p>
            <p> {item.author}</p>
             <p>{item.published_on}</p>
             <p >{item.content}</p>
             <p>{item.publication}</p>

            </div>
            )) 
       }
    </div>
  )
}
export default Blogdetails;
