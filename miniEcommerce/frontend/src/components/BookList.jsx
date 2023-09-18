import React, { useEffect } from 'react'
import { BookCard } from './BookCard'
import {useDispatch, useSelector} from 'react-redux'
import { getBooks } from '../redux/Books/action'
import styled from 'styled-components'
import { useLocation, useSearchParams } from 'react-router-dom'

export const BookList = () => {
    const dispatch=useDispatch()
    const books=useSelector((store)=>store.books)
    const location=useLocation()
    const [searchParams,setSearchParams]=useSearchParams()
    let all=searchParams.getAll('category')

    useEffect(()=>{
      let paramObj={
        category:all
      }
        dispatch(getBooks(paramObj))
    },[location.search])
    
  return (
    <DivWrapper>
        {books && books.map((book)=><BookCard key={book.id} book={book}/>)}
    </DivWrapper>
  )
}

const DivWrapper=styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,max-content));
  grid-gap:10px;
`
