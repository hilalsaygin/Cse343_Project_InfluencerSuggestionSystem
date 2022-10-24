import React, { useEffect } from 'react';
import Card from './Card';
import './brand.css';

const movie1 = {
  "title": "isim soyisim",
  "year": "2012",
  "ID": "@asdasdsa",
  "category": "travel",
  "poster": "N/A"
}

const Brand = () => {
  return (
    <div className='brand'>

      <div className="filters">  
        <form className="search-page-form" id="search-page-form" action="/search" method="GET">
          <input type="submit" value="Search" className="search-page-form__submit" />

          <hr className="solid" />
          <h3 className='category-header'>CATEGORIES</h3>

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
          <h3 className='category-header'>FOLLOWERS</h3>


          <div class="numeric-input-holder clearfix">
            <input type="text" class="numericInput js-manual-search-input" placeholder="min followers" name="followers_min" maxlength="11" data-section="followers" value=""/>
          </div>
          
        

          


        </form>
      </div>
      
      <div className='container'>
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
        <Card movie1={movie1} />
      </div>

    </div>  
  );
};

export default Brand