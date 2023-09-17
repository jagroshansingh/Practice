import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { SignUp } from '../pages/SignUp'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'

export const AllRoutes=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='*' element={<div>Error 404: Not Found</div>}/>
            </Routes>
        </BrowserRouter>
    )
}