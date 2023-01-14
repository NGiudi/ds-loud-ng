const blackColors = {
  _900: "#18181B",
  _800: "#27272A",
  _700: "#363636",
  _600: "#52525B",
  _500: "#71717A",
  _400: "#A1A1AA",
  _300: "#D4D4D8",
  _200: "#E4E4E7",
  _100: "#F4F4F5",
};

const orangeColors = {
  _900: "#7B441E",
  _800: "#B75404",
  _700: "#CE712A",
  _600: "#F47A1D",
  _500: "#F78223",
  _400: "#F79A51",
  _300: "#faad82",
  _200: "#FBBD89",
  _100: "#FEE4CD",
};

const alertColors = {
  bgColors: {
    error: "#FED7D7",
    info: "#D6EAF8",
    neutral: blackColors._100,
    success: "#C6F6D5",
    warning: "#F9E79F",
  },
  colors: {
    error: "#822727",
    info: "#21618C",
    neutral: blackColors,
    success: "#008F39",
    warning: "#B7950B",
  },
};

export const whiteTheme = {
  alert: alertColors,
  black: blackColors,
  orange: orangeColors,
};
