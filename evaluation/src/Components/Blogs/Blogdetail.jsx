import React from "react";
import { useEffect } from "react";
import {useParams} from "react-router-dom"

const Blogdetails =()=>{
    const {id} = useParams()
    const [blogDetails,setBlogDetails] = React.useState({})
  
    useEffect(()=>{
       fetch (`http://localhost:8080/blogs`)
       .then((res) => (res.json()))
       .then ((res) =>setBlogDetails(res))
    },[id])


   

  return (
    <div>
       <h1 style = {{color: "teal",marginTop:"80px"}}>Blog Details</h1>
       {
           
          <div style = {{marginTop:"px",display:"flex", flexDirection:"column"}} >
             <p>{blogDetails.title}</p>
            <p> {blogDetails.author}</p>
             <p>{blogDetails.published_on}</p>
             <p style = {{width:"40%",textAlign:"left"}}>{blogDetails.content}</p>
             <p>{blogDetails.publication}</p>

            </div>
           
       }
    </div>
  )
}
export default Blogdetails;
