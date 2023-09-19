import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editBooks, getBooks } from "../redux/Books/action";

const initialState = {
  bookDetail:"",
  author: "",
  bname: "",
};

let reducer = (state, { type, payload }) => {
  switch (type) {
    case "alterAuthor":
      return { ...state, author: payload };
    case "alterBname":
      return { ...state, bname: payload };
    case "alterBookDetail": return {...state,bookDetail:payload};
    default:
      return state;
  }
};
export const EditBook = () => {
  const books = useSelector((store) => store.BookReducer.books);
  const [state, dispatcher] = useReducer(reducer, initialState);
  const { id } = useParams();
  const dispatch=useDispatch()

  const handleSubmit=()=>{
    let data={
      author:state.author,
      book_name:state.bname
    }
    // console.log(data)
    dispatch(editBooks(id,data))
    .then(res=>getBooks())
    .catch(err=>console.log('failed'))
  }

  useEffect(()=>{
    let myBook=books.find(el=>el.id==id)
    dispatcher({type:'alterBookDetail',payload:myBook})
    dispatcher({type:'alterAuthor',payload:myBook.author})
    dispatcher({type:'alterBname',payload:myBook.book_name})
  },[])
  return (
    <div>
      <h3>Book id: {id}</h3>
      <label>
        Author:{" "}
        <input
          type="text"
          value={state.author}
          onChange={(e) =>
            dispatcher({ type: "alterAuthor", payload: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        BName:{" "}
        <input
          type="text"
          value={state.bname}
          onChange={(e) =>
            dispatcher({ type: "alterBname", payload: e.target.value })
          }
        />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
