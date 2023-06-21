import React, { useContext } from "react";
import PropTypes from "prop-types";

/* context */
import { SelectContext } from "../../SelectContext";

/* styles */
import { Styles } from "./SelectOption.styles";

export const SelectOption = (props) => {
  const { displayValue, value } = props;

  const ctx = useContext(SelectContext);

  const handleClick = () => {
    ctx.handleSelectedValue(value, displayValue);
    ctx.closeSelect();
  };

  return (
    <Styles.SelectOption onClick={handleClick}>
      {props.children}
    </Styles.SelectOption>
  );
};

SelectOption.propTypes = {
  children: PropTypes.node,
  displayValue: PropTypes.string,
  value: PropTypes.string,
};

SelectOption.defaultProps = {
  children: null,
  displayValue: "",
  value: "",
};
