
import './App.css';
import Navbar from "./Components/Navbar"
import {Routes,Route} from "react-router-dom"
import Login from "./Components/Login"
import Blogdetails from './Components/Blogdetail';
import Blogcreate from "./Components/Blogcreate";
import Blogs from "./Components/Blogs";
import Home from "./Adidas/Home/Home"
import FinalNav from './Adidas/Main/Navbar/FinalNav'
import FinalFoot from './Adidas/Main/Footer/FinalFoot'
import Men from './Adidas/Home/Sliders/Men';
import Checkout from './Adidas/checkout/Checkout';
import Delivery from './Adidas/Delivery/Delivery';

function App() {
  return (
    <div className="App">
      {/* <FinalNav /> */}
       <Routes>
       <Route path = "/men" element = {<Men/>}></Route>
       <Route path = "/checkout" element = {<Checkout/>}></Route>
       <Route path = "/delivery" element = {<Delivery/>}></Route>
       <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/home" element = {<Home />}></Route>
          <Route path = "/Login" element = {<Login />}></Route>
          <Route path = "/Blogcreate" element = {<Blogcreate />}></Route>
          <Route path = "/Blogs" element = {<Blogs />}></Route>
          <Route path = "/item/:id" element = {<Blogdetails />}></Route>
          
        
       </Routes>
       <FinalFoot />
    </div>
  );
}

export default App;
