import React from "react";
import PropTypes from "prop-types";

import { Styles } from "../Button.styles";

export const ButtonSelector = ({ kind, ...others }) => {
  switch (kind) {
    case "outlined":
      return <Styles.OutlinedButton {...others} />;
    case "solid":
      return <Styles.SolidButton {...others} />;
    case "text":
      return <Styles.TextButton {...others} />;
    default:
      return <Styles.SolidButton {...others} />;
  }
};

ButtonSelector.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  $fullWidth: PropTypes.bool,
  kind: PropTypes.oneOf(["outlined", "solid", "text"]),
  $loading: PropTypes.bool,
  $margin: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit"]),
};