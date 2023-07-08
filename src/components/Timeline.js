import React from 'react';

const timelineData = [
  {
    title: 'SandBox Upgrade (beta)',
    date: '2023 July',
  },
  {
    title: 'Fluir (latest stable release)',
    date: '2023 March',
  },
  {
    title: 'Hypergreen',
    date: '2022 Oct',
  },
  {
    title: 'Pop',
    date: '2022 Mar',
  },
];

export default function Timeline() {
  return (
    <section>
      <div>
        <div className="container mx-auto flex flex-col items-start xl:flex-row">
          <div className="flex flex-col w-full sticky xl:top-36 xl:w-1/3 mt-2 xl:mt-12 px-8">
            <p className="text-2xl md:text-2xl leading-normal md:leading-relaxed mb-2">
              Securely Experiment with the New Sandbox Upgrade
            </p>
            <p className="text-sm md:text-base dark:text-gray-50 mb-4">
              Unleash your innovative ideas with the Sandbox Upgrade for Fexr
              Wallet! Explore blockchain potentials while ensuring absolute
              safety. An environment designed for secure explorations, where
              creativity meets self-custody!
            </p>
            <a
              href="https://github.com/getfexr"
              className="bg-transparent mr-auto dark:hover:bg-green-500 hover:bg-green-500 text-green-500 dark:text-green-300 dark:hover:text-black hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-green-300 hover:border-transparent"
            >
              Learn More
            </a>
          </div>
          <div className="ml-0 md:ml-12 xl:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="absolute h-full border border-2 border-solid"
                  style={{
                    right: '50%',
                    border: '2px solid #000',
                    borderRadius: '1%',
                  }}
                />
                <div
                  className="absolute h-full"
                  style={{
                    left: '50%',
                    border: '2px solid #000',
                    borderRadius: '1%',
                  }}
                />
                {timelineData.map((data, idx) => {
                  const type = idx % 2 === 0 ? 'left' : 'right';
                  const classNames = {
                    main: {
                      left: 'flex-row-reverse',
                      right: 'flex-row',
                    },
                    child: {
                      left: 'text-right',
                      right: 'text-left',
                    },
                  };
                  return (
                    <div
                      className={`mb-8 flex justify-between items-center w-full ${classNames.main[type]}`}
                    >
                      <div className="order-1 w-5/12" />
                      <div
                        className={`order-1 w-5/12 px-1 py-4 ${classNames.child[type]}`}
                      >
                        <p className="mb-3 text-base dark:font-normal text-green-500 dark:text-green-300">
                          {data.date}
                        </p>
                        <h2 className="mb-3 text-lg md:text-2xl">
                          {data.title}
                        </h2>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// .sepertor-1 {
//   right: 50%; border: 2px solid #FFC100; border-radius: 1%;
// }
// .sepertor-2 {
//   left: 50%; border: 2px solid #FFC100; border-radius: 1%;
// }
