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
    id: '2Photography',
    image: '/img/partner-categories/cat_1.png',
    title: 'Photography',
    href: '#',
    bgColor: 'rgb(66 138 248)',
  },
  {
    id: '3Music',
    image: '/img/partner-categories/cat_1.png',
    title: 'Music',
    href: '#',
    bgColor: 'rgb(243 91 199)',
  },
  {
    id: '4Art',
    image: '/img/partner-categories/cat_1.png',
    title: 'Art',
    href: '#',
    bgColor: 'rgb(16 185 129)',
  },
  {
    id: '5Collectibles',
    image: '/img/partner-categories/cat_1.png',
    title: 'Collectibles',
    href: '#',
    bgColor: 'rgb(254 178 64)',
  },
  {
    id: '6Domain Names',
    image: '/img/partner-categories/cat_1.png',
    title: 'Domain Names',
    href: '#',
    bgColor: 'rgb(131 88 255)',
  },
  {
    id: '7Virtual Worlds',
    image: '/img/partner-categories/cat_1.png',
    title: 'Virtual Worlds',
    href: '#',
    bgColor: 'rgb(70 199 227)',
  },
  {
    id: '8Sport',
    image: '/img/partner-categories/cat_1.png',
    title: 'Sport',
    href: '#',
    bgColor: '#737EF2',
  },
  {
    id: '9Photography',
    image: '/img/partner-categories/cat_1.png',
    title: 'Photography',
    href: '#',
    bgColor: 'rgb(66 138 248)',
  },
  {
    id: '10Music',
    image: '/img/partner-categories/cat_1.png',
    title: 'Music',
    href: '#',
    bgColor: '#F35BC7',
  },
  {
    id: '11Art',
    image: '/img/partner-categories/cat_1.png',
    title: 'Art',
    href: '#',
    bgColor: 'rgb(16 185 129)',
  },
  {
    id: '12Virtual Worlds',
    image: '/img/partner-categories/cat_1.png',
    title: 'Virtual Worlds',
    href: '#',
    bgColor: '#46C7E3',
  },
  {
    id: '13Domain Names',
    image: '/img/partner-categories/cat_1.png',
    title: 'Domain Names',
    href: '#',
    bgColor: 'rgb(131 88 255)',
  },

  {
    id: '14Collectibles',
    image: '/img/partner-categories/cat_1.png',
    title: 'Collectibles',
    href: '#',
    bgColor: 'rgb(254 178 64)',
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
                  className="cursor-pointer dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
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
