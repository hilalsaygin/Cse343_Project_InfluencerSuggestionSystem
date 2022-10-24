import React from 'react'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from '../containers';
import { CTA, Brand, Navbar} from './';

function HomePage() {
  return (
    <div>
      <div className='gradient__bg'>
        <Navbar/>
        <Header />
        <Brand />
      </div>   
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
  </div>
  )
}

export default HomePage