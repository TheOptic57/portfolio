
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "../css/UnityImage.css"

import { Navigation, Pagination, Keyboard } from 'swiper/modules';

import Unitygame1 from "../images/UnityGame1.png"
import Unitygame2 from "../images/UnityGame2.png"
import Unitygame3 from "../images/UnityGame3.png"
import Unitygame4 from "../images/UnityGame4.png"
import Unitygame5 from "../images/UnityGame5.png"

function UnityImages() {
 
    return (
      <div className="UnityImages">
       <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide> <img src ={Unitygame1} alt = "Game play of Determination"></img></SwiperSlide>
        <SwiperSlide><img src ={Unitygame2} alt = "Game play of Determination"></img></SwiperSlide>
        <SwiperSlide><img src ={Unitygame3} alt = "Game play of Determination"></img></SwiperSlide>
        <SwiperSlide><img src ={Unitygame4} alt = "Game play of Determination"></img></SwiperSlide>
        <SwiperSlide><img src ={Unitygame5} alt = "Game play of Determination"></img></SwiperSlide>
      </Swiper>
      </div>
    );
  }
  
  export default UnityImages;
  