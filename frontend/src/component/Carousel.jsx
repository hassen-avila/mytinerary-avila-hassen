import '../style/carousel.css';
import '../App.css'
import axios from 'axios'
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
  const [searchResults, setSearchResults] = React.useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:4000/api/cities')
    .then(res=>(setSearchResults(res.data.response.cities)))
  
  }, []);

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
        {searchResults.map(city=> <SwiperSlide className='conteiner-card' key={city._id}>
          <img className='country' src={city.image} alt={city.name}/>
          <div>{city.name}</div>

          </SwiperSlide>
          )}
       </Swiper>
    </> 
    </div>
  );
}

