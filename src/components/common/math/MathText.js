import React from 'react';
import PropTypes from 'prop-types';

import './math.css';

const MathText = (props) => {
  return (
    <span className="math-text">
      { props.children }
    </span>
  );
};

MathText.propTypes = {
  children: PropTypes.string
};

export default MathText;
