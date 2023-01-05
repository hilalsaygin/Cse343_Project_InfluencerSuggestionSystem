import React from 'react';
import './influencerProfileCard.css';

import likeIcon from '../../assets/like.png'; 
import commentIcon from '../../assets/comment.png'; 

import HeartButton from "./../../components/brand/HeartButton";

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

import { InstagramEmbed } from 'react-social-media-embed';

function GetInfluencerProfileCard() {
    const [records, setRecords] = useState([]);
    
    // This method fetches the records from the database.
    useEffect(() => {
      async function getRecords() {
        const response = await fetch(`http://localhost:3001/api/users/popular`);
    
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
    }, [records.length]);
    
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



const InfluencerProfileCard = () => {
    const location = useLocation();
    console.log("Location", location);
    const infProfCard = location.state.record;
    return (
        <div className="infProfCard-container">
            <div className='infProfCard-info'>

                <div className='infProfCard'>

                    <div className='infProfCard-heart-button'>
                        <HeartButton/>
                    </div>

                    <div className='infProfCard-picture-frame'>

                        <div className='infProfCard-picture'>
                            <img
                                src={infProfCard.profile_picture_url !== 'N/A'
                                ? infProfCard.profile_picture_url
                                : 'https://via.placeholder.com/400'}
                                alt={infProfCard.profile_picture_url}/>
                        </div>
                    </div>

                    <div className='infProfCard-text-info'>
                        <div className='infProfCard-name'>
                            <h3>{infProfCard.name}</h3>
                        </div>
                        <div className='infProfCard-username'>
                            <h4>{"@" + infProfCard.username}</h4>
                        </div>
                        <div className='infProfCard-categories'>
                            <h4>{infProfCard.categories}</h4>
                        </div>
                    </div>

                    <div className='infProfCard-numeric-info'>
                        <div className='infProfCard-gtt'>
                            <div className='infProfCard-gtt-gonderi'>
                                <h4>Gonderi</h4>
                                <h3>{infProfCard.media_count}</h3>
                            </div>

                            <div className='infProfCard-gtt-takipci'>
                                <h4>Takipçi</h4>
                                <h3>{infProfCard.followers_count}</h3>
                            </div>

                            <div className='infProfCard-gtt-takip'>
                                <h4>Takip</h4>
                                <h3>{infProfCard.takip}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='infProfCard-point'>
                    <h1>{infProfCard.IGI}</h1>
                    <h4>/10</h4>
                </div>

            </div>

            {/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_overlay_opacity */}

            <div className='topMedia-container'>
                <TopMedia image={infProfCard.top_media[0].permalink} like={infProfCard.top_media[0].like_count} comment={infProfCard.top_media[0].comments_count} />
                <TopMedia image={infProfCard.top_media[1].permalink} like={infProfCard.top_media[1].like_count} comment={infProfCard.top_media[1].comments_count} />
                <TopMedia image={infProfCard.top_media[2].permalink} like={infProfCard.top_media[2].like_count} comment={infProfCard.top_media[2].comments_count} />

            </div> 

            </div>
    )
}


const TopMedia = ({ image, like, comment }) => {
    return (
        <div className='pa-post-item'>
        <div className="pa-post-item-inner">
            
                
                <div className='icons-like-and-comment'>
                    
                    <div className='likes'>
                        <img className='heartIcon'
                            alt=' '
                            data-src={likeIcon}
                            src={likeIcon}/>
                
                        <h4 className='likes-num'>{ like }</h4>
                    </div>
                
                    <div className='comments'>
                        <img className='commentIcon'
                            alt=' '
                            data-src={commentIcon}
                            src={commentIcon} />
                    
                        <h4 className='comments-num'>{ comment }</h4>
                    </div>

                </div>

                {/* https://www.npmjs.com/package/react-instagram-embed?activeTab=readme */}
            
        
            <div className='media-from-instagram'>
                <img className="b-lazy"
                    alt=' '            
                    data-src={image}
                    loading="lazy"
                    data-ll-status="loaded"
                    src={image}>
                </img>
            </div>

        </div>
    </div>
    );
}

export default InfluencerProfileCard




{/*                                 <div class="pa-post-actions">
                                <div class="pa-post-action">
                                <i class="icon-comment-filled pa-post-action-icon"></i> 117
                            </div>
                            <div class="pa-post-action">
                                <i class="icon-like-filled pa-post-action-icon"></i> 13 708
                            </div>
                            <a href="https://www.instagram.com/p/CZYqJTrKQh9/" target="_blank" rel="nofollow">
                                <i class="icon-go"></i> More
                            </a> 
                            </div> */} 