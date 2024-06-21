import React from "react";
import PropTypes from "prop-types";

const defaultProps = {
  children: null,
};

export const Tab = (props) => {
  const attrs = {
    ...defaultProps,
    ...props,
  };

  return <div>{attrs.children}</div>;
};

Tab.propTypes = {
  children: PropTypes.node,
};

