import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/Auth/action'
import { useLocation, useNavigate } from 'react-router-dom'

export const Login = () => {
  const [email,setEmail]=useState("")
  const [password, setPassword]=useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const location=useLocation()

  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }
  const handleLogin=()=>{
    let cred={email,password}

    dispatch(login(cred)).then(res=>navigate(location.state, {replace:true}))
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <h3>Login</h3>
      <div style={{textAlign:'end',border:'0px solid',width:'20%',margin:'auto'}}>
      <label>Email: <input type="email" name="" onChange={handleEmail}/></label><br />
      <label>Password: <input type="password" name="" onChange={handlePassword}/></label>
      </div>
      <button onClick={handleLogin}>Submit</button>
    </div>
  )
}
