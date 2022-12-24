import React, { useState } from "react"
import { Navbar } from './../components';
import './signin.css'
import './signup.css'

export default function SignIn(){
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <>
        <Navbar/>
        {/*<div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              <a href="#">Forgot password?</a>
            </p>
          </div>
        </form>
    </div>*/}
    <div className="Auth-form-container">
      
      
        <div className="content">
          <h3 className="title">Giriş Yap</h3>
          
          <div className="form-group mt-3">
            <label>Email adresi</label>
                    <input
                      type="email"
                      className="form-control mt-1"
                      placeholder="Email adresinizi girin"
                    />
          </div>
          {/*<p className="emaillabel-signin">
            Email Adresi
          </p>*/}
          <div className="form-group mt-3">
            <label>Şifre</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Şifrenizi Girin"
                  />
          </div>
          {/*<p className="passwordlabel-signin">
            Şifre
          </p>*/}
          <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="button">
                    Giriş Yap
                  </button>
          </div>
          <div className="forgot-password-signin">
          <p className="text-center mt-2">
                  <a href="#">Şifreni mi unuttun?</a>
                </p>
          </div>
          <div className="notregistered-signin">
                  
                  <p className="text-center mt-2" onClick={changeAuthMode}>
                  Bir hesabın yok mu?
                  </p>
          </div>
        </div>
      
      
      
    </div>
    
        
        
        </>
        
      
    )
  }

  return (
    <>
      <Navbar/>
    {/*<div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            <a href="#">Forgot password?</a>
          </p>
        </div>
      </form>
  </div>*/}
  
  <div className="Auth-form-container">

  <div className="content">
      <h3 className="title">Kayıt ol</h3>

    <div className="form-group mt-3">
        <label>Adı Soyad</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Adınızı ve soyadınızı girin"
                  />
    </div>
    {/*<p className="nameSurnamelabel-signup">
        Adınız
      </p>*/}

    <div className="form-group mt-3">
      <label>Email adresi</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email adresinizi girin"
                />
      </div>
      {/*<p className="emaillabel-signup">
        Email Adresi
        </p>*/}
      <div className="form-group mt-3">
      <label>Şifre</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Şifrenizi girin"
              />
      </div>
      {/*<p className="passwordlabel-signup">
        Şifre
      </p>*/}

      <div className="d-grid gap-2 mt-3">
              <button type="submit" className="button">
                Kayıt ol
              </button>
      </div>
  </div>

  


  </div>





  
    
    
    </>
    
  )
}
