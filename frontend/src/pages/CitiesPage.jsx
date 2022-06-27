import React from 'react';
import '../index.css';
import '../style/citiesPage.css';
import CardCity from '../component/CardCity.jsx';
import ScrollToTop from "react-scroll-to-top";
import ResultNone from '../component/ResultNone';
import {useDispatch , useSelector} from 'react-redux';
import citiesActions from '../redux/action/cityAction';
import Title from '../component/Title'
import Footer from '../component/Footer'




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
  <>
    <Title/>
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
    
    <ScrollToTop smooth color="#000" />
    </div>
    <Footer/>
    </>
  );
}