import React from 'react';
import './index.css';
import Header from './components/NavBar';
import Title from './components/Title'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Cities from './pages/Cities';

export default function App(){

return(
  <div>
    <Header />
    <Title/>
    <Routes>
      <Route path='/index' element={<Index/>}/>
      <Route path='/' element={<Index/>}/>
      <Route path='/Cities' element={<Cities/>}/>
    </Routes>
    <Footer/>
  </div>
);
}