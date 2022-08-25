import React from "react";
import PropTypes from "prop-types";

/* import components */
import { Button } from "../../../../../";

export const ShowPasswordButton = (props) => {
  const { onClick, show } = props;

  return (
    <Button
      icon={{ name: show ? "eye-slash" : "eye", size: "input" }}
      kind="icon"
      onClick={onClick}
      size="input"
    />
  );
};

ShowPasswordButton.propTypes = {
  onClick: PropTypes.func,
  show: PropTypes.bool,
};

ShowPasswordButton.defaultProps = {
  onClick: null,
  show: false,
};
