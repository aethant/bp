import Axios from "axios";
import fromUnixTime from "date-fns/fromUnixTime";
import format from "date-fns/format";

import buildQueryParams from "../../src/helpers/buildQueryParams";

const DAYS_TO_DISPLAY = 5;
const { OPEN_WEATHER_API_KEY } = process.env;

export default async (req, res) => {
  try {
    const { query: { metric, lat, lon, zip } = {} } = { ...req };
    const qry = buildQueryParams({
      appid: OPEN_WEATHER_API_KEY,
      units: Boolean(Number(metric)) ? "metric" : "imperial",
      ...(lat && lon ? { lat, lon } : {}),
      ...(zip ? { zip } : {}),
      ...(!lat && !lon && !zip ? { zip: "60603" } : {}),
    });

    const { data: { city, list: forecast } = {} } = await Axios({
      method: "get",
      url: `https://api.openweathermap.org/data/2.5/forecast?${qry}`,
    });

    if (!forecast || !forecast.length) return res.send({ city, forecast: {} });

    const groupedForecasts = forecast.reduce((accumulator, cast) => {
      const d = format(fromUnixTime(cast.dt), "yyyymmdd");

      return {
        ...accumulator,
        [d]: [...(accumulator[d] || []), cast],
      };
    }, {});

    return res.send({
      city,
      forecast: groupedForecasts,
      range: Object.keys(groupedForecasts).slice(0, DAYS_TO_DISPLAY),
    });
  } catch (error) {
    return res.status(404).send({
      message: error.message,
    });
  }
};
