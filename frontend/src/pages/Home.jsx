import React from 'react';
import '../index.css';
import '../App.css'
import ButtonCity from '../component/ButtonCity'
import Carousel from '../component/Carousel'


export default function Home(){

return(
  <div className='background-home'>   
    <ButtonCity/>
    <Carousel/>  
  </div>
);
}