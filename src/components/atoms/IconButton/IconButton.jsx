import React from "react";
import PropTypes from "prop-types";

import { Icon } from "../../..";

import { Styles } from "./IconButton.styles";

const defaultProps = {
  disabled: false,
  icon: {
    name: "",
    size: "sm",
  },
  id: null,
  margin: "a-0",
  onClick: () => {},
  type: "button",
};

export const IconButton = (props) => {
  const attrs = {
    ...defaultProps,
    ...props,
    icon: {
      ...defaultProps.icon,
      ...props.icon,
    },
  };

  return (
    <Styles.IconButton
      disabled={attrs.disabled}
      id={attrs.id}
      $margin={attrs.margin}
      onClick={attrs.onClick}
      type={attrs.type}
    >
      <Icon
        color={attrs.disabled ? "black_500" : "black_900"}
        icon={attrs.icon.name}
        size={attrs.icon.size}
      />
    </Styles.IconButton>
  );
};

IconButton.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.shape({
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    size: PropTypes.oneOf(["input", "lg", "md", "sm"]),
  }).isRequired,
  id: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit"]),
};
