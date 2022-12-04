import * as React from 'react';
import {useState} from 'react';
import './card.css';
import HeartButton from "./HeartButton";

import Modal from './Pop';


const Card = ({ profile, auth }) => {
  // Use a state variable to track whether the modal should be displayed or not
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    // If the user is not authorized, show the modal
    console.log(showModal);
    if (!auth) {
      setShowModal(true);
    }

  }

  return (
    <div className='influencer-profile-card' onClick={handleClick}>

      {/* Show the modal if showModal is true */}
      {showModal && <Modal auth={auth} onClose={() => setShowModal(false)} />}

      <div>
        <HeartButton status={ false } />
      </div>

      <div className="profile_picture">
        <img src={profile.picture !== 'N/A' ? profile.picture : 'https://via.placeholder.com/400'} alt={profile.name} />
      </div>

      <div className="info">
        <h3>{profile.name}</h3>
        <h4>{profile.ID + " • " + profile.category}</h4>
      </div>

    </div>
  )
}

export default Card