import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Divider.styles";

export const Divider = (props) => {
  const { color, height, margin } = props;

  return <Styles.Wrapper height={height} $color={color} $margin={margin} />;
};

Divider.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
};

Divider.defaultProps = {
  color: "black_300",
  height: "",
  margin: "a-0",
};
