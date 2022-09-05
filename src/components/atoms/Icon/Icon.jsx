import React from "react";
import PropTypes from "prop-types";

/* import styles. */
import Styles from "./Icon.styles";

export const Icon = (props) => {
  const { color, icon, size } = props;

  return (
    <Styles.IconWrapper {...props}>
      <Styles.IconItem color={color} icon={icon} local_size={size} />
    </Styles.IconWrapper>
  );
};

Icon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  margin: PropTypes.string,
  size: PropTypes.oneOf(["input", "lg", "md", "sm"]),
};

Icon.defaultProps = {
  color: null,
  icon: "home",
  margin: "a-0",
  size: "md",
};
