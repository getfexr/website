import React, { useState } from 'react';

const purposeOptions = [
  'Smart Lock',
  'Payments on Blockchain',
  // 'Documents on Blockchain',
  'Tokenisation of Data',
];

const responseOptions = [
  'Is the project open source?',
  'I am authorised to represent my company in discussions with Fexr.',
];

const inputClass = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
const checkBoxClass = 'mr-2 w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800';
const buttonClass = 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
function ApplyForm() {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [purpose, setPurpose] = useState({});
  const [responseChecked, setResponseChecked] = useState({});

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSetWebsite = (e) => {
    setWebsite(e.target.value);
  };
  const handleSetPurpose = (e) => {
    const temp = purpose || {};
    if (e.target.checked) {
      temp[e.target.value] = true;
    } else {
      delete temp[e.target.value];
    }
    setPurpose(temp);
  };

  const handleSetResponse = (e) => {
    const temp = responseChecked || {};
    if (e.target.checked) {
      temp[e.target.value] = true;
    } else {
      delete temp[e.target.value];
    }
    setResponseChecked(temp);
  };

  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <form className="card-body form-control">

        <div className="my-3">
          <label
            htmlFor="email"
          >
            Your email
            <input
              name="email"
              type="email"
              placeholder="name@example.com"
              onChange={handleSetEmail}
              required
              className={inputClass}
            />
          </label>
        </div>

        <div className="my-3">
          <label
            htmlFor="url"
          >
            Your Website
            <input
              name="url"
              type="url"
              placeholder="https://example.com"
              required
              className={inputClass}
              onChange={handleSetWebsite}
            />
          </label>
        </div>

        <div>
          <div className="mb-9 mt-12 block">
            How do you plan to integrate with Fexr?
            {purposeOptions.map((opt) => (
              <div className="flex items-center gap-2" key={opt}>
                <label htmlFor={opt}>
                  <input type="checkbox" className={checkBoxClass} name={opt} value={opt} onChange={handleSetPurpose} />
                  {opt}
                </label>
              </div>
            ))}
          </div>

        </div>

        {responseOptions.map((value) => (
          <div className="flex items-center gap-2" key={value}>
            <label htmlFor={value}>
              <input type="checkbox" className={checkBoxClass} name={value} value={value} onChange={handleSetResponse} />
              {value}
            </label>
          </div>
        ))}

        <div className="mt-10">
          <button
            type="submit"
            className={buttonClass}
            onClick={function () {
              console.log('button clicked');
              console.log({
                email,
                website,
                purpose: Object.keys(purpose),
                response: Object.keys(responseChecked),
              });
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </figure>
  );
}

export default ApplyForm;
