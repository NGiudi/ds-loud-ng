import React from "react";
import PropTypes from "prop-types";

import { Icon } from "../../../";

import { Styles } from "./Button.styles";

export const Button = (props) => {
  const { children, id, fullWidth, loading, onClick } = props;

  const isIconButton = props.kind === "icon";

  const iconAttributes = {
    //? default values.
    name: null,
    size: "sm",
    //? component values.
    ...props.icon,
  };

  const CustomButton = ({ kind, ...others }) => {
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

  const handleClick = () => {
    if (!loading) {
      onClick && onClick();
    }
  };

  return (
    <CustomButton
      $border={props.border}
      disabled={props.disabled}
      id={id}
      $fullWidth={fullWidth}
      kind={props.kind}
      $loading={loading}
      $margin={props.margin}
      onClick={handleClick}
      type={props.type}
    >
      {/* loading view */}
      <Styles.LoaderWrapper $loading={loading} data-testid="loading">
        <Icon color="inheret" icon="spinner" size="sm" />
      </Styles.LoaderWrapper>

      {/* content view */}
      <Styles.ContentWrapper $loading={loading}>
        {iconAttributes.name && (
          <Icon
            color="inheret"
            icon={iconAttributes.name}
            margin={isIconButton ? "" : "r-4"}
            size={iconAttributes.size}
          />
        )}

        {children}
      </Styles.ContentWrapper>
    </CustomButton>
  );
};

Button.propTypes = {
  border: PropTypes.shape({
    radius: PropTypes.string,
  }),
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

Button.defaultProps = {
  border: {
    radius: "4px",
  },
  children: null,
  disabled: false,
  fullWidth: false,
  icon: null, //? default value insert into javascript code.
  id: null,
  kind: "solid",
  loading: false,
  margin: "a-0",
  onClick: null,
  type: "button",
};
