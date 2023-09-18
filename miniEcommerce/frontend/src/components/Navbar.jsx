import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{display:'flex',border:'1px solid',justifyContent:'space-evenly', alignItems:'center'}}>
      <h2>Book Management</h2>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
    </div>
  )
}
