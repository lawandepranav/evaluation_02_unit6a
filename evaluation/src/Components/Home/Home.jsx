import React from "react";
import Blogcreate from "../Blogs/Blogcreate";
import Blogs from "../Blogs/Blogs";
//import Login from "../Login/Login";
import styled from "styled-components" 
import {Link} from "react-router-dom"

const Home =()=>{
    const StyledLink = styled(Link)`
    color:white;
    text-decoration:none;
    font-size:20px;
  `
    return(
        <>
        <Blogcreate/>
        <Blogs/>
        <StyledLink  to = "/Blogdetails">Blogdetails</StyledLink>
        </>
    )

}
export default Home;