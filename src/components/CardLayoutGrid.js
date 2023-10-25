import React from 'react';

const walletData = [
  {
    id: '0Rubix',
    image: '/img/partners/rubix.svg',
    title: 'Rubix',
    text: 'Rubix L1 chain is lightweight enough to run on laptops, desktops and virtual machines. Every node can be a validator while running normal business transactions in parallel.',
  },
];

function CardLayoutGrid() {
  return (
    <div>
      <div>
        {/* <!-- Wallet --> */}
        <section className="relative pb-20 pt-28">
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
