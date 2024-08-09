import React from "react";
import PropTypes from "prop-types";

import { ImagePlaceholder } from "./components";

import { Styles } from "./Image.styles";

const DEFAULT_PROPS = {
  alt: "",
  img: "",
  margin: "a-0",
  placeholder: "",
  size: "md",
  type: "square",
};

export const Image = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  if (!attrs.img) {
    return (
      <ImagePlaceholder
        margin={attrs.margin}
        placeholder={attrs.placeholder}
        size={attrs.size}
        type={attrs.type}
      />
    );
  }

  return (
    <Styles.ImageStyles
      alt={attrs.alt}
      $margin={attrs.margin}
      $size={attrs.size}
      src={attrs.img}
      $type={attrs.type}
    />
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  img: PropTypes.string,
  margin: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["avatar", "lg", "md", "sm"]),
  type: PropTypes.oneOf(["round", "square"]),
};
