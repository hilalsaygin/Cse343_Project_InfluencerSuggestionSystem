import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import SignIn from './pages/SignIn';
import HomePage from './pages/HomePage';
import Favorites from './pages/Favorites';
import InfluencerProfile from './pages/InfluencerProfile';
import EditProfile from './pages/EditProfile';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

import RecordList from './TEST';

import "bootstrap/dist/css/bootstrap.min.css"

import {useLocation} from 'react-router-dom';
import {useLayoutEffect} from 'react';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [location.pathname]);
  return children
} 

const App = () => {
  return (
    <div className='R'>
      <BrowserRouter>
        <Navbar />
        <Wrapper >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/influencerProfile/:username" element={<InfluencerProfile />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/hakkimizda" element={<AboutUs />} />
            <Route path="/bizeulasin" element={<ContactUs />} />
              
            <Route path="/test" element={<RecordList />} />
          </Routes>
        </Wrapper >
      </BrowserRouter>
    </div>
  );
}

export default App