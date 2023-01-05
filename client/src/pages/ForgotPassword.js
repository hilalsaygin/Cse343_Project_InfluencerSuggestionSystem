import React from 'react'
import { Navbar } from '../components';

import './forgotPassword.css';

export default function ForgotPassword(){

    return(

        <div>
            <div className='container'>
                <div className='contents'>
                    <h3 className='title'> Şifre Yenileme</h3>
                    
                    <div className="form-group mt-3">
                        <label>Email adresi</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Email adresinizi girin"
                        />
                    </div>
                    
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="button">
                            Giriş Yap
                        </button>
                    </div>

                </div>
            </div>


        </div>
    )
}