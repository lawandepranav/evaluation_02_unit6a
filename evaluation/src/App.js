
import './App.css';
import Navbar from "./Components/Navbar"
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import Login from "./Components/Login"
import Blogdetails from './Components/Blogs/Blogdetail';
function App() {
  return (
    <div className="App">
       <Navbar />

       <Routes>
          <Route path = "/" element = {<Home />}></Route>
          <Route path = "/blog/:id" element = {<Blogdetails />}></Route>
          <Route path = "/login" element = {<Login />}></Route>
       </Routes>

    </div>
  );
}

export default App;
