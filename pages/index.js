import { useEffect, useState } from "react";
import { usePosition } from "use-position";
import axios from "axios";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";

import Menubar from "./src/components/Menubar";
import Toolbar from "./src/components/Toolbar";
import Cards from "./src/components/Cards";
import ErrorMessage from "./src/components/ErrorMessage";

import debounce from "./src/helpers/debounce";
import buildQueryParams from "./src/helpers/buildQueryParams";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMetric, setIsMetric] = useState(true);
  const [location, setLocation] = useState();
  const [fiveday, setFiveday] = useState({});
  const [dateRange, setDateRange] = useState(Array(5));
  const [postalCode, setPostalCode] = useState(null);
  const [error, setError] = useState(null);

  const handleScaleChange = debounce(() => setIsMetric(!isMetric));

  const handlePostalCodeInput = debounce(({ target: { value } }) =>
    setPostalCode(value)
  );

  const { latitude, longitude } = usePosition(true, {
    enableHighAccuracy: true,
  });

  useEffect(() => {
    (async () => {
      try {
        if (!latitude && !longitude && !postalCode) return;

        setError(null);
        setIsLoading(true);

        const payload = postalCode
          ? { zip: postalCode }
          : { lat: latitude, lon: longitude };

        const qry = buildQueryParams(payload);

        const {
          data: { city: location = {}, forecast = {}, range = [] } = {},
        } = await axios.get(
          `/api/weather/data?metric=${isMetric ? 1 : 0}&${qry}`
        );

        setLocation(location);
        setFiveday(forecast);
        setDateRange(range);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setDateRange(Array(5));
      }
    })();
  }, [latitude, longitude, postalCode, isMetric]);

  return (
    <>
      <CssBaseline />
      <Menubar />
      <Wrapper>
        <Toolbar
          isMetric={isMetric}
          isLoading={isLoading}
          handlePostalCodeChange={handlePostalCodeInput}
          handleScaleChange={handleScaleChange}
          location={location}
        />
        <ErrorMessage error={error} />
        <Cards
          isLoading={isLoading}
          isMetric={isMetric}
          error={error}
          data={dateRange}
          days={fiveday}
        />
      </Wrapper>
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  width: 98%;
  max-width: 960px;
  position: relative;
  height: 75vh;

  @media (min-width: 768px) {
    justify-content: center;
    max-width: 95%;
  }

  @media (min-width: 960px) {
    max-width: 75%;
  }
`;
