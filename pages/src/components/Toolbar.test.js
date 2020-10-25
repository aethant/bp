import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Toolbar from "./Toolbar";

describe("<ErrorMessage />", () => {
  it("should render", () => {
    const { getByText, getByPlaceholderText } = render(
      <Toolbar
        handleScaleChange={() => null}
        handlePostalCodeChange={() => null}
        isLoading={false}
        location={{ name: "Chicago", country: "US" }}
      />
    );

    expect(getByText(/Location:/)).toBeInTheDocument();
    expect(getByText(/Chicago, US/)).toBeInTheDocument();
    expect(getByText(/°F/)).toBeInTheDocument();
    expect(getByText(/°C/)).toBeInTheDocument();
    expect(getByPlaceholderText(/Enter zip code/)).toBeInTheDocument();
  });

  it("should fire the `handleScaleChange` function passed via props", () => {
    const mockScaleChangeHandler = jest.fn();

    const { getByText } = render(
      <Toolbar
        handleScaleChange={mockScaleChangeHandler}
        handlePostalCodeChange={() => null}
        isLoading={false}
        location={{ name: "Chicago", country: "US" }}
      />
    );

    userEvent.click(getByText(/°F/));
    userEvent.click(getByText(/°C/));
    expect(mockScaleChangeHandler).toHaveBeenCalledTimes(2);
  });

  it("should fire the `handlePostalCodeChange` function passed via props", () => {
    const mockPostalCodeChangeHandler = jest.fn();

    const { getByPlaceholderText } = render(
      <Toolbar
        handleScaleChange={() => null}
        handlePostalCodeChange={mockPostalCodeChangeHandler}
        isLoading={false}
        location={{ name: "Chicago", country: "US" }}
      />
    );

    userEvent.type(getByPlaceholderText(/Enter zip code/), "123");
    expect(mockPostalCodeChangeHandler).toHaveBeenCalledTimes(3);
  });
});
