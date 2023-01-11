import React from 'react';
import NewsCarousel from './NewsCarousel';

function NewsSection() {
  return (
    <div>
      {/* <!-- Blog --> */}
      <section className="financial-section bg-light-base py-40 dark:bg-jacarta-900 ">
        <div className="container">
          <div className="mx-auto mb-12 max-w-sm text-center">
            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
              Financial News
            </h2>
            <p className="text-lg dark:text-jacarta-300">
              Here are the best features that makes Xhibiter the most powerful, and fast.
            </p>
          </div>

          {/* <!-- Slider --> */}
          <NewsCarousel />
        </div>
      </section>
      {/* <!-- end blog --> */}
    </div>
  );
}

export default NewsSection;
