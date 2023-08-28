import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './card-slider.scss';
import SlideCard from '../slide-card/SlideCard.tsx';
import { Friend } from '../../../shared/interfaces/Friend.ts';

function CardSlider({ data }: { data: Friend[] | undefined }) {
  return (
    <section>
      <Swiper
        slidesPerView={2}
        breakpoints={{
          675: {
            slidesPerView: 3
          },
          900: {
            slidesPerView: 4
          }
        }}
        spaceBetween={16}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='card-slider'
      >
        {data?.map((friend, index) => (
          <SwiperSlide key={index}><SlideCard data={friend}/></SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default CardSlider;
