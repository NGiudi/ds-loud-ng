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

//TODO: Recibir el schema validation de yup para el formulario.
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
  fields: PropTypes.array,
  list: PropTypes.array,
  listElement: PropTypes.func,
  margin: PropTypes.string,
  onChange: PropTypes.func,
};

RulesPanel.defaultProps = {
  fields: [],
  list: [],
  listElement: null,
  margin: null,
};
