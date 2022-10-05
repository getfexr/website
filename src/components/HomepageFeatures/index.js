/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
import React from 'react';

import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import { InlineLink } from '@algolia/ui-library';

import styles from './styles.module.css';

function Description() {
  return (
    <div className="py- mt-10 overflow-hidden">
      <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
        <div className="relative">
          <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight md:text-4xl md:leading-10">
            Crypto Wallet and On-Chain Verifiable Claims using DID.
          </h3>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-description">
            Get your decentralized wallet that can be used to store and verify claims,
            RBT and more with your decentralized identity.
          </p>
        </div>
      </div>
    </div>
  );
}

const icons = {
  apple() {
    return (<svg className="ml-2 -mr-1 w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
    );
  },
  google() {
    return (
      <svg className="ml-2 -mr-1 w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M12.786 12.316a.5.5 0 0 0-.152-.355L2.705 2.352a.5.5 0 0 0-.822.201 1.926 1.926 0 0 0-.106.614v18.151c0 .376.106.729.314 1.049a.502.502 0 0 0 .773.082l9.775-9.775a.505.505 0 0 0 .147-.358zM13.352 11.265a.498.498 0 0 0 .702-.005l2.525-2.525a.502.502 0 0 0-.113-.792L4.624 1.458a.502.502 0 0 0-.632.158.502.502 0 0 0 .061.649l9.299 9zM21.217 10.544l-2.924-1.602a.503.503 0 0 0-.594.085l-2.915 2.915a.5.5 0 0 0 .006.712l2.906 2.813a.503.503 0 0 0 .588.079l2.933-1.606c.63-.345 1.006-.98 1.006-1.698s-.376-1.353-1.006-1.698zM14.071 13.351a.5.5 0 0 0-.701.006l-8.32 8.32a.498.498 0 0 0 .594.791l10.804-5.916a.499.499 0 0 0 .107-.798l-2.484-2.403z" />
      </svg>
    );
  },
  windows() {
    return (<svg className="ml-2 -mr-1 w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22 2 11.2 3.6v8l10.8-.1V2zM10.2 12.5 2 12.4v6.8l8.1 1.1.1-7.8zM2 4.8v6.8h8.1V3.7L2 4.8zm9.1 7.7v7.9L22 22v-9.4l-10.9-.1z" /></svg>);
  },
  fuchsia() {
    return (
      <svg className="ml-2 -mr-1 w-5 h-5" viewBox="0 0 300 300">
        <path
          fill="currentColor"
          d="M204.9,174.6c36.5,2.8,72.8-13.1,77.1-53.4c0.2-1.5-0.6-2.9-1.8-3.6c-1.7-0.8-3.8-0.1-4.6,1.6
    c-0.1,0.1-0.1,0.2-0.1,0.4c-18.7,41-66.8,26.5-86.1,22.4c-25.8-6.2-52.2-9.6-78.7-10.1c-36.5,0.9-60.4,10.9-82.2,38
    S3.2,253.5,43.8,284.2c36,26.7,85.9,23.8,118.6-6.8c25.2-26.2,37-62.6,31.9-98.6c-15.1-2.2-29.6-5.2-44.1-7.8
    c-52.1-9.9-83.4,0-98.3,30.7c-7.3,14.6-7.3,31.8,0,46.4c8.2,15.6,23.4,26.4,40.9,29.1c21.1,4.5,43.1-1,59.7-14.8
    c19.2-16.5,29.2-43.9,28.3-77.1l5.6,0.9c0.8,34.4-10.1,63-30.3,80.5c-17.9,15-41.6,20.9-64.5,16.1c-19-2.9-35.5-14.7-44.5-31.7
    c-8.1-16.2-8.1-35.2,0-51.4c7.3-16,21.2-28.1,38.1-33.2c17.2-5.5,38.9-5.9,66.3-0.5C171.2,169.5,194.7,174,204.9,174.6z
     M122.5,223.8c-10.6,20.2-37.7,23.7-50.5,10s-5.6-33.3,5.9-43.2c14.7-11.6,33.8-16.1,52.2-12.2C129.6,197.7,128.2,213.1,122.5,223.8
    z M125.7,127c21.7,1.5,43.3,4.7,64.5,9.7c-9-38.3,0-70.3,28.2-80.9c23.8-9.7,51,1.7,60.8,25.6c1.4,3.5,2.4,7.2,3,11
    c0.5,2.9,2,3.8,3.9,4c2.1,0.3,4.1-1.1,4.6-3.1c7.3-26.8-1.7-55.5-22.9-73.4C248.9,5,224.6-0.7,201.3,4.3
    C145.5,15.9,122.8,68.1,125.7,127z M288,87.9c5-22.4-19.9-79.5-74.8-73.6c-22.5,2.2-42.9,14-56.1,32.3
    c-12.9,18.7-17.8,43.5-17.8,73.9l-5.6-0.5c0-19.4,1-50.8,17.8-75.2c13.4-19.5,34.5-32.5,58-35.6C273,0.8,295.7,65.4,288,87.9z"
        />
      </svg>
    );
  },
  fdroid() {
    return (
      <svg className="ml-2 -mr-1 w-5 h-5" viewBox="0 0 300 300">
        <path
          fill="currentColor"
          d="M260.2,128.7H44.8c-11.2,0-20.2,9-20.2,20.2v134.6c0,11.2,9,20.2,20.2,20.2h215.3c11.2,0,20.2-9,20.2-20.2V148.9C280.4,137.7,271.3,128.7,260.2,128.7z M152.5,286.8c-39,0-70.7-31.7-70.7-70.7s31.7-70.7,70.7-70.7s70.7,31.7,70.7,70.7
S191.5,286.8,152.5,286.8z M152.5,158.3c-31.9,0-57.9,26-57.9,57.9s26,57.9,57.9,57.9s57.9-26,57.9-57.9S184.4,158.3,152.5,158.3z
M152.5,258.2c-19.6-0.1-36.5-13.6-40.9-32.6h21.2c3.5,7.4,10.9,12.4,19.7,12.4c12.2,0,21.9-9.7,21.9-21.9
c0-12.2-9.7-21.9-21.9-21.9c-7.9,0-15.1,4.2-19,11.1h-21.6c4.9-18.4,21.6-31.2,40.6-31.3c23.2,0.1,42,18.9,42.1,42.1
C194.5,239.3,175.7,258.1,152.5,258.2z M303.1,5.6L303.1,5.6l-0.1,0L303.1,5.6c-1.7-2-4.1-3.1-6.6-3.1c-2.6,0-5,1.3-6.5,3.3
l-23.1,29.9c-2.1-0.8-4.4-1.2-6.6-1.2H44.8c-2.3,0-4.5,0.5-6.6,1.2L15.1,5.7c-2.8-3.7-8-4.4-11.7-1.6C2.9,4.5,2.4,5,2,5.5L2,5.5
L1.9,5.6l0,0c-2.5,3-2.5,7.4-0.2,10.5L26,47.4c-0.9,2.3-1.4,4.7-1.4,7.2v47.1c0,11.2,9,20.2,20.2,20.2h215.3
c11.2,0,20.2-9,20.2-20.2V54.6c0-2.5-0.5-5-1.4-7.2L303.3,16C305.6,12.9,305.6,8.6,303.1,5.6z M87.7,105.1
C75.2,105.1,65,94.9,65,82.4s10.2-22.7,22.7-22.7s22.7,10.2,22.7,22.7S100.3,105.1,87.7,105.1z M219,105.1
c-12.5,0-22.7-10.2-22.7-22.7s10.2-22.7,22.7-22.7s22.7,10.2,22.7,22.7S231.5,105.1,219,105.1z"
        />
      </svg>
    );
  },
};
function AppStores() {
  const stores = [
    {
      store: 'Apple Store',
      icon: icons.apple,
      link: 'https://apps.apple.com/app/fexr-wallet/id1631128786',
    },
    {
      store: 'Google Play',
      icon: icons.google,
      link: 'https://play.google.com/store/apps/details?id=com.getfexr.core',
    },
    {
      store: 'Mac OS',
      icon: icons.apple,
      comingSoon: true,
    },
    {
      store: 'Windows',
      icon: icons.windows,
      comingSoon: true,
    },
    {
      store: 'Fuchsia OS',
      icon: icons.fuchsia,
      comingSoon: true,
    },
    {
      store: 'F-Droid',
      icon: icons.fdroid,
      comingSoon: true,
    },
  ];
  return (
    <section>
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900 dark:text-gray-100">Your priv** keys, only in your pocket</h2>
      <p className="mb-16 text-lg text-gray-500">Download Fexr. It&apos;s fee-free. Coming soon for all your screens.</p>

      <div className="grid sm:grid-cols-2 gap-4 place-items-center">
        { stores.map((store) => (
          <button
            key={store.store}
            type="button"
            onClick={
              (e) => {
                e.preventDefault(); window.open(store.link, '_blank');
              }
            }
            className="app-button font-medium font-sm rounded-lg text-gray-100 dark:text-gray-900 text-sm px-6 py-3.5 w-48 bg-gray-900 dark:bg-gray-100 disabled:opacity-80"
            disabled={store.comingSoon}
          >
            <div className="grid grid-cols-1 gap-1 place-items-center justify-center">
              { store.comingSoon ? <span className="inline">Coming soon</span> : <span className="inline">Available on</span> }
              <div className="h-full w-full flex mx-auto place-content-center">
                <strong>{ store.store }</strong>
                { store.icon ? <store.icon /> : null }
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    {
      label: 'Gas fee per transaction',
      value: '0.000',
    },
    {
      label: 'to complete a PoS transaction (beta)',
      value: '< 9 secs',
    },
  ];
  return (
    <div className="pt-4 pb-12 md:pb-16">
      <div className="relative">
        <div className="relative max-w-screen-xl mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <dl
              className="rounded-lg shadow-xl md:grid bg-white dark:bg-gray-900 grid-flow-col divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-800"
            >
              { stats.map((stat) => (
                <div key={stat.label} className="flex flex-col p-6 text-center">
                  <dt
                    className="order-2 mt-2 text-lg leading-6 font-medium text-description"
                  >
                    { stat.label }
                  </dt>
                  <dd
                    className="order-1 text-5xl leading-none font-extrabold text-indigo-600"
                  >
                    { stat.value }
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  const { withBaseUrl } = useBaseUrlUtils();
  const steps = [
    {
      title: 'Privacy needs in web3, in one place',
      description: (
        <span />),
      image: {
        src: withBaseUrl('img/feature_privacy.svg'),
        alt: 'Privacy needs in web3, in one place',
      },
    },
    {
      title: 'Signing & Verification (works offline)',
      description: (
        <span />),
      image: {
        src: withBaseUrl('img/feature_verified.svg'),
        alt: 'Create an account',
      },
    },
  ];
  return (
    <div className="diagonal-box py-16 dark:bg-gray-800 bg-gray-200 overflow-hidden">
      <div className="diagonal-content max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
        <div className="max-w-screen-xl mx-auto pt-6 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl leading-9 font-extrabold dark:text-gray-100 text-gray-900 md:text-4xl md:leading-10">
              Decentralised APIs, Built for everyone
            </h2>
            <p className="mt-4 max-w-2xl text-xl leading-7 dark:text-gray-400 text-gray-500 lg:mx-auto">
              Web3 APIs from Fexr is one of the easiest SDKs to use blockchain at scale.
            </p>
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-xl mx-auto px-4 md:px-6 lg:max-w-screen-lg lg:px-8 ">
            <div className={(function className() {
              return `lg:grid lg:gap-8 lg:grid-cols-${steps.length}`;
            }())}
            >
              { steps.map((step) => (
                <div key={step.title}>
                  <div className="flex items-center justify-center">
                    <img
                      className="pl-12 h-200"
                      src={step.image.src}
                      alt={step.image.alt}
                    />
                  </div>
                  <div className="mt-10 lg:mt-0 p-4">
                    <h5 className="text-lg leading-6 font-medium dark:text-gray-100 text-gray-900 text-center">
                      {step.title}
                    </h5>
                    <p className="mt-2 text-base leading-6 dark:text-gray-400 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function DemoImage() {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight md:text-4xl md:leading-10">
            Digital Asset Custody
          </h3>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-description lg:mx-auto">
            Owning a wallet or address is both a convenience and responsibility.
            <InlineLink
              target="_blank"
              href="https://twitter.com/getfexr"
            >
              &nbsp;@getfexr
            </InlineLink>
            &nbsp;is making it easy for you, through&nbsp;
            <InlineLink target="_blank" href="https://twitter.com/RubixChain">@RubixChain</InlineLink>
          </p>
          <div className="pt-12 items-center justify-center flex">
            <img
              className="w-full max-w-screen image-rendering-pixel"
              src={withBaseUrl('img/fexr-architecture.svg')}
              alt="keyboard-shortcuts"
            />
          </div>
        </div>
        <div className="pt-16 w-5/6 mx-auto">
          <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium">
                    Powered by RubixChain
                  </h4>
                  <p className="mt-2 text-base leading-6 text-description">
                     A deterministic state-machine that is designed to address the
                     scale, cost, and privacy shortcomings of blockchain protocols that rely on
                       one sequentially organized chain of all global transactions.
                  </p>
                </div>
              </div>
            </li>
            {/* <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium">
                    Image based public and private keys
                  </h4>
                  <p className="mt-2 text-base leading-6 text-description">
                    We have released this version with our best efforts on
                    addressing accessibility issues and we are willing to
                    make further changes.like to work closely with an
                    expert in accessibility. Please contact us if you are
                    interested.
                  </p>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <section className={styles.features}>
      <div className="w-full">
        <div className="p-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-8">
            <div className="p-4 rounded-md flex items-center justify-center">
              <AppStores />
            </div>
            <div className="p-4 rounded-md flex items-center justify-center">
              <img
                className=""
                src={withBaseUrl('img/homePageCreativeNoBG.svg')}
                alt="keyboard-shortcuts"
              />
            </div>
          </div>
        </div>

        <Description />
        <Stats />
        <HowItWorks />
        <DemoImage />
      </div>
    </section>
  );
}
