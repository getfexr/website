import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const financialData = [
  {
    title: 'Expanding the Global NFT Ecosystem: A Preview of Chain Expansion',
    desc: 'The goal of this new editor is to make adding rich content to WordPress simple…',
    id: 1,
    date: '5 Feb, 2022',
  },
  {
    title: 'OpenSea Acquires Gem to Invest in Pro Experience',
    desc: 'The goal of this new editor is to make adding rich content to WordPress simple…',
    id: 2,
    date: '5 Feb, 2022',
  },
  {
    title: '10 Marketing Trends That You Should Be Prepared for in 2022',
    desc: 'The goal of this new editor is to make adding rich content to WordPress simple…',
    id: 3,
    date: '5 Feb, 2022',
  },
  {
    title: '10 Marketing Trends That You Should Be Prepared for in 2022',
    desc: 'The goal of this new editor is to make adding rich content to WordPress simple…',
    id: 4,
    date: '5 Feb, 2022',
  },
];

function NewsCarousel() {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView="auto"
      loop
      breakpoints={{
        240: {
          slidesPerView: 1,
        },
        565: {
          slidesPerView: 2,
        },
        995: {
          slidesPerView: 3,
        },
      }}
      className=" card-slider-4-columns !py-12"
    >
      {financialData.map((item) => {
        const {
          id, title, desc, date,
        } = item;
        return (
          <SwiperSlide className="text-white overflow-visible" key={id}>
            <article className="rounded-2.5xl bg-white p-12 dark:bg-jacarta-700">
              <div className="mb-4 flex flex-wrap gap-4 text-2xs dark:text-jacarta-300">
                <div className="flex flex-wrap items-center space-x-2">
                  <span className="text-accent">
                    <a href="/single_post/post_1" className="uppercase">Finance</a>
                  </span>
                </div>
                <span>
                  <time className="text-stone-300">{date}</time>
                </span>
              </div>

              <h2 className="mb-5 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                <a href="/single_post/post_1" className="two-line-ellipsis">
                  {title}
                </a>
              </h2>
              <p className="mb-8 text text-jacarta-700 dark:text-jacarta-300">{desc}</p>
              <div className="overflow-hidden">
                <a href="/single_post/post_1" className="inline-block transition-transform will-change-transform hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-accent"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                  </svg>
                </a>
              </div>
            </article>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default NewsCarousel;
