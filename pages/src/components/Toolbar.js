import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";

const Toolbar = ({
  handleScaleChange,
  handlePostalCodeChange,
  isLoading,
  isMetric,
  location: { name, country },
}) => (
  <ToolsContainer>
    <ToolsGrid>
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>
          <label htmlFor="scale-switch">°F</label>
        </Grid>
        <Grid item>
          <Switch
            checked={isMetric}
            id="scale-switch"
            onChange={handleScaleChange}
          />
        </Grid>
        <Grid item>
          <label htmlFor="scale-switch">°C</label>
        </Grid>
        <Grid item>|</Grid>
        <Grid item>
          <strong>Location:&nbsp;</strong>
          {isLoading ? (
            "..."
          ) : (
            <span>
              {name}
              {country ? `, ${country}` : null}
            </span>
          )}
        </Grid>
      </Grid>
    </ToolsGrid>
    <StyledPostalCodeInput
      placeholder="Enter zip code"
      onChange={handlePostalCodeChange}
    />
  </ToolsContainer>
);

export default Toolbar;

const LocationPropType = PropTypes.shape({
  name: PropTypes.string,
  country: PropTypes.string,
});

Toolbar.propTypes = {
  handleScaleChange: PropTypes.func.isRequired,
  handlePostalCodeChange: PropTypes.func.isRequired,
  isMetric: PropTypes.bool,
  isLoading: PropTypes.bool,
  location: LocationPropType,
};

Toolbar.defaultProps = {
  isMetric: true,
  isLoading: true,
  location: {
    name: null,
    country: null,
  },
};

const ToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  margin: 0.85rem;
  position: relative;
  min-height: 5rem;
  height: auto;

  @media (min-width: 768px) {
    min-height: 3rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  &:after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    background: #696969;
    bottom: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ToolsGrid = styled.div`
  flex: 1;

  @media (min-width: 768px) {
    flex: 1 0 75%;
  }
`;

const StyledPostalCodeInput = styled(TextField)`
  appearance: textfield;
  margin: 0;
`;
