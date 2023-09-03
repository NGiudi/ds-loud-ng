import React from "react";
import PropTypes from "prop-types";

import { Icon, Text } from "../../../../..";

import { Styles } from "./ImagePlaceholder.styles";

export const ImagePlaceholder = (props) => {
  const { placeholder, margin, size, type } = props;

  const selectTextSize = () => {
    if (["avatarSm", "sm"].includes(size)) {
      return "captionSemibold";
    }

    return "bodySemibold";
  };

  return (
    <Styles.IconPlaceholder $margin={margin} $size={size} $type={type}>
      {placeholder ? (
        <Text color="black_100" type={selectTextSize()}>
          {placeholder.charAt(0).toUpperCase()}
        </Text>
      ) : (
        <Icon color="black_100" icon="camera" size={size} />
      )}
    </Styles.IconPlaceholder>
  );
};

ImagePlaceholder.propTypes = {
  margin: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["avatar", "avatarSm", "lg", "md", "sm"]),
  type: PropTypes.oneOf(["round", "square"]),
};

ImagePlaceholder.defaultProps = {
  margin: "a-0",
  placeholder: "",
  size: "md",
  type: "square",
};
