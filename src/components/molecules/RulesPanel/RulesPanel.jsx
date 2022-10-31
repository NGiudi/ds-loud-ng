import React from "react";
import PropTypes from "prop-types";

/* import context */
import RulesPanelProvider from "./RulesPanelContext";

/* import components */
import RightPanel from "./components/RightPanel/RightPanel";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import { Columns } from "../../..";

/* import utils */
import {
  getContextOptions,
  getLeftPanelOptions,
  getRightPanelFilter,
  getWrapperFilter,
} from "./utils/propsFilters";

export const RulesPanel = (props) => {
  const contextOptions = getContextOptions(props);
  const leftPanelOptions = getLeftPanelOptions(props);
  const rightPanelOptions = getRightPanelFilter(props);
  const wrapperOptions = getWrapperFilter(props);

  return (
    <RulesPanelProvider {...contextOptions}>
      <Columns {...wrapperOptions}>
        <LeftPanel {...leftPanelOptions} />
        <RightPanel {...rightPanelOptions} />
      </Columns>
    </RulesPanelProvider>
  );
};

RulesPanel.propTypes = {
  leftPanelContent: PropTypes.func,
  list: PropTypes.array,
  listElement: PropTypes.func,
  margin: PropTypes.string,
};

RulesPanel.defaultProps = {
  leftPanelContent: null,
  list: null,
  listElement: null,
  margin: "a-0",
};
