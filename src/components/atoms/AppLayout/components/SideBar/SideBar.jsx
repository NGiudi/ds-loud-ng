import React, { useState } from "react";
import PropTypes from "prop-types";

/* import components */
import { Icon, Text } from "../../../../../";

/* import styles */
import {
  BottomContentStyles,
  SideBarButton,
  SideBarStyles,
} from "./SideBar.styles";

const SideBar = (props) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleClick = () => setIsExpanded((prev) => !prev);

  return (
    <SideBarStyles isExpanded={isExpanded}>
      {props.children.map((content, idx) => {
        const buttonContent = content.props.children;

        return (
          <SideBarButton key={`sidebar-button-${idx}`}>
            {buttonContent[0] /* Icon */}
            {isExpanded && buttonContent[1] /* Text */}
          </SideBarButton>
        );
      })}

      <BottomContentStyles>
        <SideBarButton onClick={handleClick}>
          <Icon
            icon={isExpanded ? "angles-left" : "angles-right"}
            margin="r-8"
            size="sm"
          />

          {isExpanded && <Text weight="semibold">Contraer</Text>}
        </SideBarButton>
      </BottomContentStyles>
    </SideBarStyles>
  );
};

SideBar.propTypes = {
  children: PropTypes.node,
};

SideBar.defaultProps = {
  children: null,
};

export default SideBar;
