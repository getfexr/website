import React from 'react';
import Layout from '@theme/Layout';
import PropTypes from 'prop-types';

/**
 * Team page
 * @typedef {Object} Member
 * @property {string} name  - Name of the member
 * @property {string} role - Role of the member
 * @property {string} image - Image of the member
 * @property {string} description - Description of the member
 * @property {string | undefined } linkedInUsername - LinkedIn username of the member
 * @property { string | undefined } twitterUsername - Twitter username of the member
 * */

/**
 * Team page
 * @typedef {Member[]} Members
 * */

/**
 * @type {Members}
 */
const members = [
  {
    name: 'Oliver Aguilerra',
    role: 'Product Manager',
    linkedInUsername: 'vyshnavsdeepak',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260',
    description: 'Pommy ipsum bent as a nine bob note naff off biscuits nowt, a cuppa unhand me sir hadn\'t done it in donkey\'s years sod\'s law.',
  },
  {
    name: 'Marta Clermont',
    role: 'Design Team Lead',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
    description: 'Secondary fermentation degrees plato units of bitterness, cask conditioned ale ibu real ale pint glass craft beer. krausen goblet grainy ibu.',
  },
  {
    name: 'Alice Melbourne',
    role: 'Human Resources',
    image: 'https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'I just closed my eyes and in a nanosecond I cured myself from this ridiculous model of disease, addiction and obsession.',
  },
  {
    name: 'Martin Garix Potter',
    role: 'Good guy',
    image: 'https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Est Schlitz shoreditch fashion axe. Messenger bag cupidatat Williamsburg sustainable aliqua, umami shabby chic artisan duis pickled.',
  },
];

function LinkedInIcon(name) {
  const url = `https://www.linkedin.com/in/${name}`;
  return (
    <a href={url} className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        className="h-7"
      >
        <path
          d="M48,8H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V16C56,11.582,52.418,8,48,8z M24,47h-5V27h5 V47z M24.029,23.009C23.382,23.669,22.538,24,21.5,24c-1.026,0-1.865-0.341-2.519-1.023S18,21.458,18,20.468 c0-1.02,0.327-1.852,0.981-2.498C19.635,17.323,20.474,17,21.5,17c1.038,0,1.882,0.323,2.529,0.969 C24.676,18.615,25,19.448,25,20.468C25,21.502,24.676,22.349,24.029,23.009z M47,47h-5V35.887C42,32.788,40.214,31,38,31 c-1.067,0-2.274,0.648-2.965,1.469S34,34.331,34,35.594V47h-5V27h5v3.164h0.078c1.472-2.435,3.613-3.644,6.426-3.652 C44.5,26.5,47,29.5,47,34.754V47z"
        />
      </svg>
    </a>
  );
}

function TwitterIcon(name) {
  const url = `https://twitter.com/${name}`;
  return (
    <a href={url} className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
        <path
          d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
        />
      </svg>
    </a>
  );
}

function Member({
  name, role, image, description, linkedInUsername, twitterUsername,
}) {
  Member.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkedInUsername: PropTypes.string,
    twitterUsername: PropTypes.string,
  };

  Member.defaultProps = {
    linkedInUsername: null,
    twitterUsername: null,
  };

  return (
    <div>
      <img className="object-cover w-24 h-24 rounded-full shadow" src={image} alt={name} />
      <div className="flex flex-col justify-center mt-2">
        <p className="text-lg font-bold">{name}</p>
        <p className="mb-4 text-xs text-gray-800">{role}</p>
        <p className="text-sm tracking-wide text-gray-800">
          {description}
        </p>
        <div className="flex items-center space-x-3">
          { twitterUsername ? <TwitterIcon name={twitterUsername} /> : null }
          { linkedInUsername ? <LinkedInIcon name={linkedInUsername} /> : null }
        </div>
      </div>
    </div>
  );
}
export default function Team() {
  return (
    <Layout>
      <main>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Dream Team
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                  <defs>
                    <pattern id="247432cb-6e6c-4bec-9766-564ed7c230dc" x="0" y="0" width=".135" height=".30">
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)" width="52" height="24" />
                </svg>
                <span className="relative">Welcome</span>
              </span>
              our talented team of professionals
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
              {members.map((member) => (
                <Member
                  key={member}
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  linkedInUsername={member.linkedInUsername}
                  twitterUsername={member.twitterUsername}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
