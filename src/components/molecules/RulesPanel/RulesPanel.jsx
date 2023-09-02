import React, { useState } from "react";
import PropTypes from "prop-types";

import { RulesPanelProvider } from "./RulesPanelContext";

import { RightPanel } from "./components/RightPanel/RightPanel";
import { LeftPanel } from "./components/LeftPanel/LeftPanel";
import { Columns } from "../../..";

export const RulesPanel = (props) => {
  const { list, onChange } = props;

  const [panelLeftHeight, setPanelLeftHeight] = useState(0);

  const handleSizeH = (height) => {
    setPanelLeftHeight(height);
  };

  return (
    <RulesPanelProvider list={list}>
      <Columns margin={props.margin}>
        <LeftPanel
          fields={props.fields}
          list={list}
          onChange={onChange}
          onSizeH={handleSizeH}
          validationSchema={props.validationSchema}
        />

        <RightPanel
          list={list}
          listElement={props.listElement}
          onChange={onChange}
          panelLeftHeight={panelLeftHeight}
        />
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
