import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function SwiperOne() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1563387067195-1dc016a3840a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="swiper--img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"
          alt="swiper--img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1593746077986-161810a15dff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="swiper--img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://media.istockphoto.com/photos/close-up-of-red-plant-picture-id1408251782?k=20&m=1408251782&s=170667a&w=0&h=-bIs8Jd11V5Woi1pIe7F2giWyl0f4Xa1gclamB0Ngao="
          alt="swiper--img"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperOne;
