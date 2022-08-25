import React from "react";
import PropTypes from "prop-types";

/* import components */
import { Icon } from "../../../";

/* import styles. */
import { LoaderWrapper, ContentWrapper } from "./Wrappers.styles";
import { IconButton, OutlinedButton, SolidButton } from "./Button.styles";

export const Button = (props) => {
  const { children, loading, onClick, ...others } = props;

  const isIconButton = props.kind === "icon";

  const icon = {
    /* default values. */
    name: null,
    size: "sm",
    /* component values. */
    ...props.icon,
  };

  const Button = ({ kind, ...others }) => {
    switch (kind) {
      case "solid":
        return <SolidButton {...others} />;
      case "outlined":
        return <OutlinedButton {...others} />;
      case "icon":
        return <IconButton {...others} />;
      default:
        return <SolidButton {...others} />;
    }
  };

  const handleClick = () => {
    if (!loading) {
      onClick && onClick();
    }
  };

  return (
    <Button loading={loading ? 1 : 0} onClick={handleClick} {...others}>
      {/* loading view */}
      <LoaderWrapper loading={loading ? 1 : 0} data-testid="loading">
        <Icon icon="spinner" size="sm" />
      </LoaderWrapper>

      {/* content view */}
      <ContentWrapper loading={loading ? 1 : 0}>
        {icon.name && (
          <Icon
            icon={icon.name}
            margin={isIconButton ? "" : "r-4"}
            size={icon.size}
          />
        )}
        {children}
      </ContentWrapper>
    </Button>
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
  kind: PropTypes.oneOf(["icon", "outlined", "solid"]),
  loading: PropTypes.bool,
  margin: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["input", "md"]),
  type: PropTypes.oneOf(["button", "submit"]),
};

Button.defaultProps = {
  children: null,
  disabled: false,
  fullWidth: false,
  icon: null, // default value insert into javascript code.
  kind: "solid",
  loading: false,
  margin: "a-0",
  onClick: null,
  size: "md",
  type: "button",
};
