import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionTypes"
import axios from 'axios'

const getBooksRequestAction=()=>{
    return ({type:GET_BOOKS_REQUEST})
}

const getBooksSuccessAction=(payload)=>{
    return ({type:GET_BOOKS_SUCCESS,payload:payload})
}

const getBooksFailureAction=()=>{
    return ({type:GET_BOOKS_FAILURE})
}


export const getBooks=(dispatch)=>{
    dispatch(getBooksRequestAction())

    axios({
        method:'get',
        url:'http://localhost:8080/books'
    })
    .then((res)=>{
        // console.log(res.data)
        dispatch(getBooksSuccessAction(res.data))
    })
    .catch(err=>dispatch(getBooksFailureAction()))
}