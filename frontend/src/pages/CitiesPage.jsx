import React from 'react';
import '../index.css';
import '../style/citiesPage.css'
import CardCity from '../component/CardCity.jsx';
import Cities from '../data.js'
import ResultNone from '../component/ResultNone';


export default function  CitiesCard() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    let results = Cities.filter(city =>
      city.name.toLowerCase().startsWith(searchTerm.trim().toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);
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
    {searchResults.length>0 ? <CardCity cityFilter={searchResults}/> : <ResultNone/>}
    </div>
    </div>
  );
}