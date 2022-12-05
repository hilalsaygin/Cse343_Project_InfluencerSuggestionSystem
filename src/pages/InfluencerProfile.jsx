import InfluencerProfileCard from "../components/influencerProfileCard/InfluencerProfileCard";
import './influencerProfile.css';

import Navbar from "./../components/navbar/Navbar";


const infCard1 = {
    "image": "N/A",
    "name": "isim soyisim",
    "username": "@kullaniciadi",
    "categories": "kategori1, kategori2, kategori3",
    "gonderi": "250",
    "takipci": "243,25K",
    "takip": "153",
    "point": "8,88",
    "media1": ["https://i.hizliresim.com/re0o9xa.png", "3900", "25"],
    "media2": ["https://i.hizliresim.com/q268orl.jpg", "1372", "67"],
    "media3": ["https://i.hizliresim.com/3293bft.jpg", "4871", "862"]
}
  


const InfluencerProfile = () => {
    return (
    <div>
            <Navbar/>
    
        <div className='infProf'>
            <InfluencerProfileCard infProfCard={ infCard1 } />
        </div>
    </div>
    );
  };
  
  export default InfluencerProfile