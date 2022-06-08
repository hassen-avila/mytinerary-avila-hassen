import React from 'react';
import './index.css';
import Header from './components/navbar';
import Title from './components/title'
import Slogan from './components/slogan'
import ButtonC from './components/buttonCity'
import Main from './components/main'
import Footer from './components/footer'

export default function App(){

return(
  <div>
    <Header />
    <Title/>
    <Slogan/>
    <ButtonC/>
    <Main/>
    <Footer/>
  </div>
);
}