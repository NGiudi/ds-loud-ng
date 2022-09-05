import React from "react";
import PropTypes from "prop-types";

/* components */
import { Icon } from "../../../";

/* styles */
import Styles from "./Image.styles";

export const Image = (props) => {
  const { img, ...others } = props;

  if (!img) {
    return (
      <Styles.WithoutImage {...others}>
        <Icon color="white" icon="camera" size="sm" />
      </Styles.WithoutImage>
    );
  }

  return <Styles.ImageStyles src={img} {...others} />;
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
