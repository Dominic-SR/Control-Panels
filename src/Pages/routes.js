import React from 'react'
import {BrowserRouter,Router,Route, Routes} from 'react-router-dom'

function routes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={""} />
        </Routes>
    </BrowserRouter>
  )
}

export default routes