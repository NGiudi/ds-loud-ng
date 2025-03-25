import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Flex.styles";

const DEFAULT_PROPS = {
  children: null,
  direction: "row",
  hAlign: "start",
  margin: "a-0",
  vAlign: "center",
};

export const Flex = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <Styles.Wrapper
      $direction={attrs.direction}
      $margin={attrs.margin}
      $hAlign={attrs.hAlign}
      $vAlign={attrs.vAlign}
    >
      {attrs.children}
    </Styles.Wrapper>
  );
};

Flex.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(["column", "row"]),
  hAlign: PropTypes.oneOf([
    "center",
    "end",
    "space-around",
    "space-between",
    "start",
  ]),
  margin: PropTypes.string,
  vAlign: PropTypes.oneOf(["center", "end", "start"]),
};