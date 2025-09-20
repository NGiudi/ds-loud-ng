import PropTypes from "prop-types";

export const ICON_PROP_TYPES = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  margin: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["avatar", "lg", "md", "sm", "xl"]),
  spin: PropTypes.bool,
};

export const TEXT_PROP_TYPES = {
  align: PropTypes.oneOf(["center", "end", "start"]),
  as: PropTypes.oneOf(["label", "p", "span"]),
  color: PropTypes.string,
  decoration: PropTypes.oneOf(["line-through", "none", "underline"]),
  htmlFor: PropTypes.string, //? used only for label type.
  margin: PropTypes.string,
  padding: PropTypes.string,
  type: PropTypes.oneOf([
    "bodyRegular",
    "bodySemibold",
    "captionRegular",
    "captionSemibold",
    "pageTitle",
    "subtitle",
    "title",
  ]),
};