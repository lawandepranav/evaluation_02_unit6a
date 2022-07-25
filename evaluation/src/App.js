
import './App.css';
import Navbar from "./Components/Navbar"
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import Login from "./Components/Login"
//import Blogdetails from './Components/Blogs/Blogdetail';
import Blogcreate from "./Components/Blogcreate";
import Blogs from "./Components/Blogs";

function App() {
  return (
    <div className="App">
       <Navbar />
       <Routes>
          <Route path = "/" element = {<Home />}></Route>
          <Route path = "/Login" element = {<Login />}></Route>
          <Route path = "/Blogcreate" element = {<Blogcreate />}></Route>
          <Route path = "/Blogs" element = {<Blogs />}></Route>
        
       </Routes>

    </div>
  );
}

export default App;
