import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect } from "react";
 const Blogs =()=>{
    const [status, setStatus]=React.useState("")

let Outerbox=styled.div`
width:95%;
margin:auto;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap:50px;
`

let Box = styled.div`
 background-color:pink;
padding: 10px;
box-shadow: rgb(0 0 0 / 8%) 0px 4px 7px;
border-radius:20px;
`;
let Heading = styled.div`
color:red;
font-size:50px;
font-weight:700;
margin-bottom:50px;
`;
let Title = styled.h4`
color:blue;
`;
let Value = styled.p`

`;

const handleDelete= (itemId)=>{
  
         axios.delete(`http://localhost:8080/blogs/${itemId}`)
         .then(() => setStatus('Delete successful'));


}

    const [blogs, setBlogs]=React.useState([])
    React.useEffect(() => {

        axios.get(`http://localhost:8080/blogs`)
          .then((res) => {
            setBlogs(res.data);
          })
          .catch((err) => {
           console.log("err")
          })
        
      }, []);
      
    
      

    return(
              <>
              <Heading>
                Your Blogs
              </Heading>
           <Outerbox>
             {blogs?.map((item) => (
                <Box>
                <div style={{display:"flex"}}><Title >Title:</Title><Value>{item.title}</Value></div>
                 <div style={{display:"flex"}}><Title >Author:</Title><p> {item.author}</p></div> 
                 <div style={{display:"flex"}}><Title >Published Date:</Title><p>{item.published_on}</p></div>
                 <div style={{display:"flex"}}><Title >Content:</Title><p >{item.content}</p></div>
                 <div style={{display:"flex"}}><Title >Publication:</Title><p>{item.publication}</p></div>
                 <Button  onClick={()=>{handleDelete(item.id)}} colorScheme='blue'>Delete</Button>
               
                 <Link to = {`/blogs/${blogs.id}`}><Button colorScheme='blue'>More Details</Button></Link>
                </Box>
             ))}
         </Outerbox>
         </>
    )


 }
export default Blogs;