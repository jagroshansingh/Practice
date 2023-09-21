import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/Auth/action";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { token,isError } = useSelector((store) => store.AuthReducer);
  console.log('some',token,isError);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location)

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    let cred = { email, password };

    dispatch(login(cred))
      .then((res) => {})
      .catch((err) => console.log(err)); 
  };

  useEffect(() => {
    if (token) {
      alert('login success')
      navigate(location.state || "/", { replace: true });
    }

    if(isError) alert('wrong credentials')
  }, [token,isError]);

  return (
    <div>
      <h3>Login</h3>
      <div
        style={{
          textAlign: "end",
          border: "0px solid",
          width: "20%",
          margin: "auto",
        }}
      >
        <label>
          Email: <input type="email" name="" onChange={handleEmail} />
        </label>
        <br />
        <label>
          Password: <input type="password" name="" onChange={handlePassword} />
        </label>
      </div>
      <button onClick={handleLogin}>Submit</button>
    </div>
  );
};
