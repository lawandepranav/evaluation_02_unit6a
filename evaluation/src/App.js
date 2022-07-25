
import './App.css';
import Navbar from "./Components/Navbar"
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home/Home'
import Login from "./Components/Login/Login"
import Blogdetails from './Components/Blogs/Blogdetail';
function App() {
  return (
    <div className="App">
       <Navbar />

       <Routes>
          <Route path = "/" element = {<Home />}></Route>
          
       </Routes>

    </div>
  );
}

export default App;
{/* <Route path = "/blog/:id" element = {<Blogdetails />}></Route>
<Route path = "/login" element = {<Login />}></Route> */}