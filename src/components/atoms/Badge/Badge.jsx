import React from "react";
import PropTypes from "prop-types";

import { Text } from "../Text/Text";

import { Styles } from "./Badge.styles";

const DEFAULT_PROPS = {
  children: null,
  color: "orange_700",
  id: "",
  margin: "a-0",
};

export const Badge = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };
  
const getColorText = (colorString) => {
  const color = colorString.split("_")[0];
  const intensity = colorString.split("_")[1];

  switch(color) {
    case "black":
      return parseInt(intensity) > 400 
        ? "black_100"
        : "black_900";
    case "red":
      return parseInt(intensity) > 600
        ? "black_100"
        : "black_900";
    case "orange":
      return parseInt(intensity) > 700
        ? "black_200"
        : "black_900";
  }

  return "black_900";
};

  return (
    <Styles.Wrapper $color={attrs.color} id={attrs.id} $margin={attrs.margin}>
      <Text color={getColorText(attrs.color)} type="bodySemibold">{attrs.children}</Text>
    </Styles.Wrapper>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  id: PropTypes.string,
  margin: PropTypes.string,
};