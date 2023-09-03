import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Text.styles";

export const Text = (props) => {
  const { as, htmlFor } = props;

  const textOptions = {
    $align: props.align,
    children: props.children,
    $color: props.color,
    $decoration: props.decoration,
    $margin: props.margin,
    $padding: props.padding,
    $size: props.size,
    $type: props.type,
    $weight: props.weight,
  };

  const getTextType = () => {
    switch (as) {
      case "label":
        return <Styles.LabelWrapper htmlFor={htmlFor} {...textOptions} />;
      default:
        return <Styles.TextWrapper as={as} {...textOptions} />;
    }
  };

  return getTextType();
};

Text.propTypes = {
  align: PropTypes.oneOf(["center", "end", "start"]),
  as: PropTypes.oneOf(["label", "p", "span"]),
  color: PropTypes.string,
  decoration: PropTypes.oneOf(["underline", "line-through"]),
  htmlFor: PropTypes.string, //? used only for label type.
  margin: PropTypes.string,
  padding: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl "]),
  type: PropTypes.oneOf([
    "bodyRegular",
    "bodySemibold",
    "captionRegular",
    "captionSemibold",
    "pageTitle",
    "subtitle",
    "title",
  ]),
  weight: PropTypes.oneOf(["bold", "regular", "semibold"]),
};

Text.defaultProps = {
  align: "start",
  as: "p",
  color: "black_900",
  decoration: null,
  htmlFor: "",
  margin: "a-0",
  padding: "a-0",
  size: "sm",
  type: null,
  weight: "regular",
};
