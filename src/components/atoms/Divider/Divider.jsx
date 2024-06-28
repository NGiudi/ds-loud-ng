import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Divider.styles";

const DEFAULT_PROPS = {
  color: "black_300",
  height: "",
  margin: "a-0",
};


export const Divider = (props) => {  
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <Styles.Wrapper
      $color={attrs.color}
      height={attrs.height}
      $margin={attrs.margin}
    />
  );
};

Divider.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
};
