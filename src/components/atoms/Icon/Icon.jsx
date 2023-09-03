import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Icon.styles";

export const Icon = (props) => {
  const { color, icon, margin, onClick, size, spin } = props;

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <Styles.IconWrapper
      $color={color}
      $margin={margin}
      onClick={handleClick}
      size={size}
    >
      <Styles.IconItem $customsize={size} icon={icon} spin={spin} />
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

Icon.defaultProps = {
  color: "black_700",
  icon: "home",
  margin: "a-0",
  onClick: null,
  size: "md",
  spin: false,
};
