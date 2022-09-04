import React from "react";
import PropTypes from "prop-types";

import { Icon } from "../../../../../";

/* styles */
import { ContentWrapper, ToogleWrapper } from "./DropdownToogle.styles";

export const DropdownToogle = (props) => {
  const { children, openPanel, ...others } = props;

  const icon = openPanel ? "angle-up" : "angle-down";

  return (
    <ToogleWrapper {...others}>
      <ContentWrapper>
        {children}
        <Icon icon={icon} margin="l-4" size="sm" />
      </ContentWrapper>
    </ToogleWrapper>
  );
};

DropdownToogle.propTypes = {
  children: PropTypes.node,
  openPanel: PropTypes.bool,
};

DropdownToogle.defaultProps = {
  children: null,
  openPanel: false,
};
