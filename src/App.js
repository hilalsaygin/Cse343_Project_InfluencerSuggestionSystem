import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar,Auth} from './components';
import './App.css'
import { Route,Routes } from 'react-router-dom';
import SignIn from './components/LoginPage/SignIn';
import HomePage from './components/HomePage';


const App = () => {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element = {<HomePage/>}/>
          <Route path='/signIn' element = {<SignIn/>}/>
        </Routes>
    </div>
  )
}

export default App