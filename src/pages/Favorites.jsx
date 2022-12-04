import React from 'react'
import { RiBodyScanFill } from 'react-icons/ri';
import { FavoritesContainer } from '../containers';
import { Navbar } from '../components';

import "./indexPages.css"
import "./favorites.css"

function Favorites() {
  return (
    <body>
        <div className='favorites'>
          <Navbar />
          <FavoritesContainer />    

          
          
        
        </div>   

    </body>
  )
}

export default Favorites