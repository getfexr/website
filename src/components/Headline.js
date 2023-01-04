import React from 'react';
import PropTypes from 'prop-types';

function Headline({
  text, classes, image, para,
}) {
  Headline.propTypes = {
    text: PropTypes.string.isRequired,
    classes: PropTypes.string,
    image: PropTypes.string,
    para: PropTypes.string,
  };

  Headline.defaultProps = {
    classes: '',
    image: '',
    para: '',
  };

  return (
    <div>
      <h2 className={classes}>
        {image && (
          <img
            src={image}
            alt="headling"
            className="mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl"
          />
        )}

        {text}
      </h2>
      {para && (
        <p className="dark:text-jacarta-300 mt-6">
          {para}
        </p>
      )}
    </div>
  );
}

export default Headline;
