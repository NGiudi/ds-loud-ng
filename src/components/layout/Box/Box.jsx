import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Box.styles";

const defaultProps = {
  children: null,
  margin: "a-0",
};


export const Box = (props) => {
  const attrs = {
    ...defaultProps,
    ...props,
  };

  return <Wrapper $margin={attrs.margin}>{attrs.children}</Wrapper>;
};

Box.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
};
