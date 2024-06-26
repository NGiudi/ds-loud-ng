import React, { useState } from "react";
import PropTypes from "prop-types";

import { useOuterClick } from "../../../hooks/useOuterClick";

import { Styles } from "./Dropdown.styles";

const defaultProps = {
  children: null,
  name: null,
  onSelect: () => {},
};

//TODO: Agregar margin a este componente.
export const Dropdown = (props) => {
  const attrs = {
    ...defaultProps,
    ...props,
  };

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
      attrs.onSelect && attrs.onSelect(value, name);
      setOptionSelected(value);
    }
  };

  const getPanel = React.Children.toArray(attrs.children)[1];
  const getToggle = React.Children.toArray(attrs.children)[0];

  return (
    <Styles.DropdownWrapper ref={innerRef}>
      {React.cloneElement(getToggle, {
        onClick: toogleShowPanel,
        openPanel: showPanel,
      })}

      {React.cloneElement(getPanel, {
        name: attrs.name,
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
