import React, { useState } from "react";
import PropTypes from "prop-types";

/* import components. */
import { ShowPasswordButton } from "./components/ShowPasswordButton/ShowPasswordButton";
import { Icon, Text } from "../../../";

/* import styles. */
import Styles from "./Input.styles";

import { propsFilter } from "../../../utils/props/filter";

export const Input = (props) => {
  const { icon, type } = props;

  const inputProps = propsFilter(props, "textInputOptions");

  const [showPassword, setShowPassword] = useState(false);

  const showPasswordValue = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Styles.Wrapper margin={props.margin}>
      {/* label */}
      <Text margin="b-4" weight="semibold">
        {props.label}
      </Text>

      <Styles.InputWrapper padding="x-8 y-4" ref={props.reference}>
        {/* left icon */}
        {!!icon && <Icon icon={icon} margin="r-8" size="sm" />}

        <Styles.InputStyles
          {...inputProps}
          type={showPassword ? "text" : type}
        />

        {type === "password" && (
          <ShowPasswordButton onClick={showPasswordValue} show={showPassword} />
        )}
      </Styles.InputWrapper>

      {/* error message */}
      <Styles.Error component="div" margin="l-4 t-4" name={props.name} />
    </Styles.Wrapper>
  );
};

Input.propTypes = {
  autoComplete: PropTypes.string,
  icon: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  label: PropTypes.string,
  margin: PropTypes.string,
  name: PropTypes.string,
  onKeyPress: PropTypes.func,
  reference: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  type: PropTypes.oneOf(["number", "password", "text"]),
};

Input.defaultProps = {
  autoComplete: "off",
  icon: null,
  innerRef: null,
  label: "",
  margin: "a-0",
  name: "",
  onKeyPress: null,
  reference: null,
  type: "text",
};
