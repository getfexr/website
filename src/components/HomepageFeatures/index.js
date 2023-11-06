/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';

import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
// import { InlineLink } from '@algolia/ui-library';

import styles from './styles.module.css';

function SDK() {
  const [activeSection, setActiveSection] = useState('Python');

  const sections = [
    {
      name: "Python",
      image: "https://dummyimage.com/720x600",
      title: "Value Stream Mapping for the Modern Age",
      description:
        "A structured approach to visualize communications and information flow...",
      link: "/process-maps",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-5 h-5 mr-3"
          viewBox="0 0 24 24"
        >
          <path d="M12.5,2.5v4c0,0.3-0.2,0.5-0.5,0.5h-4C7.7,7,7.5,6.8,7.5,6.5v-4C7.5,2.2,7.7,2,8,2h4C12.3,2,12.5,2.2,12.5,2.5z M11.5,3h-3v3h3V3z"></path>
          <path d="M15.5,2.5v4c0,0.3,0.2,0.5,0.5,0.5h4c0.3,0,0.5-0.2,0.5-0.5v-4c0-0.3-0.2-0.5-0.5-0.5h-4C15.7,2,15.5,2.2,15.5,2.5z M16.5,3h3v3h-3V3z"></path>
          <path d="M11.5,21.5v-4c0-0.3,0.2-0.5,0.5-0.5h4c0.3,0,0.5,0.2,0.5,0.5v4c0,0.3-0.2,0.5-0.5,0.5h-4C11.7,22,11.5,21.8,11.5,21.5z M12.5,21h3v-3h-3V21z"></path>
          <path d="M8.5,21.5v-4c0-0.3-0.2-0.5-0.5-0.5h-4C3.7,17,3.5,17.2,3.5,17.5v4c0,0.3,0.2,0.5,0.5,0.5h4C8.3,22,8.5,21.8,8.5,21.5z M7.5,21h-3v-3h3V21z"></path>
        </svg>
      ),
    },
    {
      name: "Some Forum",
      image: "https://dummyimage.com/720x600",
      title: "Value Stream Mapping for the Modern Age",
      description:
        "A structured approach to visualize communications and information flow...",
      link: "/process-maps",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-5 h-5 mr-3"
          viewBox="0 0 24 24"
        >
          <path d="M12.5,2.5v4c0,0.3-0.2,0.5-0.5,0.5h-4C7.7,7,7.5,6.8,7.5,6.5v-4C7.5,2.2,7.7,2,8,2h4C12.3,2,12.5,2.2,12.5,2.5z M11.5,3h-3v3h3V3z"></path>
          <path d="M15.5,2.5v4c0,0.3,0.2,0.5,0.5,0.5h4c0.3,0,0.5-0.2,0.5-0.5v-4c0-0.3-0.2-0.5-0.5-0.5h-4C15.7,2,15.5,2.2,15.5,2.5z M16.5,3h3v3h-3V3z"></path>
          <path d="M11.5,21.5v-4c0-0.3,0.2-0.5,0.5-0.5h4c0.3,0,0.5,0.2,0.5,0.5v4c0,0.3-0.2,0.5-0.5,0.5h-4C11.7,22,11.5,21.8,11.5,21.5z M12.5,21h3v-3h-3V21z"></path>
          <path d="M8.5,21.5v-4c0-0.3-0.2-0.5-0.5-0.5h-4C3.7,17,3.5,17.2,3.5,17.5v4c0,0.3,0.2,0.5,0.5,0.5h4C8.3,22,8.5,21.8,8.5,21.5z M7.5,21h-3v-3h3V21z"></path>
        </svg>
      ),
    },
    {
      name: "Some Other Forum",
      image: "https://dummyimage.com/720x600",
      title: "Value Stream Mapping for the Modern Age",
      description:
        "A structured approach to visualize communications and information flow...",
      link: "/process-maps",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-5 h-5 mr-3"
          viewBox="0 0 24 24"
        >
          <path d="M12.5,2.5v4c0,0.3-0.2,0.5-0.5,0.5h-4C7.7,7,7.5,6.8,7.5,6.5v-4C7.5,2.2,7.7,2,8,2h4C12.3,2,12.5,2.2,12.5,2.5z M11.5,3h-3v3h3V3z"></path>
          <path d="M15.5,2.5v4c0,0.3,0.2,0.5,0.5,0.5h4c0.3,0,0.5-0.2,0.5-0.5v-4c0-0.3-0.2-0.5-0.5-0.5h-4C15.7,2,15.5,2.2,15.5,2.5z M16.5,3h3v3h-3V3z"></path>
          <path d="M11.5,21.5v-4c0-0.3,0.2-0.5,0.5-0.5h4c0.3,0,0.5,0.2,0.5,0.5v4c0,0.3-0.2,0.5-0.5,0.5h-4C11.7,22,11.5,21.8,11.5,21.5z M12.5,21h3v-3h-3V21z"></path>
          <path d="M8.5,21.5v-4c0-0.3-0.2-0.5-0.5-0.5h-4C3.7,17,3.5,17.2,3.5,17.5v4c0,0.3,0.2,0.5,0.5,0.5h4C8.3,22,8.5,21.8,8.5,21.5z M7.5,21h-3v-3h3V21z"></path>
        </svg>
      ),
    },
    {
      name: "Flutter",
      image: "https://dummyimage.com/720x600",
      title: "Ensuring Safety in Crowded Areas",
      description: "Advanced techniques to maintain crowd protection...",
      link: "/crowd-protection",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-5 h-5 mr-3"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      name: "Javascript",
      image: "https://dummyimage.com/720x600",
      title: "Ensuring Safety in Crowded Areas",
      description: "Advanced techniques to maintain crowd protection...",
      link: "/crowd-protection",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-5 h-5 mr-3"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      name: "Endpoint",
      image: "https://dummyimage.com/720x600",
      title: "Ensuring Safety in Crowded Areas",
      description: "Advanced techniques to maintain crowd protection...",
      link: "/crowd-protection",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-5 h-5 mr-3"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    // ... add other sections in similar format
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
        <div className="flex mx-auto flex-wrap mb-20">
          {sections.map((section) => (
            <a
              key={section.name}
              onClick={() => setActiveSection(section.name)}
              className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t ${
                activeSection === section.name
                  ? "bg-gray-100 border-indigo-500 text-indigo-500"
                  : "border-gray-200 hover:text-gray-900 hover:border-indigo-500"
              }`}
            >
              {section.icon}
              {section.name}
            </a>
          ))}
        </div>
        {sections.map(
          (section) =>
            activeSection === section.name && (
              <div key={section.name} className="flex flex-col items-center">
                <img
                  className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 mb-10 object-cover object-center rounded"
                  alt={section.name}
                  src={section.image}
                />
                <div class="flex flex-wrap -m-12">
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">API</span>
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Developer Endorsement from that tech stack</h2>
        <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <a class="text-indigo-500 inline-flex items-center">Try It Out
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>1.2K
          </span>
          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>6
          </span>
        </div>
        <a class="inline-flex items-center">
          <img alt="blog" src="https://dummyimage.com/104x104" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
          <span class="flex-grow flex flex-col pl-4">
            <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
            <span class="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
          </span>
        </a>
      </div>
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">API</span>
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Generate FOMO on this feature</h2>
        <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric.</p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <a class="text-indigo-500 inline-flex items-center">Try It Out
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>1.2K
          </span>
          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>6
          </span>
        </div>
        <a class="inline-flex items-center">
          <img alt="blog" src="https://dummyimage.com/103x103" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
          <span class="flex-grow flex flex-col pl-4">
            <span class="title-font font-medium text-gray-900">Alper Kamu</span>
            <span class="text-gray-400 text-xs tracking-widest mt-0.5">DESIGNER</span>
          </span>
        </a>
      </div>
    </div>
              </div>
            )
        )}
      </div>
    </section>
  );
}

function SetupDemo() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-2 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="https://dummyimage.com/1200x500"
            />
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                  Witness Fexr in Action
                </h2>
                <div class="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                <p class="text-base">
                  Set up a demo and experience firsthand the seamless
                  integration and magic of Fexr.
                </p>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed text-lg mb-4">
                Unlock the potential of blockchain and community synergy.
                Explore firsthand how Fexr can empower your group. Reach out
                today to schedule your personalized demo and discover the future
                of community engagement with Fexr.
              </p>
              <a class="text-blue-500 inline-flex items-center">
                Book a Demo
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TransparentEvolution() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            A Transparent Evolution
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            While we pride ourselves on innovation, we honor the pillars that
            have held us firm. Dive into features that, while existing, are now
            showcased with a renewed transparency and flair.
          </p>
        </div>
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M3 18H7M10 18H21M5 21H12M16 21H19M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </svg>
              <span class="title-font font-medium">
                Structured Data Extraction using AI
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M7 10.0737C7.47142 10.0449 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10.0449 17 10.0737M7 10.0737C6.41168 10.1096 5.99429 10.1904 5.63803 10.3719C5.07354 10.6595 4.6146 11.1185 4.32698 11.683C4 12.3247 4 13.1648 4 14.8449V16.2449C4 17.9251 4 18.7652 4.32698 19.4069C4.6146 19.9714 5.07354 20.4303 5.63803 20.7179C6.27976 21.0449 7.11984 21.0449 8.8 21.0449H15.2C16.8802 21.0449 17.7202 21.0449 18.362 20.7179C18.9265 20.4303 19.3854 19.9714 19.673 19.4069C20 18.7652 20 17.9251 20 16.2449V14.8449C20 13.1648 20 12.3247 19.673 11.683C19.3854 11.1185 18.9265 10.6595 18.362 10.3719C18.0057 10.1904 17.5883 10.1096 17 10.0737M7 10.0737V8.04492C7 5.2835 9.23858 3.04492 12 3.04492C14.7614 3.04492 17 5.2835 17 8.04492V10.0737M10 18L10.2857 17M14 18L13.7143 17M10.2857 17L10.8308 15.0922C11.1799 13.8702 11.3545 13.2592 11.6244 13.1058C11.8573 12.9733 12.1427 12.9733 12.3756 13.1058C12.6455 13.2592 12.8201 13.8702 13.1692 15.0922L13.7143 17M10.2857 17H13.7143"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </svg>
              <span class="title-font font-medium">
                User Onboarding using Blockchains
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 14L9 19L20 8M6 8.88889L9.07692 12L16 5"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </svg>
              <span class="title-font font-medium">
                Chat with AI models and Community Leads
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M9 12L11 14L15 10M12 3L13.9101 4.87147L16.5 4.20577L17.2184 6.78155L19.7942 7.5L19.1285 10.0899L21 12L19.1285 13.9101L19.7942 16.5L17.2184 17.2184L16.5 19.7942L13.9101 19.1285L12 21L10.0899 19.1285L7.5 19.7942L6.78155 17.2184L4.20577 16.5L4.87147 13.9101L3 12L4.87147 10.0899L4.20577 7.5L6.78155 6.78155L7.5 4.20577L10.0899 4.87147L12 3Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </svg>
              <span class="title-font font-medium">
                Micro Listings for On-Chain Txns
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 8L6 20H18L20 8M4 8L5.71624 9.37299C6.83218 10.2657 7.39014 10.7121 7.95256 10.7814C8.4453 10.8421 8.94299 10.7173 9.34885 10.4314C9.81211 10.1051 10.0936 9.4483 10.6565 8.13476L12 5M4 8C4.55228 8 5 7.55228 5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8ZM20 8L18.2838 9.373C17.1678 10.2657 16.6099 10.7121 16.0474 10.7814C15.5547 10.8421 15.057 10.7173 14.6511 10.4314C14.1879 10.1051 13.9064 9.4483 13.3435 8.13476L12 5M20 8C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6C19.4477 6 19 6.44772 19 7C19 7.55228 19.4477 8 20 8ZM12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5ZM12 4H12.01M20 7H20.01M4 7H4.01"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </svg>
              <span class="title-font font-medium">
                Cross Brand Loyality Programs
              </span>
            </div>
          </div>
          <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M10.063 8.5C10.0219 8.34019 10 8.17265 10 8C10 6.89543 10.8954 6 12 6C12.1413 6 12.2792 6.01466 12.4122 6.04253M5 4L3 3M19 4L21 3M4 10H3M21 10H20M5.6 21H18.4C18.9601 21 19.2401 21 19.454 20.891C19.6422 20.7951 19.7951 20.6422 19.891 20.454C20 20.2401 20 19.9601 20 19.4V18.6C20 18.0399 20 17.7599 19.891 17.546C19.7951 17.3578 19.6422 17.2049 19.454 17.109C19.2401 17 18.9601 17 18.4 17H5.6C5.03995 17 4.75992 17 4.54601 17.109C4.35785 17.2049 4.20487 17.3578 4.10899 17.546C4 17.7599 4 18.0399 4 18.6V19.4C4 19.9601 4 20.2401 4.10899 20.454C4.20487 20.6422 4.35785 20.7951 4.54601 20.891C4.75992 21 5.03995 21 5.6 21ZM17 14V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V14H17Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </svg>
              <span class="title-font font-medium">
                Compliance and Crowd Protection
              </span>
            </div>
          </div>
        </div>
        <button class="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View All Products
        </button>
      </div>
    </section>
  );
}
function Pricing() {
    const [billingCycle, setBillingCycle] = useState("monthly");

    const basePrices = {
      friendsAndFans: 25,
      startupsAndSmallBusiness: 120,
      mediumSizedBusiness: 399,
      // Add other plans as needed
    };

    const calculatePrice = (basePrice) => {
      return billingCycle === "annually" ? basePrice * 10 : basePrice;
    };

    const calculateAnnualDiscountPrice = (basePrice) => {
      const annualPrice = basePrice * 12; // Price without discount
      return annualPrice - annualPrice * annualDiscountRate;
    };

    // Determine the billing period text based on the billing cycle
    const billingPeriod = billingCycle === "annually" ? "yr" : "mo";

  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-2 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Predictable pricing, no surprises
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Fight fraud in the golden age of fraud, collaborate with a team,
            then scale to millions of audience.
          </p>
          <div className="flex mx-auto border-2 border-blue-500 rounded overflow-hidden mt-6">
            <button
              className={`py-1 px-4 focus:outline-none ${
                billingCycle === "monthly" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`py-1 px-4 focus:outline-none ${
                billingCycle === "annually" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setBillingCycle("annually")}
            >
              Annually
            </button>
          </div>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                FRIENDS AND FANS
              </h2>
              <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>${calculatePrice(basePrices.friendsAndFans)}</span>
                <span className="text-lg ml-1 font-normal text-gray-500">
                  {billingCycle}
                </span>
              </h1>
              {billingCycle === "annually" && (
                <span className="text-sm font-normal text-orange-500">
                  2 months free
                </span>
              )}
              <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Upto 2 Clubs
              </p>
              <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                200MB database storage
              </p>
              <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                2.5 GB file storage
              </p>
              <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                10GB bandwidth
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                100MB document uploads
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                2,000 monthly active users
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                50,000 Edge Function calls
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                10 concurrent Realtime connections
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                7-day log retention
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Email support
              </p>
              <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                Get Started
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p class="text-xs text-gray-500 mt-3">
                Literally you probably haven't heard of them jean shorts.
              </p>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="h-full p-6 rounded-lg border-2 border-blue-500 flex flex-col relative overflow-hidden">
              <span class="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                POPULAR
              </span>
              <h2 class="text-xs tracking-widest title-font mb-1 font-medium">
                STATUPS AND SMALL BUSINESS
              </h2>
              <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>
                  ${calculatePrice(basePrices.startupsAndSmallBusiness)}
                </span>
                <span className="text-lg ml-1 font-normal text-gray-500">
                  {billingCycle}
                </span>
              </h1>
              {billingCycle === "annually" && (
                <span className="text-sm font-normal text-orange-500">
                  2 months free
                </span>
              )}
              <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Upto 20 Clubs
              </p>
              <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                2GB database storage
              </p>
              <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                25 GB file storage
              </p>
              <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                100GB bandwidth
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                1GB document uploads
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                20,000 monthly active users
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                500,000 Edge Function calls
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                100 concurrent Realtime connections
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                7-day log retention
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Email support
              </p>
              <button class="flex items-center mt-auto text-white bg-blue-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded">
                Most Popular
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p class="text-xs text-gray-500 mt-3">
                Literally you probably haven't heard of them jean shorts.
              </p>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                MEDIUM-SIZED BUSINESS
              </h2>
              <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>${calculatePrice(basePrices.mediumSizedBusiness)}</span>
                <span className="text-lg ml-1 font-normal text-gray-500">
                  {billingCycle}
                </span>
              </h1>
              {billingCycle === "annually" && (
                <span className="text-sm font-normal text-orange-500">
                  2 months free
                </span>
              )}
              <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Unlimited Clubs
              </p>
              <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                8GB database storage
              </p>
              <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                100 GB file storage
              </p>
              <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                250GB bandwidth
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                5GB document uploads
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                100,000 monthly active users
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                2M Edge Function calls
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                500 concurrent Realtime connections
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                28-day log retention
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Priority email support & SLAs
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Additional Club member roles
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                SSO for Fexr Club
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Private Discord channel
              </p>
              <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                Get Started
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p class="text-xs text-gray-500 mt-3">
                Literally you probably haven't heard of them jean shorts.
              </p>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 class="text-xs tracking-widest title-font mb-1 font-medium">
                LARGE ENTERPRISE AND CORP
              </h2>
              <h1 class="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                Contact Us
              </h1>
              <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Unlimited Clubs
              </p>
              <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Custom database storage
              </p>
              <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Custom file storage
              </p>
              <p class="flex items-center text-gray-600 mb-2">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Custom bandwidth
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Custom document uploads
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Custom monthly active users
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Custom Edge Function calls
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Custom concurrent Realtime connections
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Custom log retention period
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Designated Support manager & SLAs
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Additional Club member roles
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                SSO for Fexr Club
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                SOC2
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                On-premise support
              </p>
              <p class="flex items-center text-gray-600 mb-6">
                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    class="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Private Discord channel
              </p>
              <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                Contact Us
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p class="text-xs text-gray-500 mt-3">
                Literally you probably haven't heard of them jean shorts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures() {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <section className={styles.features}>
      <div className="w-full">
        <TransparentEvolution />
        <SetupDemo />
        <SDK />
        <Pricing/>
      </div>
    </section>
  );
}
