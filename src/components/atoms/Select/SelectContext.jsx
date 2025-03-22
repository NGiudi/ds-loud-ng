import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

import { useFormikContext } from "formik";

export const SelectContext = createContext({});

const DEFAULT_PROPS = {
  children: null,
  initialOption: null,
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
  const [options, setOptions] = useState([]);

  const [selectedValue, setSelectedValue] = useState(() => {
    let option = attrs.options.find((option) => {
      return option.value === values[attrs.name];
    });

    return option ?? attrs.initialOption ?? { value: values[attrs.name] };
  });

  React.useEffect(() => {
    const options = [...attrs.options];

    const defaultOption = {
      hide: true,
      value: values[attrs.name],
    };

    if (attrs.initialOption) {
      attrs.initialOption.hide = true;
      options.unshift(attrs.initialOption);
    } else {
      options.unshift(defaultOption);
    }

    setOptions(options);
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
        options,
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
  initialOption: PropTypes.object,
  name: PropTypes.string,
  options: PropTypes.array,
};
