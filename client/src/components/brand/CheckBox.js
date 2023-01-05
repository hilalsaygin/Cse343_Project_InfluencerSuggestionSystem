import React, {useState} from 'react';
import { Checkbox } from 'antd';
import './brand.css';


const categories = [
    {
        "_id": 0,
        "name": "Teknoloji"
    }, {
        "_id": 1,
        "name": "Moda"
    }, {
        "_id": 2,
        "name": "Spor"
    }, {
        "_id": 3,
        "name": "Kozmetik"
    }, {
        "_id": 4,
        "name": "Seyehat"
    }, {
        "_id": 5,
        "name": "Emlak"
    }, {
        "_id": 6,
        "name": "Sanat"
    }, {
        "_id": 7,
        "name": "Aksesuar"
    }, {
        "_id": 8,
        "name": "Restorant"
    }, {
        "_id": 9,
        "name": "Kişisel"
    }, {
        "_id": 10,
        "name": "Blog"
    }, {
        "_id": 11,
        "name": "Pazarlama"
    }, {
        "_id": 12,
        "name": "Eğlence"
    }
];

export default function CheckBox(props) {

    const [Checked, setChecked] = useState([]);

    const handleToggle = (value) => {
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];
  
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
  
        setChecked(newChecked);
        console.log("newchecked: " + newChecked);


        props.handleFilters(newChecked);
    }
  
    const renderCheckboxLists = () => categories.map((value, index) => (
        
        <div className='search-page-form__categories'>
            <React.Fragment key={index}>
                <Checkbox
                    onChange={() => handleToggle(value._id)}
                    type="checkbox"
                    checked={Checked.indexOf(value._id) === -1 ? false : true}   
                />
                <label>{value.name}</label>
            </React.Fragment>
        </div>
      ))
      
      return (
        <>
            {renderCheckboxLists()}
        </>
  
    );
  }
  