import React from "react";
import PropTypes from "prop-types";

import { Icon } from "../../../";

import { Styles } from "./Button.styles";

const defaultProps = {
  children: null,
  disabled: false,
  fullWidth: false,
  icon: {
    name: "",
    size: "sm",
  },
  id: "",
  kind: "solid",
  loading: false,
  margin: "a-0",
  onClick: () => {},
  type: "button",
};

export const Button = (props) => {
  const attrs = {
    ...defaultProps,
    ...props,
    icon: {
      ...defaultProps.icon,
      ...props.icon,
    }
  };

  const ButtonSelector = ({ kind, ...others }) => {
    switch (kind) {
      case "outlined":
        return <Styles.OutlinedButton {...others} />;
      case "solid":
        return <Styles.SolidButton {...others} />;
      case "text":
        return <Styles.TextButton {...others} />;
      default:
        return <Styles.SolidButton {...others} />;
    }
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
        {attrs.icon.name && (
          <Icon
            color="inheret"
            icon={attrs.icon.name}
            margin="r-4"
            size={attrs.icon.size}
          />
        )}

        {attrs.children}
      </Styles.ContentWrapper>
    </ButtonSelector>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.shape({
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    size: PropTypes.oneOf(["input", "lg", "md", "sm"]),
  }),
  id: PropTypes.string,
  kind: PropTypes.oneOf(["outlined", "solid", "text"]),
  loading: PropTypes.bool,
  margin: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit"]),
};
