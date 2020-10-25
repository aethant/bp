import { render } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("<ErrorMessage />", () => {
  it("renders with default message (no props)", () => {
    const { getByText } = render(<ErrorMessage />);
    const el = getByText(/Could not load data./);
    expect(el).toBeInTheDocument();
    expect(el).toHaveStyleRule("color", "#ff0000");
  });

  it("renders with error.message via `error` prop", () => {
    const { getByText } = render(
      <ErrorMessage error={{ message: "No dice" }} />
    );
    const el = getByText(/No dice/);
    expect(el).toBeInTheDocument();
    expect(el).toHaveStyleRule("color", "#ff0000");
  });

  it("renders nothing with null `error` prop", () => {
    const { queryByText } = render(<ErrorMessage error={null} />);
    expect(queryByText(/Could not load data./)).not.toBeInTheDocument();
  });
});
