import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/navbar';
import Title from './components/title'
import Slogan from './components/slogan'
import Main from './components/main'
import Footer from './components/footer'

export default function App(){
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Title/>
    <Slogan/>
    <Main/>
    <Footer/>
  </React.StrictMode>
);
}