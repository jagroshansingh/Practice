import React, { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../redux/Auth/action'
import { useLocation, useNavigate } from 'react-router-dom'

let initial={
    name:"",
    email:"",
    password:""
}
let reducer=(state=initial,{type,payload})=>{
    switch(type){
        case 'nameChange':return {...state,name:payload}
        case 'emailChange':return {...state,email:payload}
        case 'passwordChange':return {...state,password:payload}
        default: return state
    }
}

export const Register = () => {
    const navigate=useNavigate()
    const dispatcher=useDispatch()
    const location=useLocation()
    const [state,dispatch]=useReducer(reducer,initial)
    // console.log(state)

    const handleSubmit=()=>{
        dispatcher(register(state))
        .then((res)=>navigate(location.state||"/",{replace:true}))
        .catch(err=>console.log(err))
    }

  return (
    <div>
        <h1>Register</h1>
        <label>Name: <input type="text" value={state.name} onChange={(e)=>dispatch({type:"nameChange",payload:e.target.value})}/></label><br />
        <label>Email: <input type="email" value={state.email} onChange={(e)=>dispatch({type:"emailChange",payload:e.target.value})}/></label><br />
        <label>Password: <input type="password" value={state.password} onChange={(e)=>dispatch({type:"passwordChange",payload:e.target.value})}/></label><br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
