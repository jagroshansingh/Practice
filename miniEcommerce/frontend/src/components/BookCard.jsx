import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components'

export const BookCard = ({ book }) => {
  // console.log(book)
  const { book_name, author, category, release_year,id } = book;
  return (
    <DivWrapper>
      <Link to={`/books/${id}`}>
      <img
        src="https://static.vecteezy.com/system/resources/previews/009/384/332/large_2x/old-vintage-book-clipart-design-illustration-free-png.png"
        alt="bookImage"
        width={'50%'}
        style={{cursor:'pointer'}}
      />
      </Link>
      <h3>{book_name}</h3>
      <p>Author: {author}</p>
      <p>Category: {category}</p>
      <p>Year: {release_year}</p>
      <Link to={`/books/${id}/edit`}>
      <button>Edit</button>
      </Link>
    </DivWrapper>
  );
};

const DivWrapper=styled.div`
  border:1px solid
`
