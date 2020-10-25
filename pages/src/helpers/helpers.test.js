import buildQueryParams from "./buildQueryParams";
import { roundedTempValue, roundedTempValueAvg } from "./tempValues";

describe("helper functions", () => {
  it("buildQueryParams", () => {
    const result = buildQueryParams({ key1: "value1", key2: "value2" });

    expect(result).toBe("key1=value1&key2=value2");
  });

  it("roundedTempValue", () => {
    const result = roundedTempValue(25.23456);

    expect(result).toEqual(25);
  });

  it("roundedTempValueAvg", () => {
    const result = roundedTempValueAvg([
      { main: { temp: 25.23456 } },
      { main: { temp: 26.6 } },
      { main: { temp: 21.0 } },
    ]);

    expect(result).toEqual(24);
  });
});
