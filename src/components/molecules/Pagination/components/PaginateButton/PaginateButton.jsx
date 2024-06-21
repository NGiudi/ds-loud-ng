import React from "react";
import { PropTypes } from "prop-types";

import { Button } from "../../../../atoms";

import { Styles } from "./PaginateButton.styles";

const defaultProps = {
  children: 0,
  kind: "outlined",
  onClick: () => {},
};

export const PaginateButton = (props) => {
  const attrs = {
    ...defaultProps,
    ...props,
  };

  return (
    <Styles.Wrapper>
      <Button fullWidth kind={attrs.kind} onClick={attrs.onClick}>
        {attrs.children}
      </Button>
    </Styles.Wrapper>
  );
};

PaginateButton.propTypes = {
  children: PropTypes.node,
  kind: PropTypes.string,
  onClick: PropTypes.func,
};
