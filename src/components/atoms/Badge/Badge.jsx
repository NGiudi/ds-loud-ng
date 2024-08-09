import React from "react";
import PropTypes from "prop-types";

import { Text } from "../Text/Text";

import { Styles } from "./Badge.styles";

const DEFAULT_PROPS = {
  children: null,
  color: "orange_700",
  id: "",
  margin: "a-0",
};

export const Badge = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <Styles.Wrapper $color={attrs.color} id={attrs.id} $margin={attrs.margin}>
      <Text type="bodySemibold">{attrs.children}</Text>
    </Styles.Wrapper>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  id: PropTypes.string,
  margin: PropTypes.string,
};
