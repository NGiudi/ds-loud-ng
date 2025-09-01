import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

import { useFormikContext } from "formik";

export const SelectContext = createContext({});

const DEFAULT_PROPS = {
  children: null,
  name: "",
  options: [],
};

export const SelectProvider = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const { values } = useFormikContext();

  const [isOpen, setIsOpen] = useState(false);

  const [selectedValue, setSelectedValue] = useState(() => {
    let option = attrs.options.find((option) => {
      return option.value === values[attrs.name];
    });

    return option ?? { value: values[attrs.name] };
  });

  React.useEffect(() => {
    const option = attrs.options.find((option) => {
      return option.value === values[attrs.name];
    });

    setSelectedValue(option ?? { value: values[attrs.name] });
  }, [attrs.options]);

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
        options: attrs.options,
        selectedValue,
        closeSelect,
        handleSelectedValue,
        toogleSelect,
      }}
    >
      {attrs.children}
    </SelectContext.Provider>
  );
};

SelectProvider.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  options: PropTypes.array,
};