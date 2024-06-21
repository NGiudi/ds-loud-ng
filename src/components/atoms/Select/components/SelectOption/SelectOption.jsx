import React, { useContext } from "react";
import PropTypes from "prop-types";

import { SelectContext } from "../../SelectContext";

import { Styles } from "./SelectOption.styles";

const defaultProps = {
  children: null,
  value: "",
};

export const SelectOption = (props) => {
  const attrs = {
    ...defaultProps,
    ...props,
  };

  const ctx = useContext(SelectContext);

  const handleClick = () => {
    ctx.handleSelectedValue(attrs.value);
    ctx.closeSelect();
  };

  return (
    <Styles.SelectOption onClick={handleClick}>
      {attrs.children}
    </Styles.SelectOption>
  );
};

SelectOption.propTypes = {
  children: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
