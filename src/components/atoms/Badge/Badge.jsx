import React from "react";
import PropTypes from "prop-types";

import { Text } from "../";

import { Styles } from "./Badge.styles";

export const Badge = (props) => {
  const { id, color, margin } = props;

  return (
    <Styles.Wrapper $color={color} id={id} $margin={margin}>
      <Text type="bodySemibold">{props.children}</Text>
    </Styles.Wrapper>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  id: PropTypes.string,
  margin: PropTypes.string,
};

Badge.defaultProps = {
  children: null,
  color: "orange_700",
  id: null,
  margin: "a-0",
};
