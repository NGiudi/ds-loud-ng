import React from "react";
import PropTypes from "prop-types";

import { Panel } from "../../../../../";

import { PanelWrapper, TriangleWrapper } from "./DropdownPanel.styles";

const defaultProps = {
  children: null,
  direction: "right",
  name: null,
  onSelect: () => {},
  showPanel: false,
};


export const DropdownPanel = (props) => {
  const attrs = {
    ...defaultProps,
    ...props,
  };

  return (
    <PanelWrapper direction={attrs.direction} $showPanel={attrs.showPanel}>
      <Panel margin="t-8" padding="y-4 x-0">
        <TriangleWrapper direction={attrs.direction} />
        {attrs.children.map((item, index) => {
          return React.cloneElement(item, {
            key: `listItem-${index + 1}`,
            name: attrs.name,
            onSelect: attrs.onSelect,
          });
        })}
      </Panel>
    </PanelWrapper>
  );
};

DropdownPanel.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(["left", "right"]),
  name: PropTypes.string,
  onSelect: PropTypes.func,
  showPanel: PropTypes.bool,
};
