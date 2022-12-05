import React, { Profiler, useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { NavLink, Route, Routes } from 'react-router-dom';

import logo from '../../assets/logoo.png'; 
import './navbar.css';
















import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { Favorite } from '@mui/icons-material';
import { Link } from '@mui/material';



import usericon from '../../assets/UserIcon.png'; 

function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings" >
          <IconButton
            onClick={handleClick}
            size="large"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <img src={usericon} alt='logo' width={50} height={50} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            background: 'var(--color-dark-blue)',
            color: 'white',
            mt: 1.5,
            ml: -2,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
              background: 'var(--color-dark-blue)',
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem component={NavLink} to="/editProfile">
          <ListItemIcon>
            <Avatar fontSize="small" style={{ color: "var(--color-orange)", background: 'var(--color-dark-blue)' }} />
          </ListItemIcon>
          Hesabım
        </MenuItem>

        <MenuItem component={NavLink} to="/favorites">
          <ListItemIcon>
            <Favorite fontSize="small" style={{ color: "var(--color-orange)" }} />
          </ListItemIcon>
          Favoriler
        </MenuItem>

        <MenuItem component={NavLink} to="/" style={{textDecoration: "none"}}>
          <ListItemIcon>
            <Logout fontSize="small" style={{ color: "var(--color-orange)" }} />
          </ListItemIcon>
          Çıkış Yap
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}














const LinksMenu = () => (
  <>
    <p><a href='#link1'>Hakkımızda</a></p>
    <p><a href='#link2'>Bize Ulaşın</a></p>
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
          <LinksMenu />
        </div>

        <div class="fill-remaining-space"></div>

        <div className='navbar-sign'>
          <p><NavLink to='/signIn'>Giriş yap</NavLink></p>
          <button type='button'>Kayıt ol</button>
        </div>

        <div>
          <AccountMenu/>
        </div>

        <div className='navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> /* ? if demek */
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} /> /* : else demek */
          }
          {toggleMenu && ( /* && eger toggleMenu True'ysa */
            <div className='navbar-menu_container scale-up-center'>
              <div className='navbar-menu_container_links'>
                <LinksMenu />
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