import React from 'react';

const collectionCategoryData = [
  {
    parentId: 1,
    name: " Today's Txns",
    collections: [
      {
        id: 1,
        title: 'NFT Funny Cat',
        image: '/img/avatar.jpg',
        icon: true,
        amount: '7,080.95',
        postTime: '2022-07-20',
      },
      {
        id: 2,
        title: 'Tokenized Assetpank',
        image: '/img/avatar.jpg',
        icon: true,
        amount: '6,548,133',
        postTime: '2022-07-10',
      },
      {
        id: 3,
        title: 'Prince Ape Planet',
        image: '/img/avatar.jpg',
        icon: false,
        amount: '4,823,927',
        postTime: '2022-07-08',
      },
      {
        id: 4,
        title: 'Hey Mrsmeseks',
        image: '/img/avatar.jpg',
        icon: true,
        amount: '3,186',
        postTime: '2022-07-01',
      },
    ],
  },
  {
    parentId: 2,
    name: 'Top Subscriptions',
    collections: [
      {
        id: 5,
        title: 'Bored Bunny',
        image: '/img/avatar.jpg',
        icon: false,
        amount: '3,027',
        postTime: '2022-07-05',
      },
      {
        id: 6,
        title: 'Wow Frens',
        image: '/img/avatar.jpg',
        icon: false,
        amount: '2,586',
        postTime: '2022-07-08',
      },
      {
        id: 7,
        title: 'Origin Morish',
        image: '/img/avatar.jpg',
        icon: true,
        amount: '2,347.85',
        postTime: '2022-07-20',
      },
      {
        id: 8,
        title: 'Superdo',
        image: '/img/avatar.jpg',
        icon: true,
        amount: '2,115.71',
        postTime: '2022-07-10',
      },
    ],
  },
  {
    parentId: 3,
    name: 'Top Buyers',
    collections: [
      {
        id: 9,
        title: 'NFT stars',
        image: '/img/avatar.jpg',
        icon: false,
        amount: '2,027',
        postTime: '2022-07-12',
      },
      {
        id: 10,
        title: 'Asumitsu',
        image: '/img/avatar.jpg',
        icon: true,
        amount: '1,989.70',
        postTime: '2022-07-15',
      },
      {
        id: 11,
        title: 'Pank Skull',
        image: '/img/avatar.jpg',
        icon: false,
        amount: '1,726.70',
        postTime: '2022-07-16',
      },
      {
        id: 12,
        title: 'Lazy Panda',
        image: '/img/avatar.jpg',
        icon: false,
        amount: '1,589.03',
        postTime: '2022-07-14',
      },
    ],
  },
];

function TrendList() {
  return (
    <div>
      {/* <!-- Today's Txns / Sellers / Buyers --> */}
      <section className="py-24 relative">
        <div className="container">
          <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-7">
            {collectionCategoryData.map(({ parentId, name, collections }) => (
              <div
                className="dark:bg-jacarta-800 bg-light-base rounded-2.5xl p-12 lg:w-1/3"
                key={parentId}
              >
                <h2 className="text-jacarta-700 font-display mb-8 text-center text-3xl font-semibold dark:text-white">
                  {name}
                </h2>

                <div className="flex flex-col space-y-5">
                  {collections.map((item) => {
                    const {
                      id, image, title, icon, amount,
                    } = item;

                    return (
                      <div
                        key={id}
                        className="cursor-pointer dark:bg-jacarta-700 rounded-2xl flex bg-white py-4 px-3 transition-shadow hover:shadow-lg"
                      >
                        <figure className="mr-4 shrink-0">
                          <span className="relative block pt-1">
                            <img
                              src={image}
                              alt={title}
                              className="rounded-2lg h-12 w-12"
                            />
                            <div className="border-solid dark:border-jacarta-600 bg-jacarta-700 absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white text-xs text-white">
                              {id}
                            </div>
                            {icon && (
                              <div
                                className="border-solid dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
                                data-tippy-content="Verified Collection"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="24"
                                  height="24"
                                  className="h-[.875rem] w-[.875rem] fill-white"
                                >
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                                </svg>
                              </div>
                            )}
                          </span>
                        </figure>
                        <div className="flex flex-col justify-center">
                          <div>
                            <span className="font-display text-jacarta-700 hover:text-accent dark:text-white">
                              {title}
                            </span>
                          </div>
                          <span className="dark:text-jacarta-300 text-sm">
                            {amount}
                            {' '}
                            ETH
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* Change the span to <a> later */}
                <span className="text-accent mt-8 block text-center text-sm font-bold tracking-tight">
                  View All Txns
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- end today's Txns / sellers / buyers --> */}
    </div>
  );
}

export default TrendList;
