import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { ImagePlaceholder } from "./components";

import { Styles } from "./Image.styles";

const DEFAULT_PROPS = {
  alt: "",
  src: "",
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

  const [imgSrc, setImgSrc] = React.useState(null);

  useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch(attrs.src);

        if (response.ok) {
          setImgSrc(attrs.src);
        } else {
          setImgSrc(null);
        }
      } catch {
        setImgSrc(null);
      }
    };

    checkImage();
  }, [attrs.src]);

  if (!imgSrc) {
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
      src={imgSrc}
      $type={attrs.type}
    />
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  margin: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["avatar", "lg", "md", "sm"]),
  type: PropTypes.oneOf(["round", "square"]),
};