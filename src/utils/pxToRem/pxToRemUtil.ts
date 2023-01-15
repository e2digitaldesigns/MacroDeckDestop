const pxToRemUtil = (pixels: string) => {
  const number = parseFloat(pixels);
  return Number.isInteger(number) ? number / 16 + "rem" : pixels;
};

export default pxToRemUtil;
