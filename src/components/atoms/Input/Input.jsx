import React, { useState } from "react";
import PropTypes from "prop-types";

import { ShowPasswordButton } from "./components";
import { Icon, Text } from "../../../";

import { Styles } from "./Input.styles";

const DEFAULT_PROPS = {
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

export const Input = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const [showPassword, setShowPassword] = useState(false);

  const showPasswordValue = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Styles.Wrapper $margin={attrs.margin}>
      {!!attrs.label && (
        <Text as="label" htmlFor={attrs.id} margin="b-4" type="bodySemibold">
          {attrs.label}
        </Text>
      )}

      {!!attrs.description && (
        <Text color="black_400" margin="b-4" type="captionRegular">
          {attrs.description}
        </Text>
      )}

      <Styles.InputWrapper ref={attrs.reference}>
        {/* left icon */}
        {!!attrs.icon && <Icon icon={attrs.icon} margin="r-8" size="sm" />}

        <Styles.InputStyles
          autoComplete={attrs.autoComplete}
          autoFocus={attrs.autoFocus}
          id={attrs.id}
          disabled={attrs.disabled}
          innerRef={attrs.innerRef}
          name={attrs.name}
          onKeyPress={attrs.onKeyPress}
          placeholder={attrs.placeholder}
          readOnly={attrs.readOnly}
          type={showPassword ? "text" : attrs.type}
        />

        {attrs.type === "password" && (
          <ShowPasswordButton onClick={showPasswordValue} show={showPassword} />
        )}
      </Styles.InputWrapper>

      {/* error message */}
      <Styles.ErrorWrapper $margin="l-4 t-4">
        <Styles.Error component="div" name={attrs.name} />
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
