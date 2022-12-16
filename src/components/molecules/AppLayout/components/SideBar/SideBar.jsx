import React, { useState } from "react";
import PropTypes from "prop-types";

/* import components */
import { Icon, Text } from "../../../../../";

/* import styles */
import Styles from "./SideBar.styles";

export const SideBar = (props) => {
  const { buttons } = props;

  const [isExpanded, setIsExpanded] = useState(true);

  const contractedButton = {
    icon: isExpanded ? "angles-left" : "angles-right",
    label: "Contraer",
  };

  const handleClick = () => setIsExpanded((prev) => !prev);

  const renderButtonContent = (btn) => {
    return (
      <>
        <Icon icon={btn.icon} margin="r-8" size="sm" />

        {isExpanded && <Text weight="semibold">{btn.label}</Text>}
      </>
    );
  };

  return (
    <Styles.SideBarStyles>
      {/* button list */}
      <Styles.SideBarButtonsWrapper>
        {buttons &&
          buttons.map((btn, idx) => {
            return (
              <Styles.SideBarButton
                isExpanded={isExpanded}
                key={`sidebar-button-${idx}`}
              >
                {renderButtonContent(btn)}
              </Styles.SideBarButton>
            );
          })}
      </Styles.SideBarButtonsWrapper>

      <Styles.BottomContentStyles>
        <Styles.SideBarButton isExpanded={isExpanded} onClick={handleClick}>
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
      to: PropTypes.string.isRequired,
    })
  ),
};

SideBar.defaultProps = {
  buttons: null,
};
