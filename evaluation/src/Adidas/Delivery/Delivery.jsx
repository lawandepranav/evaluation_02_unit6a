import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Address from "./Address";
import Subtotal from "./Subtotal";
import { CgArrowLongRight } from "react-icons/cg";
import "./delivery.css";

const Wrapper = styled.div`
  overflow: hidden;
  font-family: sans-serif;
  min-height: 100%;
  margin-top: 1.2%;
  padding-bottom: 10%;
  font-size: 14px;
  line-height: 1.2;
  min-height: 100%;
  div {
    // border: 1px solid red;
  }
`;

const Delivery = (props) => {
  const dispatch = useDispatch();
  // const isAddrSelected=useSelector(state=>state.cart.isAddress)

  return (
    <>
      <Wrapper>
        <div
          style={{
            display: "flex",
            width: "95%",
            margin: "auto",
            gap: "30px",
            padding: "20px",
          }}
        >
          <div style={{ width: "70%" }}>
            <div>
          
              <div>
                <Address />
              </div>
            
              <div style={{ textAlign: "left", padding: "20px" }}>
                {" "}
                <p style={{ fontSize: "30px", fontWeight: "800" }}>
                  Arriving ?
                </p>
              </div>
              <div
                style={{
                  width: "100%",
                  padding: "20px",
                  border: "1px solid gray",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "20pxs",
                  }}
                >
                  <p style={{ fontSize: "20px", fontWeight: "600" }}>
                    STANDARD DELIVRY
                  </p>
                  <p>FREE</p>
                </div>
              </div>
              <div
                style={{
                  textAlign: "left",
                  padding: "20px",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Email:lawandepranav@gmail.com
              </div>
              <div>
                <p>My billing and delivery information are the same.</p>
              </div>
              <div className="div-brutal-vid">
                <button className="button-brutal-vid">
                  <Link to="/payment">
                    REVIEW & PAY{" "}
                    <CgArrowLongRight style={{ fontSize: "25px" }} />
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div style={{ width: "35%" ,marginTop:"100px"}}>
            <Subtotal />
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default Delivery;
