import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

function Icon({ id, open }) {
  Icon.propTypes = {
    id: PropTypes.number.isRequired,
    open: PropTypes.number.isRequired,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="mb-14">
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 1}
        icon={<Icon id={1} open={open} />}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-sm"
          onClick={() => handleOpen(1)}
        >
          Is the Fexr wallet safe?
        </AccordionHeader>
        <AccordionBody
          className="accordion-body border-t border-jacarta-100 bg-white p-4
          dark:text-jacarta-200
          dark:border-jacarta-600 dark:bg-jacarta-700 text-base h-full"
        >
          Fexr is a non-custodial wallet, which means that you are in full
          control. Your private keys are stored locally on your device and never
          leave it. Fexr does not have access to your funds and cannot freeze or
          take them. Fexr is open-source and all plugins are available on GitHub
          public repository.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 2}
        icon={<Icon id={2} open={open} />}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-sm"
          onClick={() => handleOpen(2)}
        >
          Is Fexr free?
        </AccordionHeader>
        <AccordionBody
          className="accordion-body border-t border-jacarta-100 bg-white p-4
          dark:text-jacarta-200
          dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base"
        >
          Yes, Fexr is free to use. We do not charge any fees for using the
          wallet. Fexr also has some great, subscription-based features,
          including Fexr.Club, which is a console for Fexr users to rent high
          bandwidth blockchain nodes for fast transfers and earn rewards.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 3}
        icon={<Icon id={3} open={open} />}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-sm"
          onClick={() => handleOpen(3)}
        >
          Why are Fexr.Club details not visible in the website?
        </AccordionHeader>
        <AccordionBody
          className="accordion-body border-t border-jacarta-100 bg-white p-4
          dark:text-jacarta-200
          dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base"
        >
          Fexr.Club is a P2P subscription-aggregator and community passes service
          and we are not ready to disclose the details yet.
          We will announce the launch of Fexr.Club soon.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 4}
        icon={<Icon id={4} open={open} />}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-sm"
          onClick={() => handleOpen(4)}
        >
          Does Fexr allow me to create NFTs?
        </AccordionHeader>
        <AccordionBody
          className="accordion-body border-t border-jacarta-100 bg-white p-4
          dark:text-jacarta-200
          dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base"
        >
          This feature will be soon available to every user. Stay tuned!
        </AccordionBody>
      </Accordion>
    </div>
  );
}

export default FaqAccordion;
