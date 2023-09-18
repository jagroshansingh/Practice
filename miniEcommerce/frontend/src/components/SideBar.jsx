import React, { useState } from 'react'

export const SideBar = () => {
  const [categoty,setCategory]=useState([])

  const handleFilter=()=>{

  }
  return (
    <div>
      <h3>Filter By</h3>
      <label><input type="checkbox" value="Novel" onChange={handleFilter} /> Novel</label>
      <label><input type="checkbox" value="Motivational" onChange={handleFilter} /> Motivational</label>
      <label><input type="checkbox" value="Thriller" onChange={handleFilter} /> Thriller</label>
      <label><input type="checkbox" value="Science_Fiction" onChange={handleFilter} /> Science Fiction</label>
    </div>
  )
}
