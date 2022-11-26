import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import HomePage from './pages/HomePage';
import Favorites from './pages/Favorites';
import InfluencerProfile from './pages/InfluencerProfile';
import EditProfile from './pages/EditProfile';

import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <div className='R'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="influencerProfile" element={<InfluencerProfile />} />
          <Route path="editProfile" element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App