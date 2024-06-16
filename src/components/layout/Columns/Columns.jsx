import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Columns.styles";

const defaultProps = {
  children: null,
  gap: "24px",
  margin: "a-0",
  minWidth: "600px",
};

export const Columns = (props) => {
  const attrs = {
    ...defaultProps,
    ...props,
  };

  return (
    <Wrapper
      $gap={attrs.gap}
      $margin={attrs.margin}
      $minWidth={attrs.minWidth}
    >
      {attrs.children}
    </Wrapper>
  );
};

Columns.propTypes = {
  children: PropTypes.node,
  gap: PropTypes.string,
  margin: PropTypes.string,
  minWidth: PropTypes.string,
};
