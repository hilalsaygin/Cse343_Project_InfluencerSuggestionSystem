import React from "react";
import './card.css';

const Card = ({ profile }) => {
  return (
    <div className='movie'>

      <div className="profile_picture">
        <img src={profile.poster !== 'N/A' ? profile.poster : 'https://via.placeholder.com/400'} alt={profile.title} />
      </div>

      <div className="info">
        <h3>{profile.title}</h3>
        <h4>{profile.ID + " • " + profile.category}</h4>
      </div>

    </div>
  )
}

export default Card