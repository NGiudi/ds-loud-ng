const lineHeights = {
  xs: "18px",
  sm: "20px",
  md: "28px",
  lg: "32px",
  xl: "42px",
};

const sizes = {
  xs: "12px",
  sm: "14px",
  md: "18px",
  lg: "22px",
  xl: "28px",
};

export const weights = {
  bold: 800,
  regular: 400,
  semibold: 600,
};

const types = {
  bodyRegular: {
    lineHeight: lineHeights.sm,
    size: sizes.sm,
    weight: weights.regular,
  },
  bodySemibold: {
    lineHeight: lineHeights.sm,
    size: sizes.sm,
    weight: weights.semibold,
  },
  captionRegular: {
    lineHeight: lineHeights.xs,
    size: sizes.xs,
    weight: weights.regular,
  },
  captionSemibold: {
    lineHeight: lineHeights.xs,
    size: sizes.xs,
    weight: weights.semibold,
  },
  pageTitle: {
    lineHeight: lineHeights.xl,
    size: sizes.xl,
    weight: weights.bold,
  },
  subtitle: {
    lineHeight: lineHeights.md,
    size: sizes.md,
    weight: weights.semibold,
  },
  title: {
    lineHeight: lineHeights.lg,
    size: sizes.lg,
    weight: weights.bold,
  },
};

export const text = {
  lineHeights,
  sizes,
  types,
  weights,
};
