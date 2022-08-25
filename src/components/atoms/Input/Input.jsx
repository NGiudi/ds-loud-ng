import React, { useState } from "react";
import PropTypes from "prop-types";

/* import components. */
import { ShowPasswordButton } from "./components/ShowPasswordButton/ShowPasswordButton";
import { Icon, Text } from "../../../";

/* import styles. */
import { Error, InputStyles, InputWrapper, Wrapper } from "./Input.styles";

import { propsFilter } from "../../../utils/props/filter";

export const Input = (props) => {
  const { icon, type } = props;

  const inputProps = propsFilter(props, "textInputOptions");

  const [showPassword, setShowPassword] = useState(false);

  const showPasswordValue = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Wrapper margin={props.margin}>
      {/* label */}
      <Text margin="b-4" weight="semibold">
        {props.label}
      </Text>

      <InputWrapper padding="x-8 y-4" ref={props.reference}>
        {/* left icon */}
        {!!icon && <Icon icon={icon} margin="r-8" size="sm" />}

        <InputStyles {...inputProps} type={showPassword ? "text" : type} />

        {type === "password" && (
          <ShowPasswordButton onClick={showPasswordValue} show={showPassword} />
        )}
      </InputWrapper>

      {/* error message */}
      <Error component="div" margin="l-4 t-4" name={props.name} />
    </Wrapper>
  );
};

Input.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  margin: PropTypes.string,
  name: PropTypes.string,
  reference: PropTypes.func,
  type: PropTypes.oneOf(["number", "password", "text"]),
};

Input.defaultProps = {
  icon: null,
  label: "",
  margin: "a-0",
  name: "",
  reference: null,
  type: "text",
};
