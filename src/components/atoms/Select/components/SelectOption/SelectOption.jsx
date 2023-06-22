import React, { useContext } from "react";
import PropTypes from "prop-types";

/* context */
import { SelectContext } from "../../SelectContext";

/* styles */
import { Styles } from "./SelectOption.styles";

export const SelectOption = (props) => {
  const { value } = props;

  const ctx = useContext(SelectContext);

  const handleClick = () => {
    ctx.handleSelectedValue(value);
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
  value: PropTypes.string,
};

SelectOption.defaultProps = {
  children: null,
  value: "",
};
