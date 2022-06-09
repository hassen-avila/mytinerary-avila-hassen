import React from 'react';
import './index.css';
import Header from './component/NavBar';
import Title from './component/Title'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cities from './pages/Cities';
import ScrollToTop from "./component/ScrollToTop";

export default function App(){

return(
  <div>
    <Header />
    <Title/>
    <ScrollToTop>
    <Routes>
      <Route path='/index' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cities' element={<Cities/>}/>
    </Routes>
    </ScrollToTop>
    <Footer/>
  </div>
  
);
} 