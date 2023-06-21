import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

import { useFormikContext } from "formik";

export const SelectContext = createContext({});

export const SelectProvider = (props) => {
  const { children, displayValue, name } = props;

  const { values } = useFormikContext();

  const [display, setDisplay] = useState(displayValue);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(values[name]);

  const closeSelect = () => setIsOpen(false);
  const openSelect = () => setIsOpen(true);

  const handleSelectedValue = (value, displayValue) => {
    setSelectedValue(value);
    setDisplay(displayValue);
  }

  const toogleSelect = () => {
    if (isOpen) {
      closeSelect();
    } else {
      openSelect();
    }
  };

  return (
    <SelectContext.Provider
      value={{
        display,
        isOpen,
        selectedValue,
        closeSelect,
        handleSelectedValue,
        toogleSelect,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};

SelectProvider.propTypes = {
  children: PropTypes.node,
  displayValue: PropTypes.string,
};

SelectProvider.defaultProps = {
  children: null,
  displayValue: "",
};
