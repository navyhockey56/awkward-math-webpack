import React from 'react';
import PropTypes from 'prop-types';

const RightArrowIcon = (props) => (
  <svg
    fill={ props.color || "#ffffff" }
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z" />
  </svg>
);

RightArrowIcon.propTypes = {
  color: PropTypes.string
}

export default RightArrowIcon;
