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
};

ImagePlaceholder.defaultProps = {
  margin: "a-0",
  placeholder: "",
  size: "md",
};
