import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

import 'swiper/css';
import 'swiper/css/navigation';

const browseCategoryData = [
  {
    id: '0Virtual Worlds',
    image: '/img/partner-categories/cat_1.png',
    title: 'Virtual Worlds',
    href: '#',
    bgColor: 'rgb(70 199 227)',
  },
  {
    id: '1Sport',
    image: '/img/partner-categories/cat_1.png',
    title: 'Sport',
    href: '#',
    bgColor: 'rgb(115 126 242)',
  },
  {
    id: '0Virtual Worlds',
    image: '/img/partner-categories/cat_1.png',
    title: 'Virtual Worlds',
    href: '#',
    bgColor: 'rgb(70 199 227)',
  },
  {
    id: '1Sport',
    image: '/img/partner-categories/cat_1.png',
    title: 'Sport',
    href: '#',
    bgColor: 'rgb(115 126 242)',
  },
  {
    id: '0Virtual Worlds',
    image: '/img/partner-categories/cat_1.png',
    title: 'Virtual Worlds',
    href: '#',
    bgColor: 'rgb(70 199 227)',
  },
  {
    id: '1Sport',
    image: '/img/partner-categories/cat_1.png',
    title: 'Sport',
    href: '#',
    bgColor: 'rgb(115 126 242)',
  },
];

function SwipeComponent() {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <div className="overflow-hidden">
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        loop
        breakpoints={{
          // when window width is >= 640px
          100: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          700: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
        }}
        className=" card-slider-4-columns !py-5"
        style={{ transform: 'scaleX(1.2)' }}
      >
        {browseCategoryData.map((item) => {
          const {
            id, image, title, bgColor,
          } = item;
          return (
            <SwiperSlide key={id}>
              <article>
                <span
                  className="cursor-pointer dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg"
                >
                  <figure
                    style={{ backgroundColor: bgColor }}
                    className="w-full rounded-[0.625rem] m-0"
                  >
                    <img src={withBaseUrl(image)} alt="item 1" className="w-full" />
                  </figure>
                  <div className="mt-4 text-center">
                    <span className="font-display text-jacarta-700 text-lg dark:text-white">
                      {title}
                    </span>
                  </div>
                </span>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SwipeComponent;
