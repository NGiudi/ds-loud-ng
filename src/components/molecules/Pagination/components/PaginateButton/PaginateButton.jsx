import React from "react";
import { PropTypes } from "prop-types";

import { Button } from "../../../../atoms";

import { Styles } from "./PaginateButton.styles";

export const PaginateButton = (props) => {
  const { children, kind, onClick } = props;

  return (
    <Styles.Wrapper>
      <Button fullWidth kind={kind} onClick={onClick}>
        {children}
      </Button>
    </Styles.Wrapper>
  );
};

PaginateButton.propTypes = {
  children: PropTypes.node,
  kind: PropTypes.string,
  onClick: PropTypes.func,
};

PaginateButton.defaultProps = {
  children: 0,
  kind: "outlined",
  onClick: () => {},
};
