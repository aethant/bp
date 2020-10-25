import React from "react";
import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import fromUnixTime from "date-fns/fromUnixTime";
import format from "date-fns/format";

import DisplayScaleIndicator from "./DisplayScaleIndicator";
import { roundedTempValue, roundedTempValueAvg } from "../helpers/tempValues";
import { DayPropType } from "../shared/customPropTypes";

const SingleCard = ({ isErrorCard, isLoadingCard, day, isMetric }) => {
  if (isErrorCard) {
    return (
      <StyledCard haserror={String(isErrorCard)}>
        <CardContent />
      </StyledCard>
    );
  }

  if (isLoadingCard) {
    return (
      <StyledCard isloading={String(isLoadingCard)}>
        <CardContent />
      </StyledCard>
    );
  }

  const [{ dt: datetime }] = [...day];
  const average = roundedTempValueAvg(day);
  const averageFeelsLike = roundedTempValueAvg(day, "feels_like");
  const [{ weather: [{ description } = {}] = [] } = {}] = day;

  return (
    <StyledCard key={datetime} data-testid="forecast-card">
      <CardContent>
        <DayHeader>{format(fromUnixTime(datetime), "eeee, MMMM dd")}</DayHeader>
        <AvergageTemp>
          <DisplayScaleIndicator isMetric={isMetric}>
            {average}
          </DisplayScaleIndicator>
        </AvergageTemp>
        <Subdetails data-testid="feels-like-temp">
          <DisplayScaleIndicator isMetric={isMetric}>
            <i>Feels like</i>&nbsp;{averageFeelsLike}
          </DisplayScaleIndicator>
        </Subdetails>
        <Subdetails data-testid="conditions-desc">{description}</Subdetails>
        {day.map(({ dt, main: { temp } = {} }) => (
          <LookingAheadForecastRow key={dt} data-testid="future-forecast">
            <div>{format(fromUnixTime(dt), "h a")} </div>
            <div>
              {roundedTempValue(temp)}
              <DisplayScaleIndicator isMetric={isMetric} />
            </div>
          </LookingAheadForecastRow>
        ))}
      </CardContent>
    </StyledCard>
  );
};

export default SingleCard;

SingleCard.propTypes = {
  isErrorCard: PropTypes.bool,
  isLoadingCard: PropTypes.bool,
  day: PropTypes.arrayOf(DayPropType),
};

SingleCard.defaultProps = {
  isErrorCard: false,
  isLoadingCard: false,
  day: [],
};

const StyledCard = styled(Card)`
  flex: 0 0 18.5%;
  height: auto;
  min-height: 30vh;
  margin: 5px;

  ${(props) =>
    props.isloading &&
    css`
      animation-duration: 0.25s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: ${pulse};
      animation-timing-function: linear;
      background: #f6f7f8;
      background: linear-gradient(
        to right,
        #eeeeee 8%,
        #dddddd 18%,
        #eeeeee 33%
      );
      background-size: 800px 104px;
      height: 96px;
      position: relative;
    `}

  ${(props) =>
    props.haserror &&
    css`
      opacity: 0.5;
    `}
`;

const Subdetails = styled.h6`
  font-size: 0.35rem;
  font-weight: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.25rem 0;
`;

const LookingAheadForecastRow = styled.li`
  color: #131313;
  font-size: 0.5rem;
  list-style: none;
  padding: 2px 0.5rem;
  display: flex;
  justify-content: space-between;

  &:nth-child(even) {
    background: #eaeaea;
  }
`;

const DayHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 700;
  position: relative;
  white-space: pre;
  flex-wrap: nowrap;

  &:after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    left: 0;
    background: #696969;
    bottom: -0.5rem;
  }
`;

const AvergageTemp = styled.div`
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin: 1rem 0;
`;

const pulse = keyframes`
   0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
`;
