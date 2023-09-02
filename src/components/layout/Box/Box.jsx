import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Box.styles";

export const Box = (props) => {
  const { margin } = props;

  return <Wrapper $margin={margin}>{props.children}</Wrapper>;
};

Box.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
};

Box.defaultProps = {
  children: null,
  margin: "a-0",
};
