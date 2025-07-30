import React from "react";
import PropTypes from "prop-types";

import { Icon } from "../../../";

import { Styles } from "./IconButton.styles";

import { ICON_PROP_TYPES } from "../../../constants/prop_types";

const DEFAULT_PROPS = {
  disabled: false,
  icon: {
    color: "black_900",
    icon: "home",
    size: "sm",
  },
  id: null,
  invert: false,
  margin: "a-0",
  onClick: () => {},
  type: "button",
};

export const IconButton = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
    icon: {
      ...DEFAULT_PROPS.icon,
      ...props.icon,
    },
  };

  const getIconColor = () => {
    if (attrs.invert) {
      return attrs.disabled ? "black_400" : "black_200";
    }

    return attrs.disabled ? "black_500" : "black_700";
  };

  return (
    <Styles.IconButton
      disabled={attrs.disabled}
      id={attrs.id}
      $invert={attrs.invert}
      $margin={attrs.margin}
      onClick={attrs.onClick}
      type={attrs.type}
    >
      <Icon
        {...attrs.icon}
        color={getIconColor()}
      />
    </Styles.IconButton>
  );
};

IconButton.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.shape(ICON_PROP_TYPES),
  id: PropTypes.string,
  invert: PropTypes.bool,
  margin: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit"]),
};