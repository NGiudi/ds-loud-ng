import React, { useState } from "react";
import PropTypes from "prop-types";

/* import components. */
import { ShowPasswordButton } from "./components";
import { Icon, Text } from "../../../";

/* import styles. */
import { Styles } from "./Input.styles";

/* import utils */
import {
  getInputOptionsFilter,
  getWrapperOptionsFilter,
} from "./utils/propsFilter";

export const Input = (props) => {
  const { description, icon, label, type } = props;

  const inputProps = getInputOptionsFilter(props);
  const wrapperProps = getWrapperOptionsFilter(props);

  const [showPassword, setShowPassword] = useState(false);

  const showPasswordValue = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Styles.Wrapper {...wrapperProps}>
      {/* label */}
      {!!label && (
        <Text
          as="label"
          htmlFor={props.name}
          margin="b-4"
          size="sm"
          weight="semibold"
        >
          {label}
        </Text>
      )}

      {/* label */}
      {!!description && (
        <Text
          color={{ intensity: "400", tone: "black" }}
          margin="b-4"
          size="sm"
        >
          {description}
        </Text>
      )}

      <Styles.InputWrapper ref={props.reference}>
        {/* left icon */}
        {!!icon && <Icon icon={icon} margin="r-8" size="sm" />}

        <Styles.InputStyles
          id={props.name}
          type={showPassword ? "text" : type}
          {...inputProps}
        />

        {type === "password" && (
          <ShowPasswordButton onClick={showPasswordValue} show={showPassword} />
        )}
      </Styles.InputWrapper>

      {/* error message */}
      <Styles.ErrorWrapper margin="l-4 t-4">
        <Styles.Error component="div" name={props.name} />
      </Styles.ErrorWrapper>
    </Styles.Wrapper>
  );
};

Input.propTypes = {
  autoComplete: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  label: PropTypes.string,
  margin: PropTypes.string,
  name: PropTypes.string.isRequired,
  onKeyPress: PropTypes.func,
  reference: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  type: PropTypes.oneOf(["number", "password", "text"]),
};

Input.defaultProps = {
  autoComplete: "off",
  description: "",
  icon: null,
  innerRef: null,
  label: "",
  margin: "a-0",
  name: "",
  onKeyPress: null,
  reference: null,
  type: "text",
};
