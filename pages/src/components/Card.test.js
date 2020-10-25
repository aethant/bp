import { render } from "@testing-library/react";

import Card from "./Card";

describe("<Card />", () => {
  it("should render an error state", () => {
    expect(render(<Card isErrorCard />));
  });

  it("should render a loading state", () => {
    expect(render(<Card isLoadingCard />));
  });

  it("should render with data present", () => {
    const { queryByText } = render(<Card day={day} isMetric />);

    expect(queryByText("8° C")).toBeInTheDocument();
  });

  it("should display the day, month and date in the card", () => {
    const { queryByText } = render(<Card day={day} isMetric />);
    expect(queryByText("Thursday, October 29")).toBeInTheDocument();
  });

  it("should display the feels like temp", () => {
    const { queryByTestId } = render(<Card day={day} isMetric />);
    expect(queryByTestId("feels-like-temp")).toHaveTextContent(
      "Feels like 0° C"
    );
  });

  it("should display a text description of the weather conditions", () => {
    const { queryByTestId } = render(<Card day={day} isMetric />);
    expect(queryByTestId("conditions-desc")).toHaveTextContent("broken clouds");
  });

  it("should display a list of conditions on a 3hr interval", () => {
    const { queryAllByTestId } = render(<Card day={day} isMetric />);
    expect(queryAllByTestId("future-forecast").length).toEqual(8);
  });

  it("should display a time, temp and scale as a future weather condition", () => {
    const { queryAllByTestId } = render(<Card day={day} isMetric />);
    expect(queryAllByTestId("future-forecast")[0]).toHaveTextContent(
      "1 AM 9° C"
    );
  });
});

const day = [
  {
    dt: 1603951200,
    main: {
      temp: 8.76,
      feels_like: 2.15,
      temp_min: 8.76,
      temp_max: 8.76,
      pressure: 1012,
      sea_level: 1012,
      grnd_level: 991,
      humidity: 63,
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
      all: 58,
    },
    wind: {
      speed: 7.08,
      deg: 5,
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
      temp: 7.35,
      feels_like: 0.07,
      temp_min: 7.35,
      temp_max: 7.35,
      pressure: 1012,
      sea_level: 1012,
      grnd_level: 990,
      humidity: 82,
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
      speed: 8.65,
      deg: 11,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "n",
    },
    dt_txt: "2020-10-29 09:00:00",
  },
  {
    dt: 1603972800,
    main: {
      temp: 8.13,
      feels_like: 0.55,
      temp_min: 8.13,
      temp_max: 8.13,
      pressure: 1014,
      sea_level: 1014,
      grnd_level: 992,
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
      all: 100,
    },
    wind: {
      speed: 8.98,
      deg: 16,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: "n",
    },
    dt_txt: "2020-10-29 12:00:00",
  },
  {
    dt: 1603983600,
    main: {
      temp: 7.83,
      feels_like: 0.85,
      temp_min: 7.83,
      temp_max: 7.83,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 993,
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
      speed: 8,
      deg: 25,
    },
    visibility: 10000,
    pop: 0.52,
    rain: {
      "3h": 0.64,
    },
    sys: {
      pod: "d",
    },
    dt_txt: "2020-10-29 15:00:00",
  },
  {
    dt: 1603994400,
    main: {
      temp: 7.58,
      feels_like: 0.38,
      temp_min: 7.58,
      temp_max: 7.58,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 993,
      humidity: 73,
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
      speed: 8.16,
      deg: 34,
    },
    visibility: 10000,
    pop: 0.86,
    rain: {
      "3h": 1.06,
    },
    sys: {
      pod: "d",
    },
    dt_txt: "2020-10-29 18:00:00",
  },
  {
    dt: 1604005200,
    main: {
      temp: 7.49,
      feels_like: 0.97,
      temp_min: 7.49,
      temp_max: 7.49,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 994,
      humidity: 76,
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
      speed: 7.31,
      deg: 23,
    },
    visibility: 10000,
    pop: 0.9,
    rain: {
      "3h": 1.29,
    },
    sys: {
      pod: "d",
    },
    dt_txt: "2020-10-29 21:00:00",
  },
  {
    dt: 1604016000,
    main: {
      temp: 7.37,
      feels_like: -0.17,
      temp_min: 7.37,
      temp_max: 7.37,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 997,
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
      speed: 8.74,
      deg: 5,
    },
    visibility: 10000,
    pop: 0.94,
    rain: {
      "3h": 0.73,
    },
    sys: {
      pod: "n",
    },
    dt_txt: "2020-10-30 00:00:00",
  },
  {
    dt: 1604026800,
    main: {
      temp: 6.2,
      feels_like: -1.7,
      temp_min: 6.2,
      temp_max: 6.2,
      pressure: 1021,
      sea_level: 1021,
      grnd_level: 999,
      humidity: 78,
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
      all: 99,
    },
    wind: {
      speed: 9.05,
      deg: 6,
    },
    visibility: 10000,
    pop: 0.8,
    rain: {
      "3h": 0.53,
    },
    sys: {
      pod: "n",
    },
    dt_txt: "2020-10-30 03:00:00",
  },
];
