import React from 'react'
import { RiBodyScanFill } from 'react-icons/ri';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from '../containers';
import { CTA, Brand, Navbar } from './../components';

import "./indexPages.css"
import "./homepage.css"

function HomePage() {
  return (
    <body>
      <div>
        <div className='gradient__bg'>
          <Navbar />
          <Header/>
         <Brand />
        </div>   

      </div>
    </body>
  )
}

export default HomePage