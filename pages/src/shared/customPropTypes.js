import PropTypes from "prop-types";

export const DayPropType = PropTypes.shape({
  dt: PropTypes.number,
  main: PropTypes.shape({
    temp: PropTypes.number,
    feels_like: PropTypes.number,
    weather: PropTypes.arrayOf({
      description: PropTypes.string,
    }),
  }),
});
