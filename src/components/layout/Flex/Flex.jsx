import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Flex.styles";

export const Flex = (props) => {
  const { direction, hAlign, margin, vAlign } = props;

  return (
    <Styles.Wrapper
      $direction={direction}
      $margin={margin}
      $hAlign={hAlign}
      $vAlign={vAlign}
    >
      {props.children}
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

Flex.defaultProps = {
  children: null,
  direction: "row",
  hAlign: "start",
  margin: "a-0",
  vAlign: "center",
};
