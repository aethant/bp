import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card from "./Card";
import { DayPropType } from "../shared/customPropTypes";

const Cards = ({ isLoading, isMetric, error, data, days }) => (
  <CardContainer>
    {data.map((day, i) => (
      <Card
        key={i}
        isErrorCard={Boolean(error)}
        isLoadingCard={isLoading}
        day={days[day]}
        isMetric={isMetric}
      />
    ))}
  </CardContainer>
);

export default Cards;

Cards.propTypes = {
  isLoading: PropTypes.bool,
  isMetric: PropTypes.bool,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  data: PropTypes.arrayOf(PropTypes.string),
  days: PropTypes.objectOf(PropTypes.arrayOf(DayPropType)),
};

Cards.defaultProps = {
  isLoading: true,
  isMetric: true,
  error: null,
  data: [],
  days: {},
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 1rem 0;
  height: auto;

  @media (min-width: 768px) {
    height: 30vh;
    min-height: 30vh;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
