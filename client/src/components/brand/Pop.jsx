import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import "./popup.css";

function TransitionsModal({ auth, onClose }) {
    // Use a state variable to track whether the modal is open or not
    const [open, setOpen] = React.useState(!auth);
    const handleClose = () => {
      setOpen(false);
      onClose();
    };
  
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <div className="popup-container" id="blur">
              <h1>Profil detaylarını görebilmek için lütfen giriş yapınız.</h1>
              <div className="popup-buttons">
                {/* Show the "Giriş Yap" button if the user is not authorized */}
                {!auth && (
                  <a className="giris-yap-wrapper" href="/signIn">
                    <input
                      type="submit"
                      value="Giriş Yap"
                      className="popup-input-login"
                      onclick="togglePopup()"
                    />
                  </a>
                )}
                <input
                  type="submit"
                  value="Vazgeç"
                  className="popup-input"
                  onClick={handleClose}
                />
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }

export default TransitionsModal;