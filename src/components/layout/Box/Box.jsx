import React from "react";
import PropTypes from "prop-types";

/* import styles */
import { Wrapper } from "./Box.styles";

/* import utils */
import { getWrapperOptionsFilter } from "./utils/propsFliter";

export const Box = (props) => {
  const wrapperOptions = getWrapperOptionsFilter(props);

  return <Wrapper {...wrapperOptions}>{props.children}</Wrapper>;
};

Box.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
};

Box.defaultProps = {
  children: null,
  margin: "a-0",
};
