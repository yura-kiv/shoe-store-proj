import React, { useState } from "react";
import styles from "./ProductSlider.module.scss";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductSlider = ({ imgsList }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        loop={true}
        grabCursor={true}
        navigation={{
          nextEl: `.${styles.navNextBtn}`,
          prevEl: `.${styles.navPrevBtn}`,
        }}
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet ${styles.paginationBullet}`,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Navigation, Pagination, FreeMode, Thumbs]}
        className={styles.productsMainSlider}
        onSlideChange={() => console.log("slide change")}
      >
        {imgsList.map((img) => {
          return (
            <SwiperSlide
              key={img}
              className={styles.productMainSlide}
            >
              <img src={`http://localhost:3000/img/${img}`}></img>
            </SwiperSlide>
          );
        })}
        <div className={styles.navNextBtn}>
          <Arrow />
        </div>
        <div className={styles.navPrevBtn}>
          <Arrow />
        </div>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.productsSecondSlider}
      >
        {imgsList.map((img) => {
          return (
            <SwiperSlide key={img}>
              <div className={styles.imgThumbWrapper}>
                <img src={`http://localhost:3000/img/${img}`}></img>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProductSlider;
