export const formatNumberNotation = (number = 0) => {
  if (number >= 100000) {
    return (number / 100000).toFixed(1).replace(/\$/, "") + `L`;
  }
  if (number >= 1000) {
    return (number / 1000).toFixed(1).replace(/\$/, "") + `K`;
  }
  return number;
};

export const formatChartData = (payload: { [x: string]: number }) => {
  const result = Object.keys(payload).map((key) => ({
    label: key,
    value: payload[key]
  }));

  return result;
};
