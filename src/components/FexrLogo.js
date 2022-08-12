import PropTypes from "prop-types";
import React from "react";

function FexrLogo({ width }) {
  FexrLogo.propTypes = {
    width: PropTypes.string.isRequired,
  };
  return (
    <img
      src="./img/logo.png"
      width={width}
      className="inline-block"
      alt="Fexr Logo"
    />
  );
}

export default FexrLogo;
