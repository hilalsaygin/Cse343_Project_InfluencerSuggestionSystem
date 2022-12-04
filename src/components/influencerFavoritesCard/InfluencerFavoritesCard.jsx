import React from 'react';
import './influencerFavoritesCard.css';

import HeartButton from "./../../components/brand/HeartButton";

const InfluencerCard = ({ infCard }) => {
  return (
    <div className='infCard'>

      <div className='infCard-picture-frame'>
        <div className='infCard-picture'>
          <img src={infCard.image !== 'N/A' ? infCard.image : 'https://via.placeholder.com/400'} alt={infCard.image} />
        </div>
      </div>

      <div className='infCard-text-info' >
        <div className='infCard-name'>
          <h3>{infCard.name}</h3>
        </div>
        <div className='infCard-username'>
          <h4>{infCard.username}</h4>
        </div>
        <div className='infCard-categories'>
          <h4>{infCard.categories}</h4>
        </div>
      </div>

      <div className='infCard-numeric-info'>
        <div className='infCard-gtt'>
          <div className='infCard-gtt-gonderi'>
            <h4>Gonderi</h4>
            <h3>{infCard.gonderi}</h3>
          </div>

          <div className='infCard-gtt-takipci'>
            <h4>Takipçi</h4>
            <h3>{infCard.takipci}</h3>
          </div>

          <div className='infCard-gtt-takip'>
            <h4>Takip</h4>
            <h3>{infCard.takip}</h3>
          </div>
        </div>

        <div className='infCard-point-and-heart-button'>
          <div className='infCard-point'>
            <h2>{infCard.point}</h2>
          </div>
          <div className='infCard-heart-button'>
            <HeartButton status={ true } />
          </div>
        </div>
      </div>




    </div>
  )
}

export default InfluencerCard