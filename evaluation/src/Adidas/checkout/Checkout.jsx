import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {

  const data=useSelector(store=>store.cart.data)
  const [cartItems, setSlider] = React.useState([]);

  const getData = () => {
    axios
      .get("https://backend-gamma-vert.vercel.app/pro", {})
      .then((res) => setSlider(res.data))

      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  console.log(cartItems);
  let total=0;
  cartItems.map((el)=>{
    total = total + el.price;
  })

  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <div>
          <p className="checkoutTitle">YOUR BAG</p>
          <div style={{display:'flex'}}><p>TOTAL(2 ITEMS)</p><p style={{fontWeight:700}}> ₹{total}</p></div>
           <p style={{textAlign:"left"}}>Items in your bag are not reserved — check out now to make them yours.</p>
           <div style={{marginTop:"64px"}}>
             {cartItems.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.pro_name}
              details={item.pro_det}
              img={item.pro_img[0]}
              price={item.price}
              key={item.id}
            />
          ))}</div>
         


        </div>
      </div>
      <div className="checkoutRight">
    
        <Subtotal total={total} />
      
        {/* <h2>The Subtotal will go here</h2> */}
      </div>
    </div>
  );
};

export default Checkout;
