import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
  const location=useLocation()
  // console.log(location)
  return (
    <div style={{display:'flex',border:'1px solid',justifyContent:'space-evenly', alignItems:'center'}}>
      <h2>Book Management</h2>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"} state={location.pathname}>Login</Link>
      <Link to={"/register"} state={location.pathname}>Register</Link>
    </div>
  )
}
