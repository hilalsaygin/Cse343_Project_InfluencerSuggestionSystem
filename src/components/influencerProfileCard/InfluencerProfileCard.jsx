import React from 'react';
import './influencerProfileCard.css';

import likeIcon from '../../assets/like.png'; 
import commentIcon from '../../assets/comment.png'; 

import HeartButton from "./../../components/brand/HeartButton";

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

const InfluencerProfileCard = ({infProfCard}) => {
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
                                src={infProfCard.image !== 'N/A'
                                ? infProfCard.image
                                : 'https://via.placeholder.com/400'}
                                alt={infProfCard.image}/>
                        </div>
                    </div>

                    <div className='infProfCard-text-info'>
                        <div className='infProfCard-name'>
                            <h3>{infProfCard.name}</h3>
                        </div>
                        <div className='infProfCard-username'>
                            <h4>{infProfCard.username}</h4>
                        </div>
                        <div className='infProfCard-categories'>
                            <h4>{infProfCard.categories}</h4>
                        </div>
                    </div>

                    <div className='infProfCard-numeric-info'>
                        <div className='infProfCard-gtt'>
                            <div className='infProfCard-gtt-gonderi'>
                                <h4>Gonderi</h4>
                                <h3>{infProfCard.gonderi}</h3>
                            </div>

                            <div className='infProfCard-gtt-takipci'>
                                <h4>Takipçi</h4>
                                <h3>{infProfCard.takipci}</h3>
                            </div>

                            <div className='infProfCard-gtt-takip'>
                                <h4>Takip</h4>
                                <h3>{infProfCard.takip}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='infProfCard-point'>
                    <h1>{infProfCard.point}</h1>
                    <h4>/10</h4>
                </div>

            </div>

            {/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_overlay_opacity */}

            <div className='topMedia-container'>
                <TopMedia image={infProfCard.media1[0]} like={infProfCard.media1[1]} comment={infProfCard.media1[2]} />
                <TopMedia image={infProfCard.media2[0]} like={infProfCard.media2[1]} comment={infProfCard.media2[2]} />
                <TopMedia image={ infProfCard.media3[0] } like={ infProfCard.media3[1] } comment={ infProfCard.media3[2] } />
            </div>

            </div>
    )
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