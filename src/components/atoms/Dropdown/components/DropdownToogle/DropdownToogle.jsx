import React from "react";
import PropTypes from "prop-types";

import { Icon } from "../../../../../";

import { ContentWrapper, ToogleWrapper } from "./DropdownToogle.styles";

const defaultProps = {
  children: null,
  onClick: () => {},
  openPanel: false,
};

export const DropdownToogle = (props) => {
  const attrs = {
    ...defaultProps,
    ...props,
  };

  const icon = attrs.openPanel ? "angle-up" : "angle-down";

  return (
    <ToogleWrapper onClick={attrs.onClick}>
      <ContentWrapper>
        {attrs.children}
        <Icon icon={icon} margin="l-4" size="sm" />
      </ContentWrapper>
    </ToogleWrapper>
  );
};

DropdownToogle.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  openPanel: PropTypes.bool,
};
