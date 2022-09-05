import React, { useState } from "react";
import PropTypes from "prop-types";

import useOuterClick from "../../../hooks/useOuterClick";

/* styles */
import Styles from "./Dropdown.styles";

// TODO: Hacer tests.
export const Dropdown = (props) => {
  const { children, name, onSelect, ...others } = props;

  const [optionSelected, setOptionSelected] = useState(null);
  const [showPanel, setShowPanel] = useState(false);

  const innerRef = useOuterClick(() => {
    if (showPanel) toogleShowPanel();
  });

  const toogleShowPanel = () => {
    setShowPanel((prev) => !prev);
  };

  const handleSelect = (value, name) => {
    toogleShowPanel();

    if (value !== optionSelected) {
      onSelect && onSelect(value, name);
      setOptionSelected(value);
    }
  };

  const getPanel = React.Children.toArray(children)[1];
  const getToggle = React.Children.toArray(children)[0];

  return (
    <Styles.DropdownWrapper ref={innerRef} {...others}>
      {React.cloneElement(getToggle, {
        onClick: toogleShowPanel,
        openPanel: showPanel,
      })}

      {React.cloneElement(getPanel, {
        name,
        onSelect: handleSelect,
        showPanel,
      })}
    </Styles.DropdownWrapper>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  onSelect: PropTypes.func,
};

Dropdown.defaultProps = {
  children: null,
  name: null,
  onSelect: null,
};
