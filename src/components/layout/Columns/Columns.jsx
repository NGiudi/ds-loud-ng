import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Columns.styles";

export const Columns = (props) => {
  const { gap, margin, minWidth } = props;

  return (
    <Wrapper $gap={gap} $margin={margin} $minWidth={minWidth}>
      {props.children}
    </Wrapper>
  );
};

Columns.propTypes = {
  children: PropTypes.node,
  gap: PropTypes.string,
  margin: PropTypes.string,
  minWidth: PropTypes.string,
};

Columns.defaultProps = {
  children: null,
  gap: "20px",
  margin: "a-0",
  minWidth: "600px",
};
