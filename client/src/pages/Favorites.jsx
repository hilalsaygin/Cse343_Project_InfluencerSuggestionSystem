import React from 'react'
import { InfluencerFavoritesCard } from '../components';
import GetInfluencerByID from './GetInfluencerByID';
import { Link } from "react-router-dom";

import "./indexPages.css"
import "./favorites.css"

const infCard1 = {
  "image": "N/A",
  "name": "isim soyisim",
  "username": "@kullanciadi",
  "categories": "kategori1, kategori2, kategori3",
  "gonderi": "250",
  "takipci": "243,25K",
  "takip": "153",
  "point": "8,11"
}
/* 
const favoritesList = ["cagritaner", "acunilicali", "neslihanatagul"]; 
const listfav = [];


async function ListFavorites() {

  let array = new Array;
  var fetches = [];

  for (let i = 0; i < favoritesList.length; i++) {
    console.log(favoritesList[i]);

    let uname = favoritesList[i];

    fetches.push(
      fetch(`http://localhost:3001/api/users/${uname}`)
      .then(res => {return res.text(); })
      .then(res => {
            array.push(res);
            console.log(res);
          }
      )
    );
  }

  Promise.all(fetches).then(function() {
    console.log(array.length);
    return (
      <InfluencerFavoritesCard infCard={fetches.data.tour} />
  );
  });

}
 */


/* function ListFavorites() {
  GetInfluencerByID();
  console.log(listfav);

  async function GetInfluencerByID() {
    for (let i = 0; i < favoritesList.length; i++) {
      const uname = favoritesList[i];
      console.log("GETID: " + uname);
      const response = await fetch(`http://localhost:3001/api/users/${uname}`);    
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const record = await response.json();
      console.log(record.data.tour.username + " ben burdayim");
      listfav.push(record.data.tour);
      console.log("asdas listfav[0]:" + listfav[0].username);
    }
  }

  function recordList() {
  console.log(listfav);

    return listfav.map((record) => {
      return (
          <InfluencerFavoritesCard infCard={record.data.tour} />
      );
    });
  }
    
  return (
      <>
        {recordList()}
      </>
  ); 
}
 */

function Favorites() {
  return (
    
    <div className='favoritesMain'>

      <div className='favoritesTitle-div'>
        <h3 className="favoritesTitle">FAVORİLER</h3>
      </div>

      <div className='favoritesContainer-wrapper'>
        <div className='favoritesContainer'>
{/*           <>
            <ListFavorites/>
          </> */}

        </div>  
      </div>

      <div className='favoritesFooter'></div>
      
    </div> 

  );
}

export default Favorites