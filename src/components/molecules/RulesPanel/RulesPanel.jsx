import React, { useState } from "react";
import PropTypes from "prop-types";

/* import context */
import { RulesPanelProvider } from "./RulesPanelContext";

/* import components */
import { RightPanel } from "./components/RightPanel/RightPanel";
import { LeftPanel } from "./components/LeftPanel/LeftPanel";
import { Columns } from "../../..";

/* import utils */
import {
  getContextOptions,
  getLeftPanelOptions,
  getRightPanelFilter,
  getWrapperFilter,
} from "./utils/propsFilters";

export const RulesPanel = (props) => {
  const [panelLeftHeight, setPanelLeftHeight] = useState(0);

  const contextOptions = getContextOptions(props);
  const leftPanelOptions = getLeftPanelOptions(props);
  const rightPanelOptions = getRightPanelFilter(props);
  const wrapperOptions = getWrapperFilter(props);

  const handleSizeH = (height) => {
    setPanelLeftHeight(height);
  };

  return (
    <RulesPanelProvider {...contextOptions}>
      <Columns {...wrapperOptions}>
        <LeftPanel onSizeH={handleSizeH} {...leftPanelOptions} />
        <RightPanel panelLeftHeight={panelLeftHeight} {...rightPanelOptions} />
      </Columns>
    </RulesPanelProvider>
  );
};

RulesPanel.propTypes = {
  fields: PropTypes.array,
  list: PropTypes.array,
  listElement: PropTypes.func,
  margin: PropTypes.string,
  onChange: PropTypes.func,
  validationSchema: PropTypes.object,
};

RulesPanel.defaultProps = {
  fields: [],
  list: [],
  listElement: null,
  margin: null,
  onChange: null,
  validationSchema: null,
};
