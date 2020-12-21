export const formatNumberNotation = (number = 0) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1).replace(/\$/, "") + `M`;
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

export const getTopLanguages = (obj: { [x: string]: number }) => {
  return Object.entries(obj)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
};
