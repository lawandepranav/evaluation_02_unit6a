import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";

// import {getCartTotal} from '../../redux/reducer/reducer'

const Subtotal = ({ total }) => {
  const cartItems = useSelector((state) => state.cart);

  // console.log(cartItems,'crtItem');
  return (
    <div>
      <div className="div-brutal-vid">
        <button className="button-brutal-vid">
          <Link to="/delivery">
            Checkout <CgArrowLongRight style={{ fontSize: "25px" }} />
          </Link>
        </button>
      </div>
      <div className="subtotal">
        <div className="order-title">
          {" "}
          <p>ORDER SUMMARY</p>
        </div>

        <div className="order-values">
          <p>ORIGINAL PRICE</p>
          <p>{}</p>
        </div>
        <div className="order-values">
          <p>ON SALE</p>
          <p></p>
        </div>
        <div className="order-values">
          <p>{} ITEMS</p>
          <p></p>
        </div>
        <div className="order-values">
          <p>DELIVERY</p>
          <p>FREE</p>
        </div>
        <div className="order-values">
          <p>BUY MORE SAVE MORE</p>
          <p></p>
        </div>
        <div className="order-values">
          <p>TOTAL</p>
          <p>{total}</p>
        </div>
    
      </div>
      <div>
     
      </div>
    </div>
  );
};

export default Subtotal;
