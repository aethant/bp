import { render } from "@testing-library/react";

import DisplayScaleIndicator from "./DisplayScaleIndicator";

describe("<DisplayScaleIndicator />", () => {
  it("should display `C` if is `isMetric` prop is omitted", () => {
    const { getByText } = render(<DisplayScaleIndicator />);

    expect(getByText("° C")).toBeInTheDocument();
  });

  it("should display `C` if is `isMetric` prop is true", () => {
    const { getByText } = render(<DisplayScaleIndicator isMetric />);

    expect(getByText("° C")).toBeInTheDocument();
  });

  it("should display `F` if is `isMetric` prop is false", () => {
    const { getByText } = render(<DisplayScaleIndicator isMetric={false} />);

    expect(getByText("° F")).toBeInTheDocument();
  });

  it("should render the children prop when present", () => {
    const { getByText } = render(
      <DisplayScaleIndicator isMetric={false}>451</DisplayScaleIndicator>
    );

    expect(getByText("451° F")).toBeInTheDocument();
  });
});
