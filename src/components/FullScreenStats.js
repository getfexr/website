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
        <div className="container lg:pb-32">
          <h2 className="mb-12 max-w-5xl font-display text-5xl text-white lg:text-[6rem]">
            Free and decentralised community Passes
          </h2>
          <p className="mb-20 max-w-4xl text-3xl font-medium text-white lg:ml-36">
            Selfhost or fork from our open source codebase and verify yourself.
            Optionally use fully automated and secure fexr.club for hosting.
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <div>
                <span className="text-white inline-block bg-gradient-to-r from-[#FFE993] to-[#FFB770] bg-clip-text font-display text-5xl font-semibold">
                  100+
                </span>
              </div>
              <span className="text-lg text-white">Fexr.Club Users</span>
            </div>
            <div>
              <div>
                <span className="text-white inline-block bg-gradient-to-r from-[#FFE993] to-[#FFB770] bg-clip-text font-display text-5xl font-semibold">
                  --
                </span>
              </div>
              <span className="text-lg text-white">Passes Created</span>
            </div>
            <div>
              <div>
                <span className="text-white inline-block bg-gradient-to-r from-[#FFE993] to-[#FFB770] bg-clip-text font-display text-5xl font-semibold">
                  --
                </span>
              </div>
              <span className="text-lg text-white">Average Ratings</span>
            </div>
            <div>
              <div>
                <span className="text-white inline-block bg-gradient-to-r from-[#FFE993] to-[#FFB770] bg-clip-text font-display text-5xl font-semibold">
                  --
                </span>
              </div>
              <span className="text-lg text-white">Subscriptions Listed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FullScreenStatistics;
