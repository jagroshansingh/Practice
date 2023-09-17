import React from 'react'
import { Navbar } from '../components/Navbar'
import { SideBar } from '../components/SideBar'
import { BookList } from '../components/BookList'

export const Books = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <SideBar/>
            <BookList/>
        </div>
    </div>
  )
}
