import React from 'react';
import './index.css';
import Header from './component/NavBar';
import Title from './component/Title'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CitiesCard from './pages/CitiesPage';
import ScrollToTop from "react-scroll-to-top";
import {useDispatch} from 'react-redux';
import citiesActions from './redux/action/cityAction'
import DetailsPage from './pages/DetailsPage';



export default function App(){
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(citiesActions.getCities())
  }, []);

return(
  <div>
    <Header />
    <Title/>
    <Routes>
      <Route path='/index' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/cities' element={<CitiesCard/>}/>
      <Route path='/city/:id' element={<DetailsPage/>} />
    </Routes>
    <ScrollToTop smooth color="#000" />
    <Footer/>
  </div>
);
} 