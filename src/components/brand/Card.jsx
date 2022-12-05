import * as React from 'react';
import { useState, useEffect } from 'react';
import './card.css';
import HeartButton from "./HeartButton";
import { Link } from "react-router-dom";


import Modal from './Pop';











export default function RecordList() {
  const [records, setRecords] = useState([]);
  
  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const records = await response.json();
      setRecords(records);
    }
  
    getRecords();
  
    return;
  }, [records.length]);
  
  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    });
  
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }
  
  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        < Card
          profile={record} auth={false}
        />
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

      <div>
        <HeartButton status={ false } />
      </div>

      <div className="profile_picture">
        <img src={profile.profile_picture_url !== 'N/A' ? profile.profile_picture_url : 'https://via.placeholder.com/400'} alt={profile.name} />
      </div>

      <div className="info">
        <h3>{profile.name}</h3>
        <h4>{profile.name}</h4>
        {/* <h4>{profile.name + " • " + profile.category}</h4> */}
      </div>

    </div>
  )
}

// export default Card