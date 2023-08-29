import React from "react";
import PropTypes from "prop-types";

import { ImagePlaceholder } from "./components";

import { Styles } from "./Image.styles";

export const Image = (props) => {
  const { alt, img, margin, placeholder, size, type } = props;

  if (!img) {
    return (
      <ImagePlaceholder
        margin={margin}
        placeholder={placeholder}
        size={size}
        type={type}
      />
    );
  }

  return (
    <Styles.ImageStyles
      alt={alt}
      $margin={margin}
      $size={size}
      src={img}
      $type={type}
    />
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  img: PropTypes.string,
  margin: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["avatar", "avatarSm", "lg", "md", "sm"]),
  type: PropTypes.oneOf(["round", "square"]),
};

Image.defaultProps = {
  alt: null,
  img: null,
  margin: "a-0",
  placeholder: "",
  size: "md",
  type: "square",
};
