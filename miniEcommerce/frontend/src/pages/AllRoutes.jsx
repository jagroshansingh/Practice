import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login } from '../pages/Login'
import { Books } from './Books'
import { SingleBook } from './SingleBook'
import { EditBook } from './EditBook'
import { ProtectedAuth } from '../components/ProtectedAuth'

export const AllRoutes=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Books/>}/>
                <Route path='/books/:id' element={<ProtectedAuth><SingleBook/></ProtectedAuth>}/>
                <Route path='/books/:id/edit' element={<ProtectedAuth><EditBook/></ProtectedAuth>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='*' element={<h3>Error 404: Not Found</h3>}/>
            </Routes>
        </BrowserRouter>
    )
}