import React from "react";
import styled from "styled-components" 

import Blogs from "./Blogs";

const Home =()=>{
 
  const NavbarWrapper = styled.div`
 margin-top:100px;
  `
 
  return (
  <NavbarWrapper>
    <Blogs/>
  </NavbarWrapper>
  )

}
export default Home;