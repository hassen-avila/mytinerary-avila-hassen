import React from 'react';
import '../index.css';
import '../style/citiesPage.css'
import CardCity from '../component/CardCity.jsx';

import ResultNone from '../component/ResultNone';

import {useDispatch , useSelector} from 'react-redux';
import citiesActions from '../redux/action/cityAction'




export default function  CitiesCard() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };    
  
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(citiesActions.getCities())
  
  }, []);

  const citiesRedux = useSelector(store => store.citiesReducer.cities)
  let results = citiesRedux.filter(city =>city.name.toLowerCase().startsWith(searchTerm.trim().toLowerCase()));

  
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
    {results.length>0 ? <CardCity cityFilter={results}/> : <ResultNone/>}
    </div>
    </div>
  );
}