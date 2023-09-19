import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export const ProtectedAuth = ({children}) => {
    const {isAuth}=useSelector(store=>store.AuthReducer)
    const location=useLocation()

    if(!isAuth) return <Navigate to={'/login'} state={location.pathname} replace/>
    return children
}
