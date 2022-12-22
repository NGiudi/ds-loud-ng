import React from "react";
import PropTypes from "prop-types";

import { Icon, Text } from "../../../../..";

import { Styles } from "./ImagePlaceholder.styles";

export const ImagePlaceholder = (props) => {
  const { placeholder, size } = props;

  const selectTextSize = () => {
    if (["avatar", "avatarSm", "sm"].includes(size)) {
      return "md";
    }

    return "lg";
  };

  return (
    <Styles.IconPlaceholder {...props}>
      {placeholder ? (
        <Text color="white" size={selectTextSize()} weight="bold">
          {placeholder.charAt(0).toUpperCase()}
        </Text>
      ) : (
        <Icon color="white" icon="camera" size={size} />
      )}
    </Styles.IconPlaceholder>
  );
};

ImagePlaceholder.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["avatar", "avatarSm", "lg", "md", "sm"]),
};

ImagePlaceholder.defaultProps = {
  placeholder: "",
  size: "md",
};
