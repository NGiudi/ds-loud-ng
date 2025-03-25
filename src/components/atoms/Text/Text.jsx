import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./Text.styles";

const DEFAULT_PROPS = {
  align: "start",
  as: "p",
  color: "black_900",
  decoration: "none",
  htmlFor: "",
  margin: "a-0",
  padding: "a-0",
  type: "bodyRegular",
};

export const Text = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const textOptions = {
    $align: attrs.align,
    children: attrs.children,
    $color: attrs.color,
    $decoration: attrs.decoration,
    $margin: attrs.margin,
    $padding: attrs.padding,
    $type: attrs.type,
  };

  const getTextType = () => {
    switch (attrs.as) {
      case "label":
        return <Styles.LabelWrapper htmlFor={attrs.htmlFor} {...textOptions} />;
      default:
        return <Styles.TextWrapper as={attrs.as} {...textOptions} />;
    }
  };

  return getTextType();
};

Text.propTypes = {
  align: PropTypes.oneOf(["center", "end", "start"]),
  as: PropTypes.oneOf(["label", "p", "span"]),
  color: PropTypes.string,
  decoration: PropTypes.oneOf(["line-through", "none", "underline"]),
  htmlFor: PropTypes.string, //? used only for label type.
  margin: PropTypes.string,
  padding: PropTypes.string,
  type: PropTypes.oneOf([
    "bodyRegular",
    "bodySemibold",
    "captionRegular",
    "captionSemibold",
    "pageTitle",
    "subtitle",
    "title",
  ]),
};