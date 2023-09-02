import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Flex.styles";

export const Flex = (props) => {
  const { hAlign, margin, vAlign } = props;

  return (
    <Styles.Wrapper $margin={margin} $hAlign={hAlign} $vAlign={vAlign}>
      {props.children}
    </Styles.Wrapper>
  );
};

Flex.propTypes = {
  children: PropTypes.node,
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
  hAlign: "start",
  margin: "a-0",
  vAlign: "center",
};
