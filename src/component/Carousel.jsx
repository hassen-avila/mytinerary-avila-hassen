import '../App.css';
import info from '../data.js'

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation"




// import required modules
import { Grid, Pagination, Autoplay, Navigation} from "swiper";

export default function Carousel() {
  return (
    <div className="App">
      <div className='text-carousel'><h4>Popular MyTinerary</h4></div>
    <>
      <Swiper 
        pagination={{
        clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        slidesPerGroup={2}
        slidesPerView={2}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        modules={[Grid, Pagination, Autoplay, Navigation]}
        className="mySwiper" 
      >
        {info.map(e=> <SwiperSlide className='conteiner-card' key={e.id}>
          <img className='country' src={e.img} alt={e.name}/>
          <div>{e.name}</div>

          </SwiperSlide>
          )}
       </Swiper>
    </> 
    </div>
  );
}

