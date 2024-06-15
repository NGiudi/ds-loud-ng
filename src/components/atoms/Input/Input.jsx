import React, { useState } from "react";
import PropTypes from "prop-types";

import { ShowPasswordButton } from "./components";
import { Icon, Text } from "../../../";

import { Styles } from "./Input.styles";

export const Input = (props) => {
  const { description, icon, id, label, name, type } = props;

  const [showPassword, setShowPassword] = useState(false);

  const showPasswordValue = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Styles.Wrapper $margin={props.margin}>
      {!!label && (
        <Text as="label" htmlFor={id} margin="b-4" type="bodySemibold">
          {label}
        </Text>
      )}

      {!!description && (
        <Text color="black_400" margin="b-4" type="captionRegular">
          {description}
        </Text>
      )}

      <Styles.InputWrapper ref={props.reference}>
        {/* left icon */}
        {!!icon && <Icon icon={icon} margin="r-8" size="sm" />}

        <Styles.InputStyles
          autoComplete={props.autoComplete}
          autoFocus={props.autoFocus}
          id={id}
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
  id: PropTypes.string,
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
  id: null,
  innerRef: null,
  label: "",
  margin: "a-0",
  name: "",
  onKeyPress: () => {},
  placeholder: "",
  readOnly: false,
  reference: null,
  type: "text",
};
