import React, { useRef, useState } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from '@mui/material/useMediaQuery';
import "./carousel.css";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, useTheme } from "@mui/material";
import SlideAImg from '../../assets/images/pexels-motional-studio-1081685-1440p.jpg';
import SlideA from "./SlideA";
import SlideB from "./SlideB";

const Carousel = () => {

  return (
    <Box sx={{
      height: 'fit-content'
    }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideA />
        </SwiperSlide>
        <SwiperSlide>
          <SlideB />
        </SwiperSlide>
        <SwiperSlide><span style={{ color: 'black'}}>Slide 3</span></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Carousel;
