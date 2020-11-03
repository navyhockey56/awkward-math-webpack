import React from 'react';
import PropTypes from 'prop-types';

const LeftArrowIcon = (props) => (
  <svg
    fill={ props.color || "#ffffff" }
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z" />
  </svg>
);

LeftArrowIcon.propTypes = {
  color: PropTypes.string
}

export default LeftArrowIcon;
