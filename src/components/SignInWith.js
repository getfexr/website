import React from 'react';

function SignInWith() {
  return (
    <div className="mx-auto mt-20 max-w-md rounded-2lg bg-light-base py-5 px-10 text-center dark:bg-jacarta-700 sm:flex sm:items-center sm:text-left">
      <h4 className="mb-2 text-center font-display font-semibold text-jacarta-700 dark:text-white sm:mb-0 sm:text-left">
        Coming soon
      </h4>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="ml-auto inline-block rounded-full bg-accent py-2.5 px-8 text-center text-sm font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
        <span>Sign in with Fexr</span>
      </a>
    </div>
  );
}

export default SignInWith;
