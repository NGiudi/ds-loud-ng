import React, { useState } from "react";
import PropTypes from "prop-types";

import { SidebarButton } from "./components/SidebarButton";

import { Styles } from "./SideBar.styles";

const DEFAULT_PROPS = {
  buttons: [],
};

export const SideBar = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const [isExpanded, setIsExpanded] = useState(true);

  const handleClick = () => setIsExpanded((prev) => !prev);

  const contractedButton = {
    icon: isExpanded ? "angles-left" : "angles-right",
    label: isExpanded ? "Contraer" : "Expandir",
    onClick: handleClick,
  };

  return (
    <Styles.SidebarStyles>
      {/* button list */}
      <Styles.SidebarButtonsWrapper>
        {attrs.buttons.length > 0 &&
          attrs.buttons.map((btn, idx) => {
            const isSelected = window.location.pathname.includes(btn.to);

            return (
              <SidebarButton
                btn={btn}
                key={`sidebar-button-${idx}`}
                isExpanded={isExpanded}
                isSelected={isSelected}
              />
            );
          })}
      </Styles.SidebarButtonsWrapper>

      <Styles.BottomContentStyles>
        <SidebarButton btn={contractedButton} isExpanded={isExpanded} />
      </Styles.BottomContentStyles>
    </Styles.SidebarStyles>
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
