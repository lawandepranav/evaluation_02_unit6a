import React from "react";
// import { Card } from "react-bootstrap";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import "./CardShop.css";
function CardShop() {
  return (
    <div className="card-shop-container">
      <div className="card-title-who">
        <p>WHO ARE YOU SHOPPING FOR?</p>
      </div>
      <div className="card-group-shop">
        <Link to="./men">
          <div className="card-shop">
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/evergreen-homepage-gender-navigation-men-dt_tcm209-761437.jpg"
              alt="a"
            />
            <div className="center-tag">MEN</div>
          </div>
        </Link>
        <Link to="./women">
          {" "}
          <div className="card-shop">
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/womens_1_tcm209-792193.png"
              alt="b"
            />
            <div className="center-tag">WOMEN</div>
          </div>
        </Link>
        <Link to="./kids">
          <div className="card-shop">
            <img
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/kids_1_tcm209-792188.png"
              alt="c"
            />
            <div className="center-tag">KIDS</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CardShop;
