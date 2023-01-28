import React from "react";
import PropTypes from "prop-types";

/* styles */
import { Styles } from "./Divider.styles";

/* utils */
import { getWrapperOptionsFilter } from "./utils/propsFilter";

export const Divider = (props) => {
  const wrapperOptions = getWrapperOptionsFilter(props);

  return <Styles.Wrapper {...wrapperOptions} />;
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
