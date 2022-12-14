import React from "react";
import PropTypes from "prop-types";

/* import components */
import { Icon } from "../../../";

/* import styles. */
import { LoaderWrapper, ContentWrapper } from "./Wrappers.styles";
import { Styles } from "./Button.styles";

export const Button = (props) => {
  const { children, loading, onClick, ...others } = props;

  const isIconButton = props.kind === "icon";

  const iconAttributes = {
    //? default values.
    name: null,
    size: "sm",
    //? component values.
    ...props.icon,
  };

  const Button = ({ kind, ...others }) => {
    switch (kind) {
      case "icon":
        return <Styles.IconButton {...others} />;
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
    <Button loading={loading ? 1 : 0} onClick={handleClick} {...others}>
      {/* loading view */}
      <LoaderWrapper loading={loading ? 1 : 0} data-testid="loading">
        <Icon icon="spinner" size="sm" />
      </LoaderWrapper>

      {/* content view */}
      <ContentWrapper loading={loading ? 1 : 0}>
        {iconAttributes.name && (
          <Icon
            icon={iconAttributes.name}
            margin={isIconButton ? "" : "r-4"}
            size={iconAttributes.size}
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
  kind: PropTypes.oneOf(["icon", "outlined", "solid", "text"]),
  loading: PropTypes.bool,
  margin: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["input", "md"]),
  type: PropTypes.oneOf(["button", "submit"]),
};

Button.defaultProps = {
  children: null,
  disabled: false,
  fullWidth: false,
  icon: null, //? default value insert into javascript code.
  kind: "solid",
  loading: false,
  margin: "a-0",
  onClick: null,
  size: "md",
  type: "button",
};
