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
  const { size } = props;

  const iconOptions = getIconOptionsFilter(props);
  const wrapperOptions = getWrapperOptionsFilter(props);

  return (
    <Styles.IconWrapper {...wrapperOptions}>
      <Styles.IconItem {...iconOptions} customsize={size} />
    </Styles.IconWrapper>
  );
};

Icon.propTypes = {
  color: PropTypes.oneOf(
    PropTypes.string,
    PropTypes.shape({
      intensity: PropTypes.string,
      tone: PropTypes.string,
    })
  ),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  margin: PropTypes.string,
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
  size: "md",
  spin: false,
};
