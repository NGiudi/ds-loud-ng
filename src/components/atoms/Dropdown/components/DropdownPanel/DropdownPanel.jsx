import React from "react";
import PropTypes from "prop-types";

/* import components */
import { Panel } from "../../../../../";

/* import styles */
import { PanelWrapper, TriangleWrapper } from "./DropdownPanel.styles";

export const DropdownPanel = (props) => {
  const { children, direction, name, onSelect, ...others } = props;

  return (
    <PanelWrapper direction={direction} {...others}>
      <Panel margin="t-8" padding="y-4 x-0">
        <TriangleWrapper direction={direction} />
        {children.map((item, index) => {
          return React.cloneElement(item, {
            key: `listItem-${index + 1}`,
            name,
            onSelect,
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

DropdownPanel.defaultProps = {
  children: null,
  direction: "right",
  name: null,
  onSelect: null,
  showPanel: false,
};
