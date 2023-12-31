import { EDIT_BOOKS_SUCCESS, GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionTypes"

const initialState={
    books:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_BOOKS_REQUEST: return {...state, isLoading:true}
        case GET_BOOKS_SUCCESS: return {...state, isLoading:false ,books:payload}
        case GET_BOOKS_FAILURE: return {...state, isError:true, isLoading:false}
        case EDIT_BOOKS_SUCCESS: return {...state, isLoading:true}
        default: return state
    }
}