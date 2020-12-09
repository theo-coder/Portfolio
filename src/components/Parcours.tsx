import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Parcours: React.FC = () => {
    return (
        <div id="competences">
            <h1>Compétences</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                pagination={{ clickable: true }}
            >
                <SwiperSlide><img src="./images/html.png" alt="html" /></SwiperSlide>
                <SwiperSlide><img src="./images/css.png" alt="css" /></SwiperSlide>
                <SwiperSlide><img src="./images/js.png" alt="js" /></SwiperSlide>
                <SwiperSlide><img src="./images/nodejs.png" alt="nodejs" /></SwiperSlide>
                <SwiperSlide><img src="./images/linux.png" alt="linux" /></SwiperSlide>
                <SwiperSlide><img src="./images/win10.png" alt="win10" /></SwiperSlide>
                <SwiperSlide><img src="./images/php.png" alt="php" /></SwiperSlide>
                <SwiperSlide><img src="./images/mysql.png" alt="mysql" /></SwiperSlide>
                <SwiperSlide><img src="./images/java.png" alt="java" /></SwiperSlide>
                <SwiperSlide><img src="./images/csharp.png" alt="csharp" /></SwiperSlide>
                <SwiperSlide><img src="./images/python.png" alt="python" /></SwiperSlide>
                <SwiperSlide><img src="./images/sass.png" alt="sass" /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Parcours;
