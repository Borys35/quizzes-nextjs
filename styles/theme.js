export const fontFamilies = {
  heading: "'Proza Libre', sans-serif",
  body: "'Open Sans', sans-serif",
};

export const fontSizes = {
  heading: {
    md: "2.25rem",
    lg: "3rem",
    xl: "4rem",
  },
  body: {
    sm: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
    xl: "2.25rem",
  },
};

export const colors = {
  textWhite: "#F8F8F8",
  textGrey: "#D0D0D0",
  textBlack: "#171717",
  textRed: "#FF1010",
  backgroundLight: "#3C096C",
  backgroundMedium: "#410A75",
  backgroundDark: "#240046",
  atomPrimary: "#FDC500",
  atomSecondary: "#5A189A",
  atomLight: "#7B2CBF",
  atomLighter: "#9D4EDD",
  answerCorrect: "#217D12",
  answerIncorrect: "#8F2A14",
  answerSelected: "#9A1895",
};

export const breakpoints = {
  phone: "420px",
  tablet: "680px",
  wideTablet: "900px",
  desktop: "1200px",
  wide: "1500px",
};

export const mq = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key] = `@media (min-width: ${breakpoints[key]})`;
  return acc;
}, {});

export const paddings = {
  phone: "24px",
  desktop: "96px",
};

export default {
  fontFamilies,
  fontSizes,
  colors,
  breakpoints,
  mq,
  paddings,
};
