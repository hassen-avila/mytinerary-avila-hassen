import '../App.css';
import info from '../data.js'

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";



// import required modules
import { Grid, Pagination } from "swiper";

console.log(info)
function Main() {
  return (
    <div className="App">
    <>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {info.map(e=> <SwiperSlide>
          <img className='country cards' src={e.img} alt={e.name}/></SwiperSlide>)}
       
        </Swiper>
    </> 
    </div>
  );
}

export default Main;