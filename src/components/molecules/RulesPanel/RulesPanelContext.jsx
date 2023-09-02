import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

import { INVALID_INDEX } from "../../../assets/constants/array";

export const RulesPanelContext = createContext({});

export const RulesPanelProvider = (props) => {
  const { children } = props;

  const [selectedElement, setSelectedElement] = useState(INVALID_INDEX);

  return (
    <RulesPanelContext.Provider value={{ selectedElement, setSelectedElement }}>
      {children}
    </RulesPanelContext.Provider>
  );
};

RulesPanelProvider.propTypes = {
  children: PropTypes.node,
};

RulesPanelProvider.defaultProps = {
  children: null,
};
