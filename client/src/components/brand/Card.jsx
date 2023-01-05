import * as React from 'react';
import { useState, useEffect } from 'react';
import './card.css';
import HeartButton from "./HeartButton";
import { Link } from "react-router-dom";

import Modal from './Pop';

const categories = ["teknoloji", "moda", "spor", "kozmetik", "seyehat", "emlak", "sanat", "aksesuar", "restorant", "kişisel", "blog", "pazarlama", "eğlence"];

export default function RecordList({ filters }) {
  const [records, setRecords] = useState([]);

  console.log("incard: " + filters);
  console.log("incardlength: " + filters.length);

  
  // This method fetches the records from the database.
  useEffect(() => {
    

    async function getRecords() {
      let response = false;
      
      if (filters.length === 0)  {
        response = await fetch(`http://localhost:3001/api/users/popular`);
        console.log("http://localhost:3001/api/users/popular");
      }
      else {
        let apiString = "http://localhost:3001/api/users/categories?categories=";
        for (let i = 0; i < filters.length; i++) {
          console.log("filters i: " + filters[i]);
          apiString += categories[filters[i]] + ",";
        }
        
        response = await fetch(apiString);
        console.log(apiString);
      }
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const records = await response.json();
      setRecords(records.data.tours);
    }
  
    getRecords();
  
    return;
  }, [filters]);
  
/*   // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    });
  
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  } */
  
  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Link to={`/influencerProfile/${record.username}`} state={{ record }} style={{ textDecoration: 'none' }}>
          <Card profile={record} auth={false} />
        </Link>
          
      );
    });
  }

  return (
    <>
      {recordList()}
    </>
  );
}


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

      
      <div className='card-upper-side'>
      
        <Link to={`/`} style={{ textDecoration: 'none' }}>
          <div className='heartButton'>
            <HeartButton status={ false } />
          </div>
        </Link>

          <div className="profile_picture"> {/*profile.profile_picture_url*/} 
            {/* <img src={profile.profile_picture_url !== 'N/A' ? profile.profile_picture_url : 'https://via.placeholder.com/400'} referrerpolicy="no-referrer" alt={profile.name}/> */}
          </div>
        </div>

      <div className='card-lower-side'>
        <div className="info-name">
          <h3>{profile.username}</h3>
          
          {/* <h4>{profile.name + " • " + profile.category}</h4> */}
      </div>
      
      <div className='info-username'>
          {profile.category.map(c => (
            <h4>{c}</h4>
          ))}
      </div>


      </div>

      <div className='influencerPoint'>
        <h1>{profile.IGI}</h1>
        </div>
      
    </div>
  )
}

// export default Card