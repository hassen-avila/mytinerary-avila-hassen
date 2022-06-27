import React from 'react';
import './index.css';
import Header from './component/NavBar';


import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CitiesCard from './pages/CitiesPage';

import {useDispatch} from 'react-redux';
import citiesActions from './redux/action/cityAction'
import DetailsPage from './pages/DetailsPage';
import LogPage from './pages/LogPage';



export default function App(){
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(citiesActions.getCities())
  }, []);

return(
  <div>
    <Header/>
    <Routes>
      <Route path='/index' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/cities' element={<CitiesCard/>}/>
      <Route path='/city/:id' element={<DetailsPage/>} /> 
      <Route path='/LogPage' element={<LogPage/>}/>
    </Routes>
    
  </div>
);
} 