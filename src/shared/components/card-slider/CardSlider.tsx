import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './card-slider.scss';
import SlideCard from '../../../main/components/slide-card/SlideCard.tsx';

function CardSlider() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={16}
      loop={true}
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className='card-slider'
    >
      <SwiperSlide><SlideCard/></SwiperSlide>
      <SwiperSlide><SlideCard/></SwiperSlide>
      <SwiperSlide><SlideCard/></SwiperSlide>
      <SwiperSlide><SlideCard/></SwiperSlide>
      <SwiperSlide><SlideCard/></SwiperSlide>
      <SwiperSlide><SlideCard/></SwiperSlide>
      <SwiperSlide><SlideCard/></SwiperSlide>
      <SwiperSlide><SlideCard/></SwiperSlide>
      <SwiperSlide><SlideCard/></SwiperSlide>
    </Swiper>
  );
}

export default CardSlider;
