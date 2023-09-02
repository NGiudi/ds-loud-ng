import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

import { useFormikContext } from "formik";

export const SelectContext = createContext({});

export const SelectProvider = (props) => {
  const { children, name, options } = props;

  const { values } = useFormikContext();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(values[name]);

  const closeSelect = () => setIsOpen(false);
  const openSelect = () => setIsOpen(true);

  const handleSelectedValue = (value) => {
    setSelectedValue(value);
  };

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
        isOpen,
        options,
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
  name: PropTypes.string,
  options: PropTypes.array,
};

SelectProvider.defaultProps = {
  children: null,
  name: "",
  options: [],
};
