import React from 'react';
import './index.css';
import Header from './components/navbar';
import Title from './components/title'
import Footer from './components/footer'
import { Route, Routes } from 'react-router-dom';
import Index from './pages/index';
import Cities from './pages/cities';

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