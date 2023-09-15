import React from "react";
import PropTypes from "prop-types";

import { Icon } from "../../..";

import { Styles } from "./IconButton.styles";

export const IconButton = (props) => {
  const { disabled, icon, id, margin, onClick } = props;

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <Styles.IconButton
      disabled={disabled}
      id={id}
      $margin={margin}
      onClick={handleClick}
    >
      <Icon icon={icon.name} size={icon.size} />
    </Styles.IconButton>
  );
};

IconButton.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.shape({
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    size: PropTypes.oneOf(["input", "lg", "md", "sm"]),
  }).isRequired,
  id: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  disabled: false,
  icon: null, //? default value insert into javascript code.
  id: null,
  margin: "a-0",
  onClick: null,
};
