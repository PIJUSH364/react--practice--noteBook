import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "./swiperSlide.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
SwiperCore.use([Autoplay]);
function SwiperTwo() {
  return (
    <div>
      <h2>SwiperTwo</h2>
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1465408522361-a6f502298219?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
              alt="swiper--img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1475709824706-b8c67735f363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80"
              alt="swiper--img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://media.istockphoto.com/photos/close-up-of-red-plant-picture-id1408251782?k=20&m=1408251782&s=170667a&w=0&h=-bIs8Jd11V5Woi1pIe7F2giWyl0f4Xa1gclamB0Ngao="
              alt="swiper--img"
            />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1475548696334-18707e714404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=948&q=80"
              alt="swiper--img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1477089884677-c596568bd120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="swiper--img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80"
              alt="swiper--img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1477089922324-c1deaf4a2242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="swiper--img"
            />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}

export default SwiperTwo;
