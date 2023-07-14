import React from 'react';

function SignInWith() {
  return (
    <div className="py-5">
      <div className="mx-auto max-w-md rounded-2lg bg-light-base py-5 px-10 text-center dark:bg-jacarta-700 sm:flex sm:items-center sm:text-left">
        <h4 className="mb-2 text-center font-display dark:text-white sm:mb-0 sm:text-left">
          Verified Checkout
        </h4>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="ml-auto inline-block rounded-full bg-accent py-2.5 px-8 text-center text-sm font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
          <span>Coming Soon for Brands</span>
        </a>
      </div>
    </div>
  );
}

export default SignInWith;
