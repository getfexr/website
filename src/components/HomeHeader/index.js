import React from 'react';

function HomepageHeader() {

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Accelerating Engagement. A Faster Funnel, A Better Business.
          </h1>
          <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            We've crafted an unparalleled experience, emphasizing swift
            interactions within premium communities.
            <a href="https://fexr.club/form/clricavou0000ilxn1um335cr">
              {" "}
              Contact{" "}
            </a>
            to learn more.
          </p>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="./img/landing/1002x301.png"
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="./img/landing/600x360.png"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="./img/landing/601x361.png"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="./img/landing/502x302.png"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="./img/landing/503x303.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageHeader;
