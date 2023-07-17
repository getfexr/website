import React from 'react';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <section className="relative pb-32 pt-20 lg:px-10 lg:pt-32">
      <div className="ml-auto mr-auto h-full max-w-[91rem] px-4">
        <div className="grid h-full items-center gap-4 lg:grid-cols-12">
          <div className="col-span-5 flex h-full flex-col items-center justify-center py-10 lg:items-start lg:py-20">
            <p className="mb-10 text-xs uppercase text-jacarta-800 dark:text-jacarta-50">
              A Comprehensive Web3 Solution for Everyday Use, Built for Everyone
            </p>
            <h1 className="mb-6 text-center font-display text-4xl text-jacarta-700 dark:text-white lg:text-left lg:text-5xl">
              P2P Subscriptions.
              <br />
              Effortless Sign-In with DID.
              <br />
              Self-Custody.
            </h1>
            <p className="mb-10 text-center text-jacarta-600 dark:text-jacarta-600 lg:text-left lg:text-lg">
              Empower Your Digital Life: P2P Subscriptions with Fexr.Club,
              Effortless Web Sign-In with Checkout, and Self-Custody Payments
              with Mobile Wallet.
            </p>
            <div className="flex space-x-4">
              <a
                href={withBaseUrl('learn/roadmap')}
                className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark hover:text-white"
              >
                Get Started
              </a>

              <a
                href="https://calendly.com/fexr/one-on-one"
                className="rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white"
              >
                Inquire Within
              </a>
            </div>
          </div>

          <div className="col-span-6 mt-10 lg:mt-0">
            <div className="relative text-center lg:pl-32 lg:text-right">
              <div className="absolute left-[5%] -top-5 lg:top-1/3 inline-block animate-fly rounded-2lg bg-[#EAF7E1] p-6 shadow-2xl sm:left-[5%] md:left-20">
                <div className="flex gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="fill-green"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.793 6.793L13 8h5v5l-1.793-1.793-3.864 3.864-2.121-2.121-2.829 2.828-1.414-1.414 4.243-4.243 2.121 2.122 2.45-2.45z" />
                    </svg>
                  </span>
                  <div className="text-left">
                    <span className="block font-display text-3xl text-green">
                      64%
                    </span>
                    <span className="block font-display text-sm text-jacarta-600">
                      Security Efficacy Metric
                    </span>
                  </div>
                </div>
              </div>
              <img
                src="/img/hero_main.png"
                alt="placeholder"
                className="inline-block rounded-2.5xl"
              />

              <div className="absolute -bottom-3 lg:bottom-0 right-[5%] lg:-right-[5%] inline-block animate-fly rounded-2lg bg-white p-8 shadow-2xl sm:bottom-28 sm:right-[5%]">
                <div className="text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="absolute right-6 top-6 fill-red"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" />
                  </svg>
                  <span className="block font-display text-3xl text-[#737EF2]">
                    +5k USD
                  </span>
                  <span className="mb-5 block font-display text-sm text-jacarta-600">
                    User Empowerment Metric
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageHeader;
