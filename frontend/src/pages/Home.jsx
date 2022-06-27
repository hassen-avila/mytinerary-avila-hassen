import React from 'react';
import '../index.css';
import '../App.css'
import ButtonCity from '../component/ButtonCity'
import Carousel from '../component/Carousel'
import ScrollToTop from "react-scroll-to-top";
import Title from '../component/Title'
import Footer from '../component/Footer'

export default function Home(){

return(
  <div className='background-home'>  
    <Title/> 
    <ButtonCity/>
    <Carousel/>  
    <Footer/>
    <ScrollToTop smooth color="#000" />
  </div>
);
}