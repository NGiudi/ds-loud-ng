import PropTypes from "prop-types";

export const ICON_PROP_TYPES = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  margin: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["avatar", "lg", "md", "sm", "xl"]),
  spin: PropTypes.bool,
};
