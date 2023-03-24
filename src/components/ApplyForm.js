import React, { useState } from 'react';

const purposeOptions = [
  'Identity & Key Management',
  'Passes & P2P Subscriptions',
  'Developer tools & Governance',
];

const responseOptions = [
  'I am authorised to represent my organisation in further discussions',
];

const inputClass = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
const checkBoxClass = 'mr-2 w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800';
const buttonClass = 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
function ApplyForm() {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [purpose, setPurpose] = useState({});
  const [responseChecked, setResponseChecked] = useState({});
  const [errorMessage, setError] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverResponse, setServerResponse] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        website,
        purpose: Object.keys(purpose),
        response: Object.keys(responseChecked),
        from_name: 'Fexr Apply Form',
        subject: 'Application',
        access_key: '6134bd07-a953-45f5-88a2-fb533a6ae5f2',
      }),
    }).then(async (res) => {
      const respJson = await res.json();
      if (respJson.success) {
        setServerResponse('Application submitted successfully. We\'ll get back to you soon.');
      } else {
        setError('Error submitting application.');
      }
    }).catch(() => {
      setError('Something went wrong.');
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

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
      {(!errorMessage && !serverResponse)
        && (
          <form className="card-body form-control" onSubmit={handleFormSubmit}>
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
              >
                Apply Now
              </button>
            </div>
          </form>
        )}

      {errorMessage && (
      <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
        {errorMessage}
      </div>
      )}
      {serverResponse && (
      <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
        {serverResponse}
      </div>
      )}
    </figure>
  );
}

export default ApplyForm;
