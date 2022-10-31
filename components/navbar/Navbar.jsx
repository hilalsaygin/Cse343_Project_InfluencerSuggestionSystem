import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { NavLink, Route, Routes } from 'react-router-dom';

import logo from '../../assets/logoo.png'; 
import './navbar.css';

const Menu = () => (
  <>
    <p><a href='#link1'>Link1</a></p>
    <p><a href='#link2'>Link2</a></p>
    <p><a href='#link3'>Link3</a></p>
    <p><a href='#link4'>Link4</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'> 
      
      <div className='navbar-links'>

        <a href="/" aria-label="Logo" class="navbar-main__logo">
          <div className='navbar-links_logo'>
            <img src={logo} alt='logo' />
          </div>
        </a>

        <div className='navbar-links_container'>
          <Menu />
        </div>

        <div class="fill-remaining-space"></div>

        <div className='navbar-sign'>
          <p><NavLink to='/signIn'>Giriş yap</NavLink></p>
          <button type='button'>Kayıt ol</button>
        </div>

        <div className='navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> /* ? if demek */
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} /> /* : else demek */
          }
          {toggleMenu && ( /* && eger toggleMenu True'ysa */
            <div className='navbar-menu_container scale-up-center'>
              <div className='navbar-menu_container_links'>
                <Menu />
              </div>
            <div className='navbar-menu_container_links_sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
            </div>
          )}
        </div>

      </div>

    </div>
  )
}

export default Navbar