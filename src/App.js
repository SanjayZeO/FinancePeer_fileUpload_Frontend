import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from './screens/Login'
import Register from './screens/Register'
import Upload from './screens/Upload'
import ViewData from './screens/ViewData'
import Main from './screens/Main'





const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Login/>} />
                    <Route path="/login" exact element={<Login/>} />
                    <Route path="/register" exact element={<Register/>} />
                    <Route path="/upload" exact element={<Upload/>} />
                    <Route path="/view" exact element={<ViewData/>} />
                    <Route path="/main" exact element={<Main/>} />


                </Routes>
                


            </BrowserRouter>
        </div>
    )
}

export default App