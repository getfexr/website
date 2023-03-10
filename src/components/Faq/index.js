import React from 'react';
import FaqAccordion from './Accordion';

function Faq() {
  return (
    <div>
      {/* <!-- FAQ --> */}
      <section className="relative py-24">
        <div className="container">
          <div className="justify-between lg:flex lg:space-x-20">
            <div className="lg:w-[45%]">
              <h2 className="mb-6 font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="mb-12 text-lg dark:text-jacarta-300" />

              <FaqAccordion />

              <p className="text-lg text-jacarta-700 dark:text-jacarta-100">
                Any Question?
                {' '}
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="text-accent">
                  info@fexr.club
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end faq --> */}
    </div>
  );
}

export default Faq;
