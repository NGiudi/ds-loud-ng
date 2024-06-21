import React from "react";
import PropTypes from "prop-types";

import { ItemWrapper } from "./DropdownItem.styles";

const defaultProps = {
  disabled: false,
  name: null,
  onSelect: () => {},
  value: null,
};


export const DropdownItem = (props) => {
  const attrs = {
    ...defaultProps,
    ...props,
  };
  
  const handleClick = () => {
    if (!attrs.disabled) {
      attrs.onSelect && attrs.onSelect(attrs.value, attrs.name);
    }
  };

  return <ItemWrapper onClick={handleClick} {...attrs} />;
};

DropdownItem.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onSelect: PropTypes.func,
  value: PropTypes.any,
};
