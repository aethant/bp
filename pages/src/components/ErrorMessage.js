import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ErrorMessage = ({ error }) => (
  <ErrorMessageBar>{error ? error.message : null}</ErrorMessageBar>
);

export default ErrorMessage;

ErrorMessage.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

ErrorMessage.defaultProps = {
  error: {
    message: "Could not load data.",
  },
};

const ErrorMessageBar = styled.div`
  min-height: 1rem;
  font-weight: 700;
  color: #ff0000;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    min-height: 2rem;
    font-size: 1.2rem;
    justify-content: flex-start;
    margin-left: 0.85rem;
  }
`;
