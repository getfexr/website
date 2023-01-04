import React from 'react';

const walletData = [
  {
    id: '0Metamask',
    image: '/img/partners/metamask.svg',
    title: 'Metamask',
    text: 'Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide.',
  },
  {
    id: '1Coinbase',
    image: '/img/partners/metamask.svg',
    title: 'Coinbase',
    text: 'The easiest and most secure crypto wallet. ... No Coinbase account required.',
  },
  {
    id: '2Bitski',
    image: '/img/partners/metamask.svg',
    title: 'Bitski',
    text: 'Bitski connects communities, creators and brands through unique, ownable digital content.',
  },
  {
    id: '3Fortmatic',
    image: '/img/partners/metamask.svg',
    title: 'Fortmatic',
    text: 'Let users access your Ethereum app from anywhere. No more browser extensions.',
  },
  {
    id: '4Torus',
    image: '/img/partners/metamask.svg',
    title: 'Torus',
    text: 'Open source protocol for connecting decentralised applications to mobile wallets.',
  },
  {
    id: '5Wallet Connect',
    image: '/img/partners/metamask.svg',
    title: 'Wallet Connect',
    text: 'Open source protocol for connecting decentralised applications to mobile wallets.',
  },
];

function CardLayoutGrid() {
  return (
    <div>
      <div className="pt-[5.5rem] lg:pt-24">
        {/* <!-- Wallet --> */}
        <section className="dark:bg-jacarta-800 relative pb-20 pt-28">
          <div className="container">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-[1.875rem]">
              {walletData.map((item) => {
                const {
                  id, image, title, text,
                } = item;
                return (
                  <span
                    key={id}
                    className="cursor-pointer dark:bg-jacarta-700 border-solid dark:border-jacarta-600 border-jacarta-100 rounded-2.5xl mb-8 border bg-white p-8 text-center transition-shadow hover:shadow-lg"
                  >
                    <img
                      src={image}
                      className="
                        dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100
                        mx-auto mb-7 -mt-[3.5rem] h-[5.5rem] w-[5.5rem] rounded-full
                        border
                        bg-white
                        border-solid
                        "
                      alt="wallet"
                    />
                    <h3 className="font-display text-jacarta-700 text-md mb-3 dark:text-white">
                      {title}
                    </h3>
                    <p className="dark:text-jacarta-300">{text}</p>
                  </span>
                );
              })}
            </div>
          </div>
        </section>
        {/* <!-- end wallet --> */}
      </div>
    </div>
  );
}

export default CardLayoutGrid;
