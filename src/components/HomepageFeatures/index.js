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
        <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">COMMUNITY</span>
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
        <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">COMMUNITY</span>
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
              src="./img/landing/1200x500.png"
            />
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-1 sm:py-3">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="./img/landing/become-FCL.png"
              />
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <h1 class="leading-relaxed text-lg mb-4">
                More than 1/3rd of your subscription cost goes directly to
                your Community Lead for helping with tech integrations followed
                by campaigns. Imagine Patreon for your favorite data-generating business instead of video based contents.
              </h1>
              <a class="text-blue-500 inline-flex items-center">
                Schedule Meet
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
            Understand Your Audience Better. Simple, Effective AI Tools for Real
            Growth. Transform Engagement into Success
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
                      d="M19.9497 17.9497L15 13H22C22 14.933 21.2165 16.683 19.9497 17.9497Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M20 10C20 6.13401 16.866 3 13 3V10H20Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M2 12C2 16.4183 5.58172 20 10 20C12.2091 20 14.2091 19.1046 15.6569 17.6569L10 12V4C5.58172 4 2 7.58172 2 12Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </svg>
              <span class="title-font font-medium">
                Custom data aggregation and anonymization tool (Experimental)
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
                      d="M3 21.0001L14 21V5.98924C14 4.6252 14 3.94318 13.7187 3.47045C13.472 3.05596 13.0838 2.74457 12.6257 2.59368C12.1032 2.42159 11.4374 2.56954 10.1058 2.86544L7.50582 3.44322C6.6117 3.64191 6.16464 3.74126 5.83093 3.98167C5.53658 4.19373 5.30545 4.48186 5.1623 4.8152C5 5.19312 5 5.65108 5 6.56702V21.0001M13.994 5.00007H15.8C16.9201 5.00007 17.4802 5.00007 17.908 5.21805C18.2843 5.4098 18.5903 5.71576 18.782 6.09209C19 6.51991 19 7.07996 19 8.20007V21.0001H21M11 12.0001H11.01"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </svg>
              <span class="title-font font-medium">
                Projections on demand volatility and facilities
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
                AI Conversational Agents and Community Lead Program
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
                      d="M15.5 8.5L8.5 15.5M9.5 9.5H9.51M14.5 14.5H14.51M10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5ZM15 14.5C15 14.7761 14.7761 15 14.5 15C14.2239 15 14 14.7761 14 14.5C14 14.2239 14.2239 14 14.5 14C14.7761 14 15 14.2239 15 14.5ZM16.3287 4.75855C17.0676 4.77963 17.8001 5.07212 18.364 5.636C18.9278 6.19989 19.2203 6.9324 19.2414 7.67121C19.2623 8.40232 19.2727 8.76787 19.2942 8.85296C19.3401 9.0351 19.2867 8.90625 19.383 9.06752C19.428 9.14286 19.6792 9.40876 20.1814 9.94045C20.6889 10.4778 21 11.2026 21 12C21 12.7974 20.6889 13.5222 20.1814 14.0595C19.6792 14.5912 19.428 14.8571 19.383 14.9325C19.2867 15.0937 19.3401 14.9649 19.2942 15.147C19.2727 15.2321 19.2623 15.5977 19.2414 16.3288C19.2203 17.0676 18.9278 17.8001 18.364 18.364C17.8001 18.9279 17.0676 19.2204 16.3287 19.2414C15.5976 19.2623 15.2321 19.2727 15.147 19.2942C14.9649 19.3401 15.0937 19.2868 14.9325 19.3831C14.8571 19.4281 14.5912 19.6792 14.0595 20.1814C13.5222 20.6889 12.7974 21 12 21C11.2026 21 10.4778 20.6889 9.94047 20.1814C9.40874 19.6792 9.14287 19.4281 9.06753 19.3831C8.90626 19.2868 9.0351 19.3401 8.85296 19.2942C8.76788 19.2727 8.40225 19.2623 7.67121 19.2414C6.93238 19.2204 6.19986 18.9279 5.63597 18.364C5.07207 17.8001 4.77959 17.0676 4.75852 16.3287C4.73766 15.5976 4.72724 15.2321 4.70578 15.147C4.65985 14.9649 4.71322 15.0937 4.61691 14.9324C4.57192 14.8571 4.32082 14.5912 3.81862 14.0595C3.31113 13.5222 3 12.7974 3 12C3 11.2026 3.31113 10.4778 3.81862 9.94048C4.32082 9.40876 4.57192 9.14289 4.61691 9.06755C4.71322 8.90628 4.65985 9.03512 4.70578 8.85299C4.72724 8.7679 4.73766 8.40235 4.75852 7.67126C4.77959 6.93243 5.07207 6.1999 5.63597 5.636C6.19986 5.07211 6.93238 4.77963 7.67121 4.75855C8.40232 4.73769 8.76788 4.72727 8.85296 4.70581C9.0351 4.65988 8.90626 4.71325 9.06753 4.61694C9.14287 4.57195 9.40876 4.32082 9.94047 3.81863C10.4778 3.31113 11.2026 3 12 3C12.7974 3 13.5222 3.31114 14.0595 3.81864C14.5913 4.32084 14.8571 4.57194 14.9325 4.61693C15.0937 4.71324 14.9649 4.65988 15.147 4.70581C15.2321 4.72726 15.5976 4.73769 16.3287 4.75855Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </svg>
              <span class="title-font font-medium">
                Activate and engage micro listings & passes
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
                      d="M5 12.0002C5 10.694 4.16519 9.58273 3 9.1709V7.6C3 7.03995 3 6.75992 3.10899 6.54601C3.20487 6.35785 3.35785 6.20487 3.54601 6.10899C3.75992 6 4.03995 6 4.6 6H19.4C19.9601 6 20.2401 6 20.454 6.10899C20.6422 6.20487 20.7951 6.35785 20.891 6.54601C21 6.75992 21 7.03995 21 7.6V9.17071C19.8348 9.58254 19 10.694 19 12.0002C19 13.3064 19.8348 14.4175 21 14.8293V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H4.6C4.03995 18 3.75992 18 3.54601 17.891C3.35785 17.7951 3.20487 17.6422 3.10899 17.454C3 17.2401 3 16.9601 3 16.4V14.8295C4.16519 14.4177 5 13.3064 5 12.0002Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </svg>
              <span class="title-font font-medium">
                Create Club Member IDs secured with Blockchain standards for interoperability
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
                      d="M5 16V20M6 4V8M7 18H3M8 6H4M13 4L14.7528 8.44437C14.9407 8.92083 15.0347 9.15906 15.1786 9.35994C15.3061 9.538 15.462 9.69391 15.6401 9.82143C15.8409 9.9653 16.0792 10.0593 16.5556 10.2472L21 12L16.5556 13.7528C16.0792 13.9407 15.8409 14.0347 15.6401 14.1786C15.462 14.3061 15.3061 14.462 15.1786 14.6401C15.0347 14.8409 14.9407 15.0792 14.7528 15.5556L13 20L11.2472 15.5556C11.0593 15.0792 10.9653 14.8409 10.8214 14.6401C10.6939 14.462 10.538 14.3061 10.3599 14.1786C10.1591 14.0347 9.92083 13.9407 9.44437 13.7528L5 12L9.44437 10.2472C9.92083 10.0593 10.1591 9.9653 10.3599 9.82143C10.538 9.69391 10.6939 9.538 10.8214 9.35994C10.9653 9.15906 11.0593 8.92083 11.2472 8.44437L13 4Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </svg>
              <span class="title-font font-medium">
                Augment your existing ERP & CRM with full data ownership
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
      friendsAndFans: 19,
      startupsAndSmallBusiness: 90,
      mediumSizedBusiness: 270,
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
            Predictable pricing, best of Fexr
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Fexr operates on a simple tier-based and pay-as-you-go model,
            charging only for the resources you use.
            <strong> Forget platform cuts and hidden fees.</strong>
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
              {/* <h2 class="text-xs tracking-widest title-font mb-1 font-medium">
                FRIENDS AND FANS
              </h2> */}
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
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
                Unlimited Members
              </p>
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
                1 Club
              </p>
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <button
                onClick={() =>
                  (window.location.href = "https://fexr.club/dashboard")
                }
                class="flex items-center mt-auto text-white bg-black border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
              >
                <a href="https://fexr.club/dashboard">
                  Start 10 Day Free Trial
                </a>
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
                An affordable starter package perfect for managing up to 2 clubs
                with essential features for small communities.
              </p>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="h-full p-6 rounded-lg border-2 border-blue-500 flex flex-col relative overflow-hidden">
              <span class="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                POPULAR
              </span>
              {/* <h2 class="text-xs tracking-widest title-font mb-1 font-medium">
                STARTUPS AND SMALL BUSINESS
              </h2> */}
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
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
                Unlimited Members
              </p>
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
                Upto 8 Clubs
              </p>
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <button
                onClick={() =>
                  (window.location.href = "https://fexr.club/dashboard")
                }
                class="flex items-center mt-auto text-white bg-black border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
              >
                <a href="https://fexr.club/dashboard">Most Popular</a>
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
                The 'Most Popular' plan, offering a balanced range of resources
                for up to 20 clubs, tailored for growing businesses.
              </p>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              {/* <h2 class="text-xs tracking-widest title-font mb-1 font-medium">
                MEDIUM-SIZED BUSINESS
              </h2> */}
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
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
                Unlimited Members
              </p>
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <button
                onClick={() =>
                  (window.location.href = "https://fexr.club/dashboard")
                }
                class="flex items-center mt-auto text-white bg-black border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
              >
                <a href="https://fexr.club/dashboard">Get Started</a>
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
                A comprehensive plan for unlimited club growth with advanced
                features and support, designed for medium-sized businesses.
              </p>
            </div>
          </div>
          <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              {/* <h2 class="text-xs tracking-widest title-font mb-1 font-medium">
                FOR ALL
              </h2> */}
              <h1 class="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                Pay as you go
              </h1>
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
                Unlimited Members
              </p>
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-2"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <p
                class="flex items-center text-gray-600 mb-6"
                style={{ fontSize: "14px" }}
              >
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
              <button
                onClick={() =>
                  (window.location.href = "https://fexr.club/dashboard")
                }
                class="flex items-center mt-auto text-white bg-black border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
              >
                <a href="https://fexr.club/dashboard">Contact Us</a>
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
                A fully customizable solution with dedicated support, ensuring
                large enterprises get exactly what they need for scalability and
                compliance.
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
        {/* TODO: bring this back in 2025 JAN (1/2): <SDK /> */}
        <Pricing/>
      </div>
    </section>
  );
}
