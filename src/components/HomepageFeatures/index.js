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
          {/* <div class="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="./img/landing/1200x500.png"
            />
          </div> */}
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-1 sm:py-3">
              {/* <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="./img/landing/become-FCL.png"
              /> */}
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <h1 class="leading-relaxed text-lg mb-4">
                More than 1/3rd of your subscription cost goes directly to your
                Community Lead for helping with tech integrations followed by
                campaigns. Imagine Patreon for your favourite data-generating
                business instead of video based contents.
              </h1>
              <a
                class="text-blue-500 inline-flex items-center"
                href="https://fexr.club/form/clricavou0000ilxn1um335cr"
              >
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
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
            Predictable pricing, best of Fexr
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Fexr operates on a simple tier-based and pay-as-you-go model,
            charging only for the resources you use. Soon accepting cryptocurrency payments, such as Bitcoin (BTC), Ethereum (ETH), and Tether (USDT), for various fees.
          </p>
          <h2 class="lg:w-2/3 text-sm mx-auto leading-relaxed text-base bg-green-200 text-green-700 p-3 rounded-md">
            Fexr.Club & API is currently in early stage development. Get started for free but please be aware of potential bugs. We announced our plans ahead to avoid any surprises later once you've started.
          </h2>
          <div className="flex mx-auto border-2 border-blue-500 rounded overflow-hidden mt-6">
            <button
              className={`py-1 px-4 focus:outline-none ${
                billingCycle === "monthly"
                  ? "bg-gray-300 text-green"
                  : "bg-gray-100 text-black"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`py-4 px-4 focus:outline-none ${
                billingCycle === "annually"
                  ? "bg-gray-300 text-green"
                  : "bg-gray-100 text-black"
              }`}
              onClick={() => setBillingCycle("annually")}
            >
              Annually
            </button>
          </div>
          <div className="text-center mt-2">
            {billingCycle === "annually"}
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
                1GB database storage
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
                5GB file storage
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
                  Start 14 Day Free Trial
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
                An affordable starter package perfect for managing one clubs
                with essential features for your club.
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
                The 'Most Popular' plan, offering a balanced range of resources,
                tailored for growing businesses.
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
              {/* <p
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
              </p> */}
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
                Deployments and build containers in an isolated network with dedicated IP addresses in a region of their choice and logically separated from other containers.
              </p>
              <button
                onClick={() =>
                  (window.location.href = "https://fexr.club/dashboard")
                }
                class="flex items-center mt-auto text-white bg-black border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
              >
                <a href="https://fexr.club/dashboard">Fexr Secure Compute</a>
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
                features and support.
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
              {/* <p
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
              </p> */}
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
                Fexr Secure Compute
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
                Ensuring every business owner get exactly what they need for
                scalability and compliance.
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
        {/* <FeatureList /> */}
        <SetupDemo />
        {/* TODO: bring this back in 2025 JAN (1/2): <SDK /> */}
        <Pricing/>
      </div>
    </section>
  );
}
