import React from 'react';
import './index.css';
import Header from './component/NavBar';


import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CitiesCard from './pages/CitiesPage';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import citiesActions from './redux/action/cityAction'
import DetailsPage from './pages/DetailsPage';
import LogPage from './pages/LogPage';
import SingInPage from './pages/SingInPage';
import userActions from '../src/redux/action/userAction'


export default function App(){

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(citiesActions.getCities())
    if(localStorage.getItem('token')!== null) {
      const token = localStorage.getItem("token")
      dispatch(userActions.verifyToken(token))
  }
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
      <Route path='/SingInPage' element={<SingInPage/>}/>
    </Routes>
    
  </div>
);
} 