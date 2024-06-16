import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Icon.styles";

const defaultProps = {
  color: "black_700",
  icon: "home",
  margin: "a-0",
  onClick: () => {},
  size: "md",
  spin: false,
};

export const Icon = (props) => {
  const attrs = {
    ...defaultProps,
    ...props,
  };

  return (
    <Styles.IconWrapper
      $color={attrs.color}
      $margin={attrs.margin}
      onClick={attrs.onClick}
      size={attrs.size}
    >
      <Styles.IconItem
        $customsize={attrs.size}
        icon={attrs.icon}
        spin={attrs.spin}
      />
    </Styles.IconWrapper>
  );
};

Icon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  margin: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf([
    "avatar",
    "avatarSm",
    "input",
    "lg",
    "md",
    "sm",
    "xl",
  ]),
  spin: PropTypes.bool,
};
