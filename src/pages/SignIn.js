import React, { useState } from "react";
import { useEffect } from "react";
import { Navbar } from "./../components";
import "./signin.css";
import "./signup.css";
const bcrypt = require("bcryptjs");
let SERVER_HOST;

if (process.env.NODE_ENV === "development") {
  console.log("Development code build");
  SERVER_HOST = "http://localhost:5000";
} else {
  console.log("Production code build");
  SERVER_HOST = "http://188.166.10.60:5000";
}

export default function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("unauthenticated");

  const [authMode, setAuthMode] = useState(1);
  //authMode = 1 for signIn,
  //authMode = 0 for signUp

  const handleLogin = async () => {
    console.log("Login button clicked.");
    const response = await fetch(`${SERVER_HOST}/api/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email, //use email as username for compatibility issues in passport.js
        password,
      }),
    });
    try {
      //TODO: server does not return json on response when not authenticated, do this properly
      const res = await response.json();
      console.log("Returned from /api/login: ", res);
      setAuth("authenticated");
      localStorage.setItem("session", JSON.stringify(res.data));
      window.location.href = "/";
    } catch (e) {
      console.log("Returned from /api/login: ", null);
      setAuth("invalid");
    }
  };

  const handleRegister = async () => {
    console.log("Register button clicked.");
    const response = await fetch(`${SERVER_HOST}/api/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password: bcrypt.hashSync(password, 8),
      }),
    });

    const result = await response.json();

    console.log("Returned from /api/register: ", result);
  };

  function Form(authMode) {
    return (
      <>
        <Navbar />
        <div className="Auth-form-container">
          <h3 className="Auth-form-title2-signin">
            {authMode ? "Giriş Yap" : "Kayıt Ol"}
          </h3>

          {!authMode && (
            <>
              <p className="nameSurnamelabel-signup">Adınız</p>

              <div className="nameSurname-signup">
                {/*<label>Email address</label>*/}
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Adınızı Girin"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </>
          )}

          <div className="email-signin">
            {/*<label>Email address</label>*/}
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className="emaillabel-signin">Email Adresi</p>

          <div className="password-signin">
            {/*<label>Password</label>*/}
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="passwordlabel-signin">Şifre</p>

          <div className="submit-signin1">
            <button
              type="submit"
              className="submit-signin"
              onClick={authMode ? handleLogin : handleRegister}
            >
              {authMode ? "Giriş Yap" : "Kayıt Ol"}
            </button>
          </div>

          <div className="forgot-password-signin">
            <p className="text-center mt-2">
              <a href="#">Şifreni mi unuttun?</a>
            </p>
          </div>

          <div className="notregistered-signin">
            <span
              className="link-primary"
              onClick={() => {
                setAuthMode(!authMode);
              }}
            >
              {authMode ? "Bir hesabın yok mu?" : "Bir hesabın var mı?"}
            </span>
          </div>

          {auth === "invalid" && (
            <div className="credentials-invalid">
              Kullanıcı adı veya şifre hatalı !
            </div>
          )}
          {auth === "authenticated" && (
            <div className="credentials-valid">Giriş başarılı !</div>
          )}
        </div>
      </>
    );
  }

  if (authMode) return Form(1);
  else return Form(0);
}
