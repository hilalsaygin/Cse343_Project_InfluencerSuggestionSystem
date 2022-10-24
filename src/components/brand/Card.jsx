import React from "react";
import './card.css';

const Card = ({ movie1 }) => {
  return (
    <div className='movie'>

      <div className="profile_picture">
        <img src={movie1.poster !== 'N/A' ? movie1.poster : 'https://via.placeholder.com/400'} alt={movie1.title} />
      </div>

      <div className="info">
        <h3>{movie1.title}</h3>
        <h4>{movie1.ID + " • " + movie1.category}</h4>
      </div>

    </div>
  )
}

export default Card