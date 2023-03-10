import React from 'react';

const timelineData = [
  {
    title: 'Fluir (latest stable release)',
    description:
      'We\'re excited to announce the upcoming release of Fexr\'s third iteration, Fluir, which will soon be available for download on the App Store and Google Play. With Fluir, we\'re introducing an exciting new feature that will make it easier than ever to manage your finances on the go.\n Now, you can connect your Fexr wallet with popular web and mobile apps, allowing for seamless integration between your financial tools and your favorite apps. With just a few clicks, you\'ll be able to connect your wallet and sign transactions from your phone, without ever having to leave the app you\'re using.\n We chose the name Fluir for our upcoming release because it represents the fluidity and ease-of-use that we strive for in all of our products. Fluir, which translates to "flow" in Spanish and Portuguese, perfectly captures the seamless and intuitive experience we\'re aiming to provide our users. With Fluir, managing your finances on the go will feel effortless and intuitive, allowing you to focus on what matters most - your financial goals. \n At Fexr, we\'re committed to providing our users with the most innovative and secure financial tools on the market. We\'re confident that Fluir will provide a truly unparalleled experience, making it easier than ever to manage your finances on the go. Stay tuned for more information on Fluir and all the exciting features we have in store for future Fexr releases!',
    date: '2023 March',
  },
  {
    title: 'Hypergreen',
    description: 'We\'re thrilled to announce the second release of Fexr, now available for download on both the App Store and Google Play! Our latest release, Hypergreen (stable), is a major step forward in our ongoing mission to provide innovative financial and security tools to our users.\n With Hypergreen, we\'ve taken the opportunity to refresh our wallet app with a brand-new design, making it easier than ever to manage your finances on the go. We\'ve also introduced an exciting new reward program, giving our users even more incentives to use Fexr for their financial needs.\n But that\'s not all - we\'ve also revamped our onboarding process, making it simpler and more intuitive than ever before. Whether you\'re a seasoned Fexr user or just getting started, our new onboarding process will guide you through every step of the way, making it easy to take full advantage of everything Fexr has to offer.\nAt Fexr, our commitment to providing exceptional financial and security tools is at the forefront of everything we do. We\'re confident that Hypergreen will provide users with an unparalleled experience, and we look forward to continuing to innovate and improve our platform with each new release.',
    date: '2022 Oct',
  },
  {
    title: 'Pop',
    description:
      'We\'re thrilled to announce that Fexr has officially launched and is now available on both the App Store and Google Play! Our inaugural release, called Pop, marks a significant milestone in our journey towards providing innovative financial and security tools to our customers. With Pop, our focus is on delivering cutting-edge features that truly matter to our users. We\'re excited to introduce Passport (DID) Oracles and Payments, two key areas where Fexr truly shines. Our Passport (DID) Oracles provide an extra layer of security, allowing users to safely and securely store and verify their identity information. Meanwhile, our Payments feature allows for seamless, fast, and secure transactions, making it easier than ever to manage your finances on the go. We\'re confident that our first release will provide users with a seamless, secure, and innovative experience, setting the tone for future Fexr releases to come. Our commitment to providing exceptional financial and security tools is at the forefront of everything we do, and we can\'t wait for our users to experience the power of Fexr firsthand.',
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
              Guiding Our Future Growth and Development
            </p>
            <p className="text-sm md:text-base dark:text-gray-50 mb-4">
              Our comprehensive Fexr roadmap outlines our strategy and goals for
              the future, guiding our efforts as we continue to innovate and
              grow.
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
                        <p className="mb-3 text-base font-black dark:font-normal text-green-500 dark:text-green-300">
                          {data.date}
                        </p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          {data.title}
                        </h4>
                        {/* <p className="text-sm md:text-base leading-snug text-gray-
                        500 dark:text-gray-50 text-opacity-100">
                          {data.description}
                        </p> */}
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
