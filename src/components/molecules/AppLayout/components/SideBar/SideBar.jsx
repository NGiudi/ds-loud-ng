import React, { useState } from "react";
import PropTypes from "prop-types";

import { Icon, Text } from "../../../../../";

import { Styles } from "./SideBar.styles";

export const SideBar = (props) => {
  const { buttons } = props;

  const [isExpanded, setIsExpanded] = useState(true);

  const contractedButton = {
    icon: isExpanded ? "angles-left" : "angles-right",
    label: "Contraer",
  };

  const handleClick = () => setIsExpanded((prev) => !prev);

  const renderButtonContent = (btn, isSelected) => {
    return (
      <>
        <Icon
          color={isSelected ? "orange_600" : "black_900"}
          icon={btn.icon}
          margin="r-8"
          size="sm"
        />

        {isExpanded && (
          <Text
            color={isSelected ? "orange_600" : "black_900"}
            type="bodySemibold"
          >
            {btn.label}
          </Text>
        )}
      </>
    );
  };

  return (
    <Styles.SideBarStyles>
      {/* button list */}
      <Styles.SideBarButtonsWrapper>
        {buttons &&
          buttons.map((btn, idx) => {
            const isSelected = window.location.pathname.includes(btn.to);

            return (
              <Styles.SideBarButton
                $isExpanded={isExpanded}
                $isSelectedSection={isSelected}
                key={`sidebar-button-${idx}`}
                onClick={btn.onClick}
              >
                {renderButtonContent(btn, isSelected)}
              </Styles.SideBarButton>
            );
          })}
      </Styles.SideBarButtonsWrapper>

      <Styles.BottomContentStyles>
        <Styles.SideBarButton $isExpanded={isExpanded} onClick={handleClick}>
          {renderButtonContent(contractedButton)}
        </Styles.SideBarButton>
      </Styles.BottomContentStyles>
    </Styles.SideBarStyles>
  );
};

SideBar.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ),
};

SideBar.defaultProps = {
  buttons: null,
};
