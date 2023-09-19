import { EDIT_BOOKS_SUCCESS, GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionTypes"
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

const editBookSuccessAction=()=>{
    return ({type:EDIT_BOOKS_SUCCESS})
}


export const getBooks=(paramObj={})=>(dispatch)=>{
    dispatch(getBooksRequestAction())
    // console.log(paramObj)
    axios({
        method:'get',
        url:'http://localhost:8080/books',
        params:paramObj
    })
    .then((res)=>{
        // console.log(res.data)
        dispatch(getBooksSuccessAction(res.data))
    })
    .catch(err=>dispatch(getBooksFailureAction()))
}


export const editBooks=(id,editData)=>(dispatch)=>{
 return axios({
    method:'patch',
    url:`http://localhost:8080/books/${id}`,
    data:editData
 })
 .then(res=>{
    console.log(res)
    dispatch(editBookSuccessAction())
 })
 .catch(err=>console.log(err))
}