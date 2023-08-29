import React from "react";
import PropTypes from "prop-types";

import { Icon, Text } from "../../../../..";

import { Styles } from "./ImagePlaceholder.styles";

export const ImagePlaceholder = (props) => {
  const { placeholder, margin, size, type } = props;

  const selectTextSize = () => {
    if (["avatar", "avatarSm", "sm"].includes(size)) {
      return "md";
    }

    return "lg";
  };

  return (
    <Styles.IconPlaceholder $margin={margin} $size={size} $type={type}>
      {placeholder ? (
        <Text
          color={{ intensity: "100", tone: "black" }}
          size={selectTextSize()}
          weight="bold"
        >
          {placeholder.charAt(0).toUpperCase()}
        </Text>
      ) : (
        <Icon
          color={{ intensity: "100", tone: "black" }}
          icon="camera"
          size={size}
        />
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
