import React, { useEffect } from 'react';
import Card from './Card';
import AllowNumbers from './../../utils/AllowNumbers';

import './brand.css';

const profile1 = {
  "title": "isimsoyisim",
  "year": "2012",
  "ID": "@isimsoyisim",
  "category": "travel",
  "poster": "N/A"
}

/* const NumericOnly = (e) => {
  const reg = /^[0-9\b]+$/
  let preval=e.target.value
  if (e.target.value === '' || reg.test(e.target.value)) return true
  else e.target.value = preval.substring(0,(preval.length-1))
} */


const Brand = () => {
  return (
    <div className='brand'>

      <div className="filters">  
        <form className="search-page-form" id="search-page-form" action="/search" method="GET">
          <input type="submit" value="Ara" className="search-page-form__submit" />

          <hr className="solid" />
          <h3 className='category-header'>KATEGORİLER</h3>

          <ul className="search-page-form__categories">
            <li>
                <input type="checkbox" id="category-0" name="category[]" class="js-ml-checkbox region-input" value="category-0"/>
                <label for="category-0" class="category-label"> Category0</label>
            </li>

            <li>
                <input type="checkbox" id="category-1" name="category[]" class="js-ml-checkbox region-input" value="category-1"/>
                <label for="category-1" class="category-label"> Category1</label>
            </li>

            <li>
                <input type="checkbox" id="category-2" name="category[]" class="js-ml-checkbox region-input" value="category-2"/>
                <label for="category-2" class="category-label"> Category2</label>
            </li>

            <li>
                <input type="checkbox" id="category-3" name="category[]" class="js-ml-checkbox region-input" value="category-3"/>
                <label for="category-3" class="category-label"> Category3</label>
            </li>
          </ul>

          <hr className="solid" />
          <h3 className='category-header'>TAKİPÇİLER</h3>
        
{/*           <div class="numeric-input-holder">
            <input 
              type="text"
              placeholder="min takipçi sayısı" maxLength={6}
              onChange={NumericOnly}
            />
          </div>   */}
            
          <div>
            <AllowNumbers/>
          </div>

        </form>
      </div>
      
      <div className='container'>
        <Card profile={profile1} />
        <Card profile={profile1} />
        <Card profile={profile1} />
        <Card profile={profile1} />
        <Card profile={profile1} />
        <Card profile={profile1} />
        <Card profile={profile1} />
        <Card profile={profile1} />
        <Card profile={profile1} />
        <Card profile={profile1} />
        <Card profile={profile1} />

      </div>

    </div>  
  );
};

export default Brand