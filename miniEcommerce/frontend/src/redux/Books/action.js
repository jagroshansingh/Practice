import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionTypes"

const getBooksRequestAction=()=>{
    return ({type:GET_BOOKS_REQUEST})
}

const getBooksSuccessAction=(payload)=>{
    return ({type:GET_BOOKS_SUCCESS,payload})
}

const getBooksFailureAction=()=>{
    return ({type:GET_BOOKS_FAILURE})
}


export const getBooks=()=>{
    getBooksRequestAction()

    axios({
        method:'get',
        url:'http://localhost:8080/books'
    })
    .then((res)=>{
        console.log(res)
        getBooksSuccessAction(res.data)
    })
    .catch(err=>getBooksFailureAction())
}