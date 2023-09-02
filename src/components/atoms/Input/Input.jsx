import React, { useState } from "react";
import PropTypes from "prop-types";

import { ShowPasswordButton } from "./components";
import { Icon, Text } from "../../../";

import { Styles } from "./Input.styles";

export const Input = (props) => {
  const { description, icon, label, name, type } = props;

  const [showPassword, setShowPassword] = useState(false);

  const showPasswordValue = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Styles.Wrapper $margin={props.margin}>
      {/* label */}
      {!!label && (
        <Text
          as="label"
          htmlFor={name}
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
          autoComplete={props.autoComplete}
          autoFocus={props.autoFocus}
          id={name}
          disabled={props.disabled}
          innerRef={props.innerRef}
          name={name}
          onKeyPress={props.onKeyPress}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          type={showPassword ? "text" : type}
        />

        {type === "password" && (
          <ShowPasswordButton onClick={showPasswordValue} show={showPassword} />
        )}
      </Styles.InputWrapper>

      {/* error message */}
      <Styles.ErrorWrapper $margin="l-4 t-4">
        <Styles.Error component="div" name={name} />
      </Styles.ErrorWrapper>
    </Styles.Wrapper>
  );
};

Input.propTypes = {
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  label: PropTypes.string,
  margin: PropTypes.string,
  name: PropTypes.string.isRequired,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  reference: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  type: PropTypes.oneOf(["number", "password", "text"]),
};

Input.defaultProps = {
  autoComplete: "off",
  autoFocus: false,
  description: "",
  disabled: false,
  icon: null,
  innerRef: null,
  label: "",
  margin: "a-0",
  name: "",
  onKeyPress: null,
  placeholder: "",
  readOnly: false,
  reference: null,
  type: "text",
};
