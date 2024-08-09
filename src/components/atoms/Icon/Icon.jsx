import React from "react";

import { Styles } from "./Icon.styles";

import { ICON_PROP_TYPES } from "../../../constants/prop_types";

const DEFAULT_PROPS = {
  color: "black_700",
  icon: "home",
  margin: "a-0",
  onClick: () => {},
  size: "md",
  spin: false,
};

export const Icon = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <Styles.IconWrapper
      $color={attrs.color}
      $margin={attrs.margin}
      onClick={attrs.onClick}
      size={attrs.size}
    >
      <Styles.IconItem
        $customsize={attrs.size}
        icon={attrs.icon}
        spin={attrs.spin}
      />
    </Styles.IconWrapper>
  );
};

Icon.propTypes = ICON_PROP_TYPES;
