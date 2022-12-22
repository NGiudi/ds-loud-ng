import React from "react";
import PropTypes from "prop-types";

/* import components */
import { ImagePlaceholder } from "./components";

/* import styles */
import { Styles } from "./Image.styles";

/* import utils */
import {
  getImageOptionsFilter,
  getPlaceholderOptionsFilter,
} from "./utils/propsFilter";

export const Image = (props) => {
  const { img } = props;

  const placeholderOptions = getPlaceholderOptionsFilter(props);
  const imageOptions = getImageOptionsFilter(props);

  if (!img) {
    return <ImagePlaceholder {...placeholderOptions} />;
  }

  return <Styles.ImageStyles src={img} {...imageOptions} />;
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
