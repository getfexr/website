import React from 'react';

const timelineData = [
  {
    title: 'Fexr is born',
    description: 'Fexr is born',
    date: '2021 January',
  },
  {
    title: 'Fexr is born',
    description: 'Fexr is born',
    date: '2021 January',
  },
];

export default function Timeline() {
  return (
    <section>
      <div>
        <div className="container mx-auto flex flex-col items-start xl:flex-row">
          <div className="flex flex-col w-full sticky xl:top-36 xl:w-1/3 mt-2 xl:mt-12 px-8">
            <p className="ml-2 text-yellow-300 uppercase tracking-loose">Working Process</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Working Process of Fest</p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Here’s your guide to the tech fest 2021 process. Go through all the steps to know the exact process of the
              fest.
            </p>
            <a
              href="#"
              className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now

            </a>
          </div>
          <div className="ml-0 md:ml-12 xl:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="absolute h-full"
                  style={{
                    right: '50%',
                    border: '2px solid #FBBF24',
                    borderRadius: '1%',
                  }}
                />
                <div
                  className="border-yellow-555 absolute h-full"
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
                      <div className={ `order-1 w-5/12 px-1 py-4 ${classNames.child[type]}`}>
                        <p className="mb-3 text-base text-yellow-300">{ data.date }</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">{ data.title }</h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          { data.description }
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <img className="mx-auto" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
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
