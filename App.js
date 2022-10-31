import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import HomePage from './pages/HomePage';

import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <div className='R'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="signIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App