import React from 'react';
import NewsCarousel from './NewsCarousel';

function NewsSection() {
  return (
    <div>
      {/* <!-- Blog --> */}
      <section className="financial-section py-40">
        <div className="container">
          <div className="mx-auto mb-12 max-w-sm text-center">
            <h2 className="mb-6 text-center font-display text-3xl text-jacarta-700 dark:text-white">
              Reduce the risk of censorship, fraud, and third-party failures
            </h2>
            <p className="text-lg dark:text-jacarta-300">
              These articles underscore the growing recognition of self-custody
              as a key feature of the Web3 world, enabling greater individual
              control, security, and freedom in managing digital assets.
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
