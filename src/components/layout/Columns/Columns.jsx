import React from "react";
import PropTypes from "prop-types";

/* import styles */
import { Wrapper } from "./Columns.styles";

/* import utils */
import { getWrapperOptionsFilter } from "./utils/propsFliter";

export const Columns = (props) => {
  const wrapperOptions = getWrapperOptionsFilter(props);

  return <Wrapper {...wrapperOptions}>{props.children}</Wrapper>;
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
