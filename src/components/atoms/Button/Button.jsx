import React from "react";
import PropTypes from "prop-types";

import { ButtonSelector } from "./components/ButtonSelector";
import { Icon } from "../../../";

import { Styles } from "./Button.styles";

import { ICON_PROP_TYPES } from "../../../constants/prop_types";

const DEFAULT_PROPS = {
  children: null,
  disabled: false,
  fullWidth: false,
  icon: {
    color: "inheret",
    margin: "r-4",
    icon: "",
    size: "sm",
  },
  id: "",
  kind: "solid",
  loading: false,
  margin: "a-0",
  onClick: null,
  type: "button",
};

export const Button = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
    icon: {
      ...DEFAULT_PROPS.icon,
      ...props.icon,
    },
  };

  return (
    <ButtonSelector
      disabled={attrs.disabled || attrs.loading}
      id={attrs.id}
      $fullWidth={attrs.fullWidth}
      kind={attrs.kind}
      $loading={attrs.loading}
      $margin={attrs.margin}
      onClick={attrs.onClick}
      type={attrs.type}
    >
      {/* loading view */}
      <Styles.LoaderWrapper $loading={attrs.loading} data-testid="loading">
        <Icon color="inheret" icon="spinner" size="sm" />
      </Styles.LoaderWrapper>

      {/* content view */}
      <Styles.ContentWrapper $loading={attrs.loading}>
        {attrs.icon.icon && <Icon {...attrs.icon} />}

        {attrs.children}
      </Styles.ContentWrapper>
    </ButtonSelector>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.shape(ICON_PROP_TYPES),
  id: PropTypes.string,
  kind: PropTypes.oneOf(["outlined", "solid", "text"]),
  loading: PropTypes.bool,
  margin: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit"]),
};