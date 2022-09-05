import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Newadd from "./Newadd";
import "./address.css";

const Wrapper = styled.div`
  font-family: system-ui !important;
  line-height: 1.2;
  background: #fff;
  margin-bottom: 20px;
  padding-top: 35px;
  // padding-right: 40px;
  padding-bottom: 39px;
  // padding-left: 40px;
  div {
    // border: 1px solid red;
  }
`;

const Title = styled.p`
  margin-right: 25px;
  font-size: 40px;
  font-weight: 700;
`;

const AddressText = styled.div`
  font-size: 19px;
  font-style: sans-serif;
  font-weight: 500;
`;

const AddressContainer = styled.div`
  width: 70%;
  text-align: left;
`;

const Buttonadd = styled.button`
  decoration: none;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid black;
  font-size: 20px;
  font-weight: 500;
  margin-right: 8px;
  margin-top: 30px;
`;

const CurrAddr = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addr, setAddr] = useState({});

  useEffect(() => {
    setAddr({
      name: "Pranav Lawande",
      flat_no: "Flat No-1",
      landmark: "Near Shushrut hospital",
      place_name: "Mukti Housing Society, Kamgarnagar",
      pincode: "411018",
      city: "Pune",
    });
  }, []);

  const AddrSelected = () => {};
  const handleedit = () => {};
  const handleremove = () => {};

  return (
    <>
      <div style={{ width: "100%", border: "1px solid black" }}>
        <div style={{ padding: "20px" }}>
          <AddressContainer>
            <div>
              <AddressText>
                <p style={{ fontWeight: "650", fontSize: "21px" }}>
                  {addr.name}
                </p>
                {addr.flat_no}, {addr.landmark},{addr.place_name},{addr.city},
                {addr.pincode}
              </AddressText>
              <Buttonadd onClick={handleedit}>Edit</Buttonadd>
              <Buttonadd onClick={handleremove}>Remove</Buttonadd>
            </div>
          </AddressContainer>
        </div>
      </div>
    </>
  );
};

const Address = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addr, setAddr] = useState({});

  const [isAddrSelected, setIsAddrSelected] = useState(false);

  const AddrSelected = () => {};

  if (isAddrSelected) {
    return (
      <>
        <Wrapper>
          <div>
            <Newadd />
          </div>
        </Wrapper>
      </>
    );
  } else {
    return (
      <>
        <Wrapper>
          <div>
            <div style={{ padding: "20px", width: "100%" }}>
              <div style={{ textAlign: "left", marginBottom: "60px" }}>
                <Title>DELIVERY ADDRESS</Title>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="addressbox">
                  <CurrAddr />
                </div>
                <div className="addressboxnew">
                  <p
                    style={{
                      fontSize: "19px",
                      fontWeight: "650",
                      marginTop: "8px",
                    }}
                  >
                    New Address
                  </p>
                  <p>icon</p>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </>
    );
  }
};

export default Address;
