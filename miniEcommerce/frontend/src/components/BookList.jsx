import React, { useEffect } from 'react'
import { BookCard } from './BookCard'
import {useDispatch, useSelector} from 'react-redux'
import { getBooks } from '../redux/Books/action'
import styled from 'styled-components'
import { useLocation, useSearchParams } from 'react-router-dom'

export const BookList = () => {
    const dispatch=useDispatch()
    const books=useSelector((store)=>store.BookReducer.books)
    const location=useLocation()
    const [searchParams]=useSearchParams()
    let cat=searchParams.getAll('category')
    let or=searchParams.get('order')

    useEffect(()=>{
      let paramObj={
        category:cat,
        _sort: or && 'release_year',
        _order: or
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
