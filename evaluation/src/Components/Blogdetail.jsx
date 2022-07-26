import React, {useEffect} from 'react'
import {useParams} from "react-router-dom"
import styled from "styled-components";



const MovieDetails = () => {
    const {id} = useParams()
    const [blogDetails,setblogDetails] = React.useState({})

    useEffect(()=>{
       fetch (`http://localhost:8080/blogs/${id}`)
       .then((res) => (res.json()))
       .then ((res) =>setblogDetails(res))
    },[id])
console.log(blogDetails)

   
    let Box = styled.div`
    width:70%;
    margin:auto;
 background-color:pink;
padding: 10px;
box-shadow: rgb(0 0 0 / 8%) 0px 4px 7px;
border-radius:20px;
`;
   
    
    let Title = styled.h4`
    color:blue;
    `;
    let Value = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    `;

  return (
    <div>
       <h1 style = {{color: "teal",marginTop:"80px"}}>Blog Details</h1>
       
       <Box>
       
                <div style={{display:"flex"}}><Title >Title:</Title><Value>{blogDetails.title}</Value></div>
                 <div style={{display:"flex"}}><Title >Author:</Title><p> {blogDetails.author}</p></div> 
                 <div style={{display:"flex"}}><Title >Published Date:</Title><p>{blogDetails.published_on}</p></div>
                 <div style={{display:"flex"}}><Title >Content:</Title><p >{blogDetails.content}</p></div>
                 <div style={{display:"flex"}}><Title >Publication:</Title><p>{blogDetails.publication}</p></div>
                
            
          
         </Box>
       
    </div>
  )
}

export default MovieDetails
