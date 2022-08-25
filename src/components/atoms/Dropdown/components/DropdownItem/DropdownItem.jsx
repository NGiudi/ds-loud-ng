import React from "react";
import PropTypes from "prop-types";

import { ItemWrapper } from "./DropdownItem.styles";

export const DropdownItem = (props) => {
  const { disabled, name, onSelect, value } = props;

  const handleClick = (e) => {
    if (!disabled) {
      onSelect && onSelect(value, name);
    }
  };

  return <ItemWrapper onClick={handleClick} {...props} />;
};

DropdownItem.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onSelect: PropTypes.func,
  value: PropTypes.any,
};

DropdownItem.defaultProps = {
  disabled: false,
  name: null,
  onSelect: null,
  value: null,
};
