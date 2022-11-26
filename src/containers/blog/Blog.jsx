import React from 'react';
import './blog.css';
import InfluencerCard from './../../components/influencerCard/InfluencerCard';

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


const Blog = () => {
  return (
    <div className='favoritesContainer'>
      <InfluencerCard infCard={ infCard1 } />
      <InfluencerCard infCard={ infCard1 } />
      <InfluencerCard infCard={ infCard1 } />

    </div>
  )
}

export default Blog