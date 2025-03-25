import React from "react";
import PropTypes from "prop-types";

const DEFAULT_PROPS = {
  children: null,
};

export const Tab = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return <div>{attrs.children}</div>;
};

Tab.propTypes = {
  children: PropTypes.node,
};