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
    size: props.size,
    type: props.type,
    $weight: props.weight,
  };
  
  const getTextType = () => {
    switch (as) {
      case "label":
        return <Styles.LabelWrapper htmlFor={htmlFor} {...textOptions} />;
      case "p":
        return <Styles.TextWrapper {...textOptions} />;
      default:
        return <Styles.TextWrapper {...textOptions} />;
    }
  };

  return getTextType();
};

Text.propTypes = {
  align: PropTypes.oneOf(["center", "end", "start"]),
  as: PropTypes.oneOf(["label", "p"]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  decoration: PropTypes.oneOf(["underline", "line-through"]),
  htmlFor: PropTypes.string, //? used only for label type.
  margin: PropTypes.string,
  padding: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.oneOf(["text", "title"]),
  weight: PropTypes.oneOf(["light", "regular", "semibold", "bold"]),
};

Text.defaultProps = {
  align: "start",
  as: "p",
  color: {
    intensity: "900",
    tone: "black",
  },
  decoration: null,
  htmlFor: "",
  margin: "a-0",
  padding: "a-0",
  size: "md",
  type: "text",
  weight: "regular",
};
