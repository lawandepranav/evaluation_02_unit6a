import React from "react";
// import { useStateValue } from '../../context/StateProvider'
import "./CheckoutProduct.css";
import axios from 'axios'
// import StarIcon from '@material-ui/icons/Star';
import { useDispatch, useSelector } from "react-redux";
// import { REMOVE_FROM_CART } from '../../redux/action/actionType'
// import { removeFromCart } from '../../redux/action/action'

const CheckoutProduct = ({ id, img, title, price, details }) => {
    const [qty, setQty]=React.useState(1)
  const dispatch = useDispatch();
  // const [{ cart }, dispatch] = useStateValue();
  const cartItems = useSelector((state) => state.cart);
  const handleChange=(event) =>{
    setQty(event.target.value);
    console.log(qty)
  }
 
  const handleDelete= (itemId)=>{
  
    axios.delete(`https://backend-gamma-vert.vercel.app/pro/${itemId}`)
   

}

  return (
    <div className="checkoutProduct">
      <img className="checkoutProductImg" src={img} alt="Item Img" />
      <div className="checkoutProductInfo">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="checkoutProductTitle">{title}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="checkoutProductPrice">
              <small>₹</small>
              <strong>{qty*price}</strong>
            </p>
            <button style={{cursor:"pointer"}} onClick={()=>{handleDelete(id)}} >Delete</button> 
          </div>
        </div>
        <div>Size:4</div>
        <div> <select onChange={handleChange}> 
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
        </select></div>
       
      </div>
    </div>
  );
};

export default CheckoutProduct;
