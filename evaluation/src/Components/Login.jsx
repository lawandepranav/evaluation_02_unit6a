import React from "react";
import { useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux"
import {loginUser} from "../Redux/Login/action"

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const handleLogin = () => {
    const payload = { email, password };
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          dispatch(loginUser(true))
          navigate("/");
        }else{
          alert("Please fill Correct details")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      <label>
        PASSWORD
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  );
};

export default Login;

