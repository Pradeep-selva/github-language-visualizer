type StringNumberObj = {
  [x: string]: number;
};

export const formatNumberNotation = (number = 0) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1).replace(/\$/, "") + `M`;
  }
  if (number >= 1000) {
    return (number / 1000).toFixed(1).replace(/\$/, "") + `K`;
  }
  return number;
};

export const formatChartData = (payload: StringNumberObj) => {
  const result = Object.keys(payload).map((key) => ({
    label: key,
    value: payload[key]
  }));

  return result;
};

export const getTopLanguages = (obj: StringNumberObj) => {
  return Object.entries(obj)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
};

export const getStackedChartData = (
  own: StringNumberObj,
  forked: StringNumberObj
) => {
  const labelKeys = Object.keys({ ...own, ...forked });
  const labels = labelKeys.map((key) => ({
    label: key
  }));

  const ownValues = labelKeys.map((key) => ({
    value: own[key] || 0
  }));

  const forkedValues = labelKeys.map((key) => ({
    value: forked[key] || 0
  }));

  return { labels, ownValues, forkedValues };
};
