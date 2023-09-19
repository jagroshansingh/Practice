import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { BookCard } from '../components/BookCard'

export const SingleBook = () => {
  const {id}=useParams()
  const books=useSelector(store=>store.BookReducer.books)
  const [bookData,setBookData]=useState(null)
  console.log(bookData)
  useEffect(()=>{
    let myBook=books.find(el=>el.id==id)
    myBook && setBookData(myBook)
  },[])
  return (
    <div>
      <h2>Book id: {id}</h2>
      {bookData && <BookCard book={bookData}/>}
    </div>
  )
}
