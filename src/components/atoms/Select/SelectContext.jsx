import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SelectContext = createContext({});

export const SelectProvider = (props) => {
  const { children } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const closeSelect = () => setIsOpen(false);
  const openSelect = () => setIsOpen(true);

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        selectedValue,
        closeSelect,
        openSelect,
        setSelectedValue,
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
