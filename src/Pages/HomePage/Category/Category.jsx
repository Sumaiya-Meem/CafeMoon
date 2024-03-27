import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../SharePage/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <section>
            <SectionTitle subHeading={"From 11:00am to 10:00pm"} heading={"order online"}></SectionTitle>
            <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <p className='uppercase text-4xl text-center -mt-20 text-white'>Salad</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <p className='uppercase text-4xl text-center -mt-20 text-white'>Pizza</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <p className='uppercase text-4xl text-center -mt-20 text-white'>Soup</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
            <p className='uppercase text-4xl text-center -mt-20 text-white'>Pasty</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
            <p className='uppercase text-4xl text-center -mt-20 text-white'>Salad</p>
        </SwiperSlide>
      </Swiper>
        </section>
    );
};

export default Category;