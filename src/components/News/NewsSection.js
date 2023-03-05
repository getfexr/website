import React from 'react';
import NewsCarousel from './NewsCarousel';

function NewsSection() {
  return (
    <div>
      {/* <!-- Blog --> */}
      <section className="financial-section py-40">
        <div className="container">
          <div className="mx-auto mb-12 max-w-sm text-center">
            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
              True power of Web3 is in Self Custody
            </h2>
            <p className="text-lg dark:text-jacarta-300">
              Never linked to your personal life, Still only you can transfer or
              verify ownership of your assets.
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
