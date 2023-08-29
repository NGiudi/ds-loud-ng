import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Divider.styles";

export const Divider = (props) => {
  const { color, margin } = props;

  return <Styles.Wrapper $color={color} $margin={margin} />;
};

Divider.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  margin: PropTypes.string,
};

Divider.defaultProps = {
  color: {
    intensity: "300",
    tone: "black",
  },
  margin: "a-0",
};
