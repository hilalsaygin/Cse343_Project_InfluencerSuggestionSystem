import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import HomePage from './pages/HomePage';
import Favorites from './pages/Favorites';
import InfluencerProfile from './pages/InfluencerProfile';
import EditProfile from './pages/EditProfile';
import Contact_us from './pages/Contact_us';
import About_us from './pages/About_us';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='R'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="influencerProfile" element={<InfluencerProfile />} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="Contact_us" element={<Contact_us />} />
          <Route path="About_us" element={<About_us />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App