import React from "react";
import styled from "styled-components";
import axios from 'axios'
import { useEffect } from "react";
 const Blogs =()=>{
    const [status, setStatus]=React.useState("")

let Outerbox=styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap:50px;
`

    let Box = styled.div`
    text-align:center;
  padding: 10px;
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 7px;
`;
let Heading = styled.div`
color:red;
font-sixe:50px;
font-weight:700;
`;

const handleDelete= (itemId)=>{
  
         axios.delete(`http://localhost:8080/bookings/${itemId}`)
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
                Bookings
              </Heading>
           <Outerbox>
             {blogs?.map((item) => (
                <Box><span style={{display:"flex", gap:"10px",textAlign:"center"}}><h4 style={{color:"blue"}}>Title:</h4><p>{item.title}</p></span>
                 
            <p> {item.author}</p>
             <p>{item.published_on}</p>
             <p >{item.content}</p>
             <p>{item.publication}</p>

                   
                    <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
                </Box>
             ))}
         </Outerbox>
         </>
    )


 }
export default Blogs;