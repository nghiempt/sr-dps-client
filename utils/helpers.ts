// convert number to string
export const convertNumberToString = (number: number) => {
  switch (true) {
    case number < 1000:
      return number;
    case number < 10000:
      return `${Math.floor(number / 1000)}K`;
    case number < 100000:
      return `${(number / 1000).toFixed(1)}K`;
    case number < 1000000:
      return `${Math.floor(number / 1000)}K`;
    case number < 10000000:
      return `${Math.floor(number / 1000000)}M`;
    case number < 100000000:
      return `${(number / 1000000).toFixed(1)}M`;
    case number < 1000000000:
      return `${Math.floor(number / 1000000)}M`;
    case number < 10000000000:
      return `${Math.floor(number / 1000000000)}B`;
    default:
      return `${(number / 1000000000).toFixed(1)}B`;
  }
};