import React from "react";
import PropTypes from "prop-types";

import { Text } from "../";

import { Styles } from "./Badge.styles";

export const Badge = (props) => {
  const { color, margin } = props;

  return (
    <Styles.Wrapper $color={color} $margin={margin}>
      <Text type="bodySemibold">{props.children}</Text>
    </Styles.Wrapper>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  margin: PropTypes.string,
};

Badge.defaultProps = {
  children: null,
  color: "orange_700",
  margin: "a-0",
};
