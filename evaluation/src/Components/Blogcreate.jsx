import React from "react";
// import styled from "styled-components";
import axios from 'axios'
import { useState } from "react";


const Blogcreate = () => {

//     let Button = styled.button`
//   padding: 5px 10px;
//   color: #ffffff;
//   background-color: black;
//   font-weight: 400;
//   border-radius: 5px;
//   margin-left: 10px;
//   &:hover {
//     color: black;
//     background-color: #ffffff;
//     border: 1px solid black;
//     cursor: pointer;
//   }
// `;

  const [title,settitle] = useState()
  const [author,setAuthor] = useState()
  const [content,setContent] = useState()
  const [publication,setPublication]  = useState()
  const [published_on, setPublished] = useState()


  const handleSubmit=(e) =>{
    e.preventDefault();
    const data = {
    title,
    author,
    content,
    publication,
    published_on
  };

axios({
    method: 'post',
    url: `http://localhost:8080/blogs`,
    data: data,
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});
  }

  return (
    <div >
      <h1>Make Your Blog</h1>
      <input type="text" placeholder='Enter Name' onChange={(e)=>{
        settitle(e.target.value)
      }} />
      
      <input type="text" placeholder='Enter Author'   onChange={(e)=>{
        setAuthor(e.target.value)
      }} /> 
     
       <input type="text" placeholder='Content'  onChange={(e)=>{
        setContent(e.target.value)
      }} />
      
      <input type="text" placeholder='Enter Publication' onChange={(e)=>{
        setPublication(e.target.value)
      }} />
    
      <input type="date" placeholder='Date' onChange={(e)=>{
        setPublished(e.target.value)
      }} />
     
      
      <button type="submit" onClick={handleSubmit}>Submit</button>
    
    </div>
  )
}
export default Blogcreate;

