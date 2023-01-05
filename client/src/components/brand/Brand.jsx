import RecordList from './Card';
import {useState} from 'react';

import Modal from './Pop';

import CheckBox from './CheckBox'

/* const NumericOnly = (e) => {
  const reg = /^[0-9\b]+$/
  let preval=e.target.value
  if (e.target.value === '' || reg.test(e.target.value)) return true
  else e.target.value = preval.substring(0,(preval.length-1))
} */

const auth = false;

/* function Popup() {

  function togglePopup() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
  }

  return (
    <div className="popup-container" id='blur'>
        <h1>Profil detaylarını görebilmek için lütfen giriş yapınız.</h1 >
        <div className='popup-buttons'>
        <button type="submit" value="Giriş Yap" className="popup-input" onclick="togglePopup()" />
        <button type="submit" onClick={togglePopup} value="Vazgeç" className="popup-input" />

      </div>
    </div>
  );
} */

const Brand = () => {
    const [Filters,
        setFilters] = useState([]);

    const handleFilters = (filters, category) => {
        console.log("filtersbrand: " + filters);
        const newFilters = [...filters];
        setFilters(newFilters);
        console.log("Filters: " + newFilters);

    }

    return (
        <div className='brand'>
            <div className="filters">

                <h3 className='category-header'>KATEGORİLER</h3>

                <CheckBox handleFilters={filters => handleFilters(filters, "categories")}/>

            </div>

            <div className='container'>
                {/*         <Card profile={profile1} auth={auth} />*/}
                <RecordList filters={Filters}/>

            </div>

        </div>
    );
};

export default Brand