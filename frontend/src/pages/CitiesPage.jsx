import React from 'react';
import axios from 'axios'
import '../index.css';
import '../style/citiesPage.css'
import CardCity from '../component/CardCity.jsx';

import ResultNone from '../component/ResultNone';


export default function  CitiesCard() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    axios.get('http://localhost:4000/api/cities')
    .then(res=>(setSearchResults(res.data.response.cities)))
  
  }, []);
  let results = searchResults.filter(city =>
    city.name.toLowerCase().startsWith(searchTerm.trim().toLowerCase())
  ) ;

  
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