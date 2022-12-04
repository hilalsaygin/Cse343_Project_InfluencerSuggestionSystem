import React from 'react';
import './favoritesContainer.css';
import InfluencerFavoritesCard from '../../components/influencerFavoritesCard/InfluencerFavoritesCard';

const infCard1 = {
  "image": "N/A",
  "name": "sadasd",
  "username": "@ewqeq2",
  "categories": "asdasd, asdasd, sadas",
  "gonderi": "250",
  "takipci": "243,25K",
  "takip": "153",
  "point": "8,11"
}


const FavoritesContainer = () => {
  return (
    <div className='favoritesContainer'>
      <InfluencerFavoritesCard infCard={ infCard1 } />
      <InfluencerFavoritesCard infCard={ infCard1 } />
      <InfluencerFavoritesCard infCard={ infCard1 } />

    </div>
  )
}

export default FavoritesContainer