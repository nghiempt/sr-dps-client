// conert number to 1.000, 10.000, 100.000, 1.000.000, 10.000.000, 100.000.000, 1.000.000.000, 10.000.000.000
export const convertNumber = (number: number) => {
  if (number < 1000) {
    return number;
  } else if (number < 10000) {
    return `${Math.floor(number / 1000)}K`;
  } else if (number < 100000) {
    return `${(number / 1000).toFixed(1)}K`;
  } else if (number < 1000000) {
    return `${Math.floor(number / 1000)}K`;
  } else if (number < 10000000) {
    return `${Math.floor(number / 1000000)}M`;
  } else if (number < 100000000) {
    return `${(number / 1000000).toFixed(1)}M`;
  } else if (number < 1000000000) {
    return `${Math.floor(number / 1000000)}M`;
  } else if (number < 10000000000) {
    return `${Math.floor(number / 1000000000)}B`;
  } else {
    return `${(number / 1000000000).toFixed(1)}B`;
  }
};