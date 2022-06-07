import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/navbar';
import Main from './components/main'
import Footer from './components/footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main/>
    <Footer/>
  </React.StrictMode>
);
export default App;