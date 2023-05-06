import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SelectContext = createContext({});

export const SelectProvider = (props) => {
  const { children } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const closeSelect = () => setIsOpen(false);
  const openSelect = () => setIsOpen(true);

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
        selectedValue,
        closeSelect,
        setSelectedValue,
        toogleSelect,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};

SelectProvider.propTypes = {
  children: PropTypes.node,
};

SelectProvider.defaultProps = {
  children: null,
};
