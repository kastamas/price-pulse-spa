export const BILLION = 1000000000;
export const MILLION = 1000000;

export const prettifyNumber = (number: any) => {
  if (!isNaN(parseFloat(number)) && isFinite(number)) {
    return parseFloat(number).toLocaleString('en-US');
  }

  return number;
};
