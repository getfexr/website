import React from 'react';

const timelineData = [
  {
    title: 'Fluir (upcoming)',
    description:
      'Now connect your wallet with popular web and mobile apps and sign from your phone.',
    date: '2023 Jan',
  },
  {
    title: 'Hypergreen (stable)',
    description:
      'Wallet app refresh with new design, reward program, new onboarding, and more.',
    date: '2022 Oct',
  },
  {
    title: 'Pop',
    description:
      'Fexr is now available on the App Store and Google Play. Passport (DID) Oracles and Payments is focused.',
    date: '2022 Mar',
  },
];

export default function Timeline() {
  return (
    <section>
      <div>
        <div className="container mx-auto flex flex-col items-start xl:flex-row">
          <div className="flex flex-col w-full sticky xl:top-36 xl:w-1/3 mt-2 xl:mt-12 px-8">
            <p className="ml-2 font-black dark:font-normal text-green-500 dark:text-green-300 uppercase tracking-loose">Tell us the feature you want us to deliver</p>
            <p className="text-2xl md:text-2xl leading-normal md:leading-relaxed mb-2">Lets develop together</p>
            <p className="text-sm md:text-base dark:text-gray-50 mb-4">
              Here’s your guide to the development progress of Fexr.
              We are working hard to make Fexr the best Web3 payments platform for you.
              Meanwhile, you can follow our progress and get involved in the development process.
            </p>
            <a
              href="https://github.com/getfexr"
              className="bg-transparent mr-auto dark:hover:bg-green-500 hover:bg-green-500 text-green-500 dark:text-green-300 dark:hover:text-black hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-green-300 hover:border-transparent"
            >
              View on Github

            </a>
          </div>
          <div className="ml-0 md:ml-12 xl:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="absolute h-full border border-green-500 border-2 border-solid"
                  style={{
                    right: '50%',
                    // border: '2px solid #FBBF24',
                    borderRadius: '1%',
                  }}
                />
                <div
                  className="border-green-555 absolute h-full"
                  style={{
                    left: '50%',
                    border: '2px solid #FFC100',
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
                    <div className={
                    `mb-8 flex justify-between items-center w-full ${classNames.main[type]}`
                    }
                    >
                      <div className="order-1 w-5/12" />
                      <div className={`order-1 w-5/12 px-1 py-4 ${classNames.child[type]}`}>
                        <p className="mb-3 text-base font-black dark:font-normal text-green-500 dark:text-green-300">{ data.date }</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">{ data.title }</h4>
                        <p className="text-sm md:text-base leading-snug text-gray-500 dark:text-gray-50 text-opacity-100">
                          { data.description }
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <img alt="illustration featuring a man near a spaceship" className="mx-auto" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
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
