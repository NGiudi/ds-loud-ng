import React from "react";
import PropTypes from "prop-types";

/* import styles. */
import { Styles } from "./Icon.styles";

/* import utils */
import {
  getIconOptionsFilter,
  getWrapperOptionsFilter,
} from "./utils/propsFilter";

export const Icon = (props) => {
  const { onClick, size } = props;

  const iconOptions = getIconOptionsFilter(props);
  const wrapperOptions = getWrapperOptionsFilter(props);

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <Styles.IconWrapper onClick={handleClick} {...wrapperOptions}>
      <Styles.IconItem {...iconOptions} customsize={size} />
    </Styles.IconWrapper>
  );
};

Icon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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
  color: {
    intensity: "700",
    tone: "black",
  },
  icon: "home",
  margin: "a-0",
  onClick: null,
  size: "md",
  spin: false,
};
