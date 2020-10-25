import React from "react";
import PropTypes from "prop-types";

const DisplayScaleIndicator = ({ isMetric, children }) => (
  <span>
    {children}°&nbsp;{isMetric ? "C" : "F"}
  </span>
);

DisplayScaleIndicator.propTypes = {
  isMetric: PropTypes.bool,
  children: PropTypes.node,
};

DisplayScaleIndicator.defaultProps = {
  isMetric: true,
  children: null,
};

export default DisplayScaleIndicator;
