import { render } from "@testing-library/react";

import Cards from "./Cards";

describe("<Cards />", () => {
  it("should render cards under container", () => {
    const { queryAllByTestId } = render(
      <Cards data={data} days={days} isMetric isLoading={false} error={null} />
    );
    expect(queryAllByTestId("forecast-card").length).toEqual(5);
  });
});

const data = ["20200025", "20200026", "20200027", "20200028", "20200029"];

const days = {
  20200025: [
    {
      dt: 1603648800,
      main: {
        temp: 7.82,
        feels_like: 2.5,
        temp_min: 7.8,
        temp_max: 7.82,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1001,
        humidity: 66,
        temp_kf: 0.02,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 5.18,
        deg: 64,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-10-25 18:00:00",
    },
    {
      dt: 1603659600,
      main: {
        temp: 7.58,
        feels_like: 1.85,
        temp_min: 7.51,
        temp_max: 7.58,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1000,
        humidity: 63,
        temp_kf: 0.07,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 5.56,
        deg: 42,
      },
      visibility: 10000,
      pop: 0.03,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-10-25 21:00:00",
    },
    {
      dt: 1603670400,
      main: {
        temp: 6.93,
        feels_like: 0.5,
        temp_min: 6.87,
        temp_max: 6.93,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1000,
        humidity: 70,
        temp_kf: 0.06,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.76,
        deg: 32,
      },
      visibility: 10000,
      pop: 0.23,
      rain: {
        "3h": 0.13,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-26 00:00:00",
    },
    {
      dt: 1603681200,
      main: {
        temp: 7.58,
        feels_like: 1.8,
        temp_min: 7.58,
        temp_max: 7.58,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1001,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.88,
        deg: 43,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-26 03:00:00",
    },
  ],
  20200026: [
    {
      dt: 1603692000,
      main: {
        temp: 8.04,
        feels_like: 3.07,
        temp_min: 8.04,
        temp_max: 8.04,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1000,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.57,
        deg: 36,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-26 06:00:00",
    },
    {
      dt: 1603702800,
      main: {
        temp: 7.15,
        feels_like: 1.43,
        temp_min: 7.15,
        temp_max: 7.15,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1001,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.08,
        deg: 20,
      },
      visibility: 10000,
      pop: 0.29,
      rain: {
        "3h": 0.15,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-26 09:00:00",
    },
    {
      dt: 1603713600,
      main: {
        temp: 5.5,
        feels_like: -1.11,
        temp_min: 5.5,
        temp_max: 5.5,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1002,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.17,
        deg: 354,
      },
      visibility: 10000,
      pop: 0.22,
      rain: {
        "3h": 0.33,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-26 12:00:00",
    },
    {
      dt: 1603724400,
      main: {
        temp: 4.24,
        feels_like: -1.79,
        temp_min: 4.24,
        temp_max: 4.24,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1004,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.14,
        deg: 349,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.92,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-10-26 15:00:00",
    },
    {
      dt: 1603735200,
      main: {
        temp: 6.25,
        feels_like: 1.01,
        temp_min: 6.25,
        temp_max: 6.25,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1004,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 4.78,
        deg: 9,
      },
      visibility: 10000,
      pop: 0.82,
      rain: {
        "3h": 0.1,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-10-26 18:00:00",
    },
    {
      dt: 1603746000,
      main: {
        temp: 5.74,
        feels_like: 0.65,
        temp_min: 5.74,
        temp_max: 5.74,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1003,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.41,
        deg: 13,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-10-26 21:00:00",
    },
    {
      dt: 1603756800,
      main: {
        temp: 5.59,
        feels_like: 0.67,
        temp_min: 5.59,
        temp_max: 5.59,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1004,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.14,
        deg: 28,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-27 00:00:00",
    },
    {
      dt: 1603767600,
      main: {
        temp: 5.69,
        feels_like: 1.36,
        temp_min: 5.69,
        temp_max: 5.69,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1005,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.32,
        deg: 3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-27 03:00:00",
    },
  ],
  20200027: [
    {
      dt: 1603778400,
      main: {
        temp: 5.19,
        feels_like: 1.02,
        temp_min: 5.19,
        temp_max: 5.19,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1005,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 75,
      },
      wind: {
        speed: 3.12,
        deg: 2,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-27 06:00:00",
    },
    {
      dt: 1603789200,
      main: {
        temp: 5.17,
        feels_like: 1.55,
        temp_min: 5.17,
        temp_max: 5.17,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1005,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 2.29,
        deg: 350,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-27 09:00:00",
    },
    {
      dt: 1603800000,
      main: {
        temp: 4.73,
        feels_like: 1.1,
        temp_min: 4.73,
        temp_max: 4.73,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1004,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 2.33,
        deg: 343,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-27 12:00:00",
    },
    {
      dt: 1603810800,
      main: {
        temp: 5.14,
        feels_like: 0.44,
        temp_min: 5.14,
        temp_max: 5.14,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1006,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 3.94,
        deg: 321,
      },
      visibility: 10000,
      pop: 0.11,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-10-27 15:00:00",
    },
    {
      dt: 1603821600,
      main: {
        temp: 5.16,
        feels_like: 1.26,
        temp_min: 5.16,
        temp_max: 5.16,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1004,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 3.26,
        deg: 322,
      },
      visibility: 10000,
      pop: 0.25,
      rain: {
        "3h": 0.18,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-10-27 18:00:00",
    },
    {
      dt: 1603832400,
      main: {
        temp: 5.88,
        feels_like: 2.3,
        temp_min: 5.88,
        temp_max: 5.88,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1002,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.67,
        deg: 344,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-10-27 21:00:00",
    },
    {
      dt: 1603843200,
      main: {
        temp: 6.16,
        feels_like: 4.12,
        temp_min: 6.16,
        temp_max: 6.16,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1003,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.41,
        deg: 284,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-28 00:00:00",
    },
    {
      dt: 1603854000,
      main: {
        temp: 6.33,
        feels_like: 4.05,
        temp_min: 6.33,
        temp_max: 6.33,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1002,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.79,
        deg: 260,
      },
      visibility: 10000,
      pop: 0.1,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-28 03:00:00",
    },
  ],
  20200028: [
    {
      dt: 1603864800,
      main: {
        temp: 6.55,
        feels_like: 3.81,
        temp_min: 6.55,
        temp_max: 6.55,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1001,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.49,
        deg: 260,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-28 06:00:00",
    },
    {
      dt: 1603875600,
      main: {
        temp: 6.67,
        feels_like: 4.05,
        temp_min: 6.67,
        temp_max: 6.67,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 999,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.4,
        deg: 278,
      },
      visibility: 10000,
      pop: 0.11,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-28 09:00:00",
    },
    {
      dt: 1603886400,
      main: {
        temp: 6.63,
        feels_like: 4.16,
        temp_min: 6.63,
        temp_max: 6.63,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 999,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 1.12,
        deg: 302,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-28 12:00:00",
    },
    {
      dt: 1603897200,
      main: {
        temp: 7.99,
        feels_like: 5.78,
        temp_min: 7.99,
        temp_max: 7.99,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 999,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 0.88,
        deg: 201,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-10-28 15:00:00",
    },
    {
      dt: 1603908000,
      main: {
        temp: 10.6,
        feels_like: 8.47,
        temp_min: 10.6,
        temp_max: 10.6,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 996,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1.06,
        deg: 9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-10-28 18:00:00",
    },
    {
      dt: 1603918800,
      main: {
        temp: 10.41,
        feels_like: 7.14,
        temp_min: 10.41,
        temp_max: 10.41,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 993,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 2.93,
        deg: 60,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-10-28 21:00:00",
    },
    {
      dt: 1603929600,
      main: {
        temp: 9.7,
        feels_like: 6.6,
        temp_min: 9.7,
        temp_max: 9.7,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 993,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 3.02,
        deg: 104,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-29 00:00:00",
    },
    {
      dt: 1603940400,
      main: {
        temp: 9.74,
        feels_like: 6.33,
        temp_min: 9.74,
        temp_max: 9.74,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 992,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.7,
        deg: 37,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-29 03:00:00",
    },
  ],
  20200029: [
    {
      dt: 1603951200,
      main: {
        temp: 9.71,
        feels_like: 4.84,
        temp_min: 9.71,
        temp_max: 9.71,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 990,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 5.27,
        deg: 35,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-29 06:00:00",
    },
    {
      dt: 1603962000,
      main: {
        temp: 9.13,
        feels_like: 3.02,
        temp_min: 9.13,
        temp_max: 9.13,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 988,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.99,
        deg: 32,
      },
      visibility: 10000,
      pop: 0.56,
      rain: {
        "3h": 1.15,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-29 09:00:00",
    },
    {
      dt: 1603972800,
      main: {
        temp: 8.24,
        feels_like: 1.47,
        temp_min: 8.24,
        temp_max: 8.24,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 988,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.76,
        deg: 35,
      },
      visibility: 10000,
      pop: 0.8,
      rain: {
        "3h": 2.98,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-29 12:00:00",
    },
    {
      dt: 1603983600,
      main: {
        temp: 7.85,
        feels_like: 0.3,
        temp_min: 7.85,
        temp_max: 7.85,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 987,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.82,
        deg: 30,
      },
      visibility: 10000,
      pop: 0.96,
      rain: {
        "3h": 2.13,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-10-29 15:00:00",
    },
    {
      dt: 1603994400,
      main: {
        temp: 6.85,
        feels_like: 0.02,
        temp_min: 6.85,
        temp_max: 6.85,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 986,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.06,
        deg: 32,
      },
      visibility: 3936,
      pop: 1,
      rain: {
        "3h": 7.87,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-10-29 18:00:00",
    },
    {
      dt: 1604005200,
      main: {
        temp: 7.36,
        feels_like: 0.19,
        temp_min: 7.36,
        temp_max: 7.36,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 986,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.64,
        deg: 12,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 6.67,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-10-29 21:00:00",
    },
    {
      dt: 1604016000,
      main: {
        temp: 8.53,
        feels_like: 0.43,
        temp_min: 8.53,
        temp_max: 8.53,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 989,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 10.04,
        deg: 4,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.07,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-30 00:00:00",
    },
    {
      dt: 1604026800,
      main: {
        temp: 6.77,
        feels_like: -1.44,
        temp_min: 6.77,
        temp_max: 6.77,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 993,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 9.36,
        deg: 344,
      },
      visibility: 10000,
      pop: 0.54,
      rain: {
        "3h": 0.36,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-30 03:00:00",
    },
  ],
  20200030: [
    {
      dt: 1604037600,
      main: {
        temp: 4.25,
        feels_like: -2.9,
        temp_min: 4.25,
        temp_max: 4.25,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 994,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 72,
      },
      wind: {
        speed: 7.35,
        deg: 330,
      },
      visibility: 10000,
      pop: 0.34,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-30 06:00:00",
    },
    {
      dt: 1604048400,
      main: {
        temp: 2.91,
        feels_like: -3.62,
        temp_min: 2.91,
        temp_max: 2.91,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 996,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 34,
      },
      wind: {
        speed: 6.42,
        deg: 325,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-30 09:00:00",
    },
    {
      dt: 1604059200,
      main: {
        temp: 1.8,
        feels_like: -4.49,
        temp_min: 1.8,
        temp_max: 1.8,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 998,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 32,
      },
      wind: {
        speed: 6.06,
        deg: 329,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2020-10-30 12:00:00",
    },
    {
      dt: 1604070000,
      main: {
        temp: 2.57,
        feels_like: -3.24,
        temp_min: 2.57,
        temp_max: 2.57,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1001,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 34,
      },
      wind: {
        speed: 5.32,
        deg: 330,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2020-10-30 15:00:00",
    },
  ],
};
