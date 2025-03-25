import React from "react";
import PropTypes from "prop-types";

import { Icon } from "../../../../../";

const DEFAULT_PROPS = {
  onClick: () => {},
  show: false,
};

export const ShowPasswordButton = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <Icon
      color="black_500"
      icon={attrs.show ? "eye-slash" : "eye"}
      margin="r-8"
      onClick={attrs.onClick}
      size="sm"
    />
  );
};

ShowPasswordButton.propTypes = {
  onClick: PropTypes.func,
  show: PropTypes.bool,
};