import React from "react";
import PropTypes from "prop-types";

import { Text } from "../";

import { Styles } from "./Badge.styles";

export const Badge = (props) => {
  const { color, margin } = props;

  return (
    <Styles.Wrapper $color={color} $margin={margin}>
      <Text weight="semibold" size="sm">
        {props.children}
      </Text>
    </Styles.Wrapper>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  margin: PropTypes.string,
};

Badge.defaultProps = {
  children: null,
  color: {
    intensity: "700",
    tone: "orange",
  },
  margin: "a-0",
};
