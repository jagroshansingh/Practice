import React from "react";
import styled from 'styled-components'

export const BookCard = ({ book }) => {
  const { book_name, author, category, release_year } = book;
  // console.log(styled)
  return (
    <DivWrapper>
      <img
        src="https://static.vecteezy.com/system/resources/previews/009/384/332/large_2x/old-vintage-book-clipart-design-illustration-free-png.png"
        alt="bookImage"
        width={'100%'}
      />
      <h3>{book_name}</h3>
      <p>Author: {author}</p>
      <p>Category: {category}</p>
      <p>Year: {release_year}</p>
    </DivWrapper>
  );
};

const DivWrapper=styled.div`
  border:1px solid
`
