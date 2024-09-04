import React from "react";
import PropTypes from "prop-types";

import { Icon, Text } from "../../../../../../";

import { Styles } from "../SideBar.styles";

export const SidebarButton = (props) => {
  const { btn, isExpanded, isSelected } = props;

  return (
    <Styles.SidebarButton
      $isExpanded={isExpanded}
      $isSelectedSection={isSelected}
      onClick={btn.onClick}
    >
      <Icon
        color={isSelected ? "orange_600" : "black_900"}
        icon={btn.icon}
        margin="r-8"
        size="sm"
      />

      {isExpanded ? (
        <Text
          color={isSelected ? "orange_600" : "black_900"}
          type="bodySemibold"
        >
          {btn.label}
        </Text>
      ) : (
        <Styles.SidebarButtonTooltip>{btn.label}</Styles.SidebarButtonTooltip>
      )}
    </Styles.SidebarButton>
  );
};

//TODO: agregar en la constantes.
SidebarButton.propTypes = {
  btn: PropTypes.shape({
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
  isExpanded: PropTypes.bool,
  isSelected: PropTypes.bool,
};
