import React from "react";
import PropTypes from "prop-types";

import { Icon, Text } from "../../../../..";

import { Styles } from "./ImagePlaceholder.styles";

const DEFAULT_PROPS = {
  margin: "a-0",
  placeholder: "",
  size: "md",
  type: "square",
};

export const ImagePlaceholder = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const selectTextSize = () => {
    if (["avatarSm", "sm"].includes(attrs.size)) {
      return "captionSemibold";
    }

    return "bodySemibold";
  };

  return (
    <Styles.IconPlaceholder $margin={attrs.margin} $size={attrs.size} $type={attrs.type}>
      {attrs.placeholder ? (
        <Text color="black_100" type={selectTextSize()}>
          {attrs.placeholder.charAt(0).toUpperCase()}
        </Text>
      ) : (
        <Icon color="black_100" icon="camera" size={attrs.size} />
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
