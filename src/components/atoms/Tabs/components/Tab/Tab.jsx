import React from "react";
import PropTypes from "prop-types";

export const Tab = (props) => {
  const { children } = props;

  return <div>{children}</div>;
};

Tab.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};

Tab.defaultProps = {
  children: null,
  name: "",
};
