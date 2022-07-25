import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../Redux/Login/action'

const Login = () => {
  const navigate = useNavigate()
  const{login} = useSelector((store)=>store)
  const dispatch = useDispatch()
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [all, setall]=React.useState({})
 

  React.useEffect(()=>{
    fetchUser()
    
},[all])

const fetchUser = () => {
    fetch(`https://reqres.in/api/login`,{
      method: "POST",
      body:JSON.stringify(all)
      ,
      headers: {
        "content-Type": "application/json"
      }
        
    
    }).then((res)=> res.json()).then((res) => {
      console.log(res)
      dispatch(loginUser({
        token:res.token,
        email:email
      }))
     //navigate("./Home")
  
    }).catch((err)=>{
      console.log(err)
    })
}
  return (
    <div>
      <h1>LOGIN</h1>
      <label>
        EMAIL
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        PASSWORD
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button onClick={()=>{
    if(email===undefined || password === undefined)
    {
      alert("Please Fill required places")
      return
    }
    setall({
        email:email,
        password:password
    })
    console.log(all)
   }}>LOGIN</button>
    </div>
  );
};
export default Login;