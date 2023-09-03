import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Divider.styles";

export const Divider = (props) => {
  const { color, margin } = props;

  return <Styles.Wrapper $color={color} $margin={margin} />;
};

Divider.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
};

Divider.defaultProps = {
  color: "black_300",
  margin: "a-0",
};
