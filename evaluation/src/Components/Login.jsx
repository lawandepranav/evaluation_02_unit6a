import React from "react";
import { useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"

import axios from "axios"
import { loginSuccess, loginError,loginLoading } from "../Redux/Auth/Action";

const Login = () => {
  const token=useSelector(state=>state.auth.token)
  
   const dispatch=useDispatch()

   const [loginData, setLoginData]=React.useState({
    email:"",
    password:""
   })

   const handleChange=(el)=>{
    const {name,value}=el.target;
    setLoginData(prev=>({
        ...prev,
        [name]:value
    }))
    }

 const handleLogin=()=>{
      dispatch(loginLoading())
      axios({
        method:"post",
        url:"https://reqres.in/api/login",
        data:loginData
      }).then(res=>{
        dispatch(loginSuccess(res.data.token))
      }).catch(err=>{
        dispatch(loginError())
      })
    }

  return (
    <div>
    {
       Object.keys(loginData).map((el)=><input id={el} value={loginData[el]} name={el} onChange={handleChange} label={el.toLocaleUpperCase()} variant="outlined" />)
    }
    <button   onClick={handleLogin} variant="contained">Login</button>
  
   </div>
  );
};

export default Login;

