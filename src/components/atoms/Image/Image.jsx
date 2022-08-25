import React from "react";
import PropTypes from "prop-types";

/* components */
import { Icon } from "../../../index";

/* styles */
import { ImageStyles, WithoutImage } from "./Image.styles";

export const Image = (props) => {
  const { img, ...others } = props;

  if (!img) {
    return (
      <WithoutImage {...others}>
        <Icon color="white" icon="camera" size="sm" />
      </WithoutImage>
    );
  }

  return <ImageStyles src={img} {...others} />;
};

Image.propTypes = {
  img: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOf(["avatar", "avatarSm", "lg", "md", "sm"]),
  type: PropTypes.oneOf(["round", "square"]),
};

Image.defaultProps = {
  img: null,
  margin: "a-0",
  size: "md",
  type: "square",
};
