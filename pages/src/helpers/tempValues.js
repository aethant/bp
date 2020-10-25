export const roundedTempValue = (tmp) =>
  Math.round(parseFloat(Number(tmp).toFixed(1)));

export const roundedTempValueAvg = (days = [], key = "temp") =>
  roundedTempValue(
    days.reduce((a, i) => a + Number(i.main[key]), 0) / days.length
  );
