import React from 'react';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

function FullScreenStatistics() {
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <div>
      {/* <!-- Statistic / Promo --> */}
      <section className="relative py-12 lg:py-36">
        <picture className="pointer-events-none absolute inset-0 -z-10 after:absolute after:bottom-0 after:h-1/3 after:w-full after:bg-gradient-to-t after:from-[#010107]">
          <img
            src={withBaseUrl('/img/gradient_creative.jpg')}
            alt="gradient"
            className="h-full w-full -scale-y-100"
          />
        </picture>
        <div className="container -mt-20 lg:pb-32">
          <h2 className="mb-12 max-w-5xl font-display text-5xl text-white lg:text-[6rem]">
            Play Your Favorite Characters. Win Big Prizes.
          </h2>
          <p className="mb-20 max-w-4xl text-3xl font-medium text-white lg:ml-36">
            We empower artists, creators, and players to build the platform they always envisioned,
            providing the means to unleash your creativity and earn income.
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <div>
                <span className="text-white inline-block bg-gradient-to-r from-[#FFE993] to-[#FFB770] bg-clip-text font-display text-5xl font-semibold">
                  1M+
                </span>
              </div>
              <span className="text-lg text-white">Active Users</span>
            </div>
            <div>
              <div>
                <span className="text-white inline-block bg-gradient-to-r from-[#FFE993] to-[#FFB770] bg-clip-text font-display text-5xl font-semibold">
                  $115M
                </span>
              </div>
              <span className="text-lg text-white">Already Earned</span>
            </div>
            <div>
              <div>
                <span className="text-white inline-block bg-gradient-to-r from-[#FFE993] to-[#FFB770] bg-clip-text font-display text-5xl font-semibold">
                  4.8
                </span>
              </div>
              <span className="text-lg text-white">Average Ratings</span>
            </div>
            <div>
              <div>
                <span className="text-white inline-block bg-gradient-to-r from-[#FFE993] to-[#FFB770] bg-clip-text font-display text-5xl font-semibold">
                  250+
                </span>
              </div>
              <span className="text-lg text-white">NFT Collections</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FullScreenStatistics;
