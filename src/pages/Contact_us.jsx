import React from 'react'
import { RiBodyScanFill } from 'react-icons/ri';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from '../containers';
import { CTA, Brand, Navbar } from './../components';

import "./indexPages.css"
import "./Contact_us.css"

function Contact_us() {
  return (
    <body>
      <div>
        <Navbar/>
        <h3 className='Contact_us-title'>
        Bize Ulaşın
        </h3>

        <div className="nameSurname-Contact_us">
        {/*<label>Email address</label>*/}
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Adınızı Girin"
                  />
        </div>
        <p className="nameSurnamelabel-Contact_us">
            Adınız
        </p>

        <div className="email-Contact_us">
      {/*<label>Email address</label>*/}
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
      </div>
      <p className="emaillabel-Contact_us">
        Email Adresi
      </p>

      <div className='Contact_us-text'>
                    <textarea
                    type="text"
                    className="form-control"
                    placeholder="Adınızı Girin"
                    rows="8"
                    />

      </div>

      <p className="Contact_us-textlabel">
        istek ve şikayetler
      </p>

      <div className="submit-Contact_us1">
              <button type="submit" className='submit-Contact_us'>
                Gönder
              </button>
      </div>





      </div>
    </body>
  )
}

export default Contact_us