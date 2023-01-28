import React from "react";
import PropTypes from "prop-types";

/* import components */
import { Icon } from "../../../../../";

export const ShowPasswordButton = (props) => {
  const { onClick, show } = props;

  return (
    <Icon
      color={{ intensity: "500", tone: "black" }}
      icon={show ? "eye-slash" : "eye"}
      margin="r-8"
      onClick={onClick}
      size="sm"
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
