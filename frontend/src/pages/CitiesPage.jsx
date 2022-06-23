import React from 'react';
import '../index.css';
import '../style/citiesPage.css';
import CardCity from '../component/CardCity.jsx';

import ResultNone from '../component/ResultNone';
import {useDispatch , useSelector} from 'react-redux';
import citiesActions from '../redux/action/cityAction';





export default function  CitiesCard() {

  

  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };    
  
  const dispatch = useDispatch()

 

  React.useEffect(()=>{
    dispatch(citiesActions.filterCities(searchTerm))
  },[searchTerm])

 
  const citiesFilter= useSelector(store => store.citiesReducer.filterCity)
  
  return (
    <div className='conteiner-cardsText'>
      <div className='input-text'>
        <input
        type="text"
        placeholder="Search for a city..."
        value={searchTerm}
        onChange={handleChange}
        className="input-search"
      />
    </div>
    <div>
    { citiesFilter.length>0 ? <CardCity cityFilter={citiesFilter}/> : <ResultNone/>}
    </div>
    </div>
  );
}