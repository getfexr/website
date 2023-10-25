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
          Q1. What is Fexr wallet?
        </AccordionHeader>
        <AccordionBody
          className="accordion-body border-t border-jacarta-100 bg-white p-4
          dark:text-jacarta-200
          dark:border-jacarta-600 dark:bg-jacarta-700 text-base h-full"
        >
          A1. Fexr wallet is a self-custody wallet that allows you to manage
          your tokenized asset holdings securely and privately. It also offers a
          range of additional features, such as access to exclusive services and
          lower transaction fees.
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
          Q2. What is identity and key management?
        </AccordionHeader>
        <AccordionBody
          className="accordion-body border-t border-jacarta-100 bg-white p-4
          dark:text-jacarta-200
          dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base"
        >
          A2. ID and key management refers to the process of securely
          managing and storing your private keys and personal information to
          ensure the safety of your digital assets.
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
          Q3. How does Fexr wallet manage my identity and keys?
        </AccordionHeader>
        <AccordionBody
          className="accordion-body border-t border-jacarta-100 bg-white p-4
          dark:text-jacarta-200
          dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base"
        >
          A3. Fexr wallet allows you to store and manage your private keys
          securely and offline on your mobile device, and enables you
          to transact anonymously without revealing
          your identity or personal information.
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
          Q4. What is Fexr.Club?
        </AccordionHeader>
        <AccordionBody
          className="accordion-body border-t border-jacarta-100 bg-white p-4
          dark:text-jacarta-200
          dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base"
        >
          A4. Fexr.Club is an invite only subscription platform that allows users to access
          exclusive services and products, such as community passes and P2P
          subscription aggregators. It should be noted that the Fexr Club platform 
          is specifically designed for P2P subscriptions, and it is important to 
          distinguish this from the Fexr Wallet product. These two products have 
          distinct functionalities and features, and while they can work together 
          to provide a seamless user experience, it is important to keep in 
          mind that they serve different purposes.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 5}
        icon={<Icon id={5} open={open} />}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-sm"
          onClick={() => handleOpen(5)}
        >
          Q5. How do I access Fexr.Club?
        </AccordionHeader>
        <AccordionBody
          className="accordion-body border-t border-jacarta-100 bg-white p-4
          dark:text-jacarta-200
          dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base"
        >
          A5. You can access Fexr.Club by creating an account with Fexr wallet
          and signing up for the Fexr.Club membership.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 6}
        icon={<Icon id={6} open={open} />}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-sm"
          onClick={() => handleOpen(6)}
        >
          Q6. What are community passes?
        </AccordionHeader>
        <AccordionBody
          className="accordion-body border-t border-jacarta-100 bg-white p-4
          dark:text-jacarta-200
          dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base"
        >
          A6. Community passes are exclusive access tokens that allow you to
          participate in various community events, products, and services.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 7}
        icon={<Icon id={7} open={open} />}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-sm"
          onClick={() => handleOpen(7)}
        >
          Q7. What is a P2P subscription aggregator?
        </AccordionHeader>
        <AccordionBody
          className="accordion-body border-t border-jacarta-100 bg-white p-4
          dark:text-jacarta-200
          dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base"
        >
          A7. A P2P subscription aggregator is a platform that allows users to
          access subscription services from multiple providers in a single
          place.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 8}
        icon={<Icon id={8} open={open} />}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-sm"
          onClick={() => handleOpen(8)}
        >
          Q8. What are Sky APIs and SDKs?
        </AccordionHeader>
        <AccordionBody
          className="accordion-body border-t border-jacarta-100 bg-white p-4
          dark:text-jacarta-200
          dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base"
        >
          A8. Sky APIs and SDKs are developer tools and licensing services that
          allow developers to build and integrate tokenized asset-related
          features into their applications and services.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 9}
        icon={<Icon id={9} open={open} />}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-sm"
          onClick={() => handleOpen(9)}
        >
          Q9. How do I use Sky APIs and SDKs?
        </AccordionHeader>
        <AccordionBody
          className="accordion-body border-t border-jacarta-100 bg-white p-4
          dark:text-jacarta-200
          dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base"
        >
          A9. You can access and use Sky APIs and SDKs by setting up a Sky
          gateway with Fexr wallet and following the documentation and
          guidelines provided.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 10}
        icon={<Icon id={10} open={open} />}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-sm"
          onClick={() => handleOpen(10)}
        >
          Q10. Is Fexr wallet secure?
        </AccordionHeader>
        <AccordionBody
          className="accordion-body border-t border-jacarta-100 bg-white p-4
          dark:text-jacarta-200
          dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base"
        >
          A10. Yes, Fexr wallet is designed to provide enhanced security and
          privacy for your digital assets. By allowing you to store and manage
          your private keys securely, and transact anonymously, Fexr wallet
          reduces the risk of theft or loss due to hacks or breaches on
          third-party custodial platforms.
        </AccordionBody>
      </Accordion>
    </div>
  );
}

export default FaqAccordion;
