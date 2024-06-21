import React from "react";
import PropTypes from "prop-types";

import { Flex, Text } from "../../../";

import { Styles } from "./ImageGroup.styles";

const defaultProps = {
  images: [],
  margin: "a-0",
  max: 3,
  name: "",
  size: "md",
};

export const ImageGroup = (props) => {
  const attrs = {
    ...defaultProps,
    ...props,
  };

  const displayedImages = attrs.images.slice(0, attrs.max);

  const extras = attrs.images.length - attrs.max;

  return (
    <Flex margin={attrs.margin}>
      <Styles.Wrapper $quantity={displayedImages.length} $size={attrs.size}>
        {displayedImages.map((image, idx) => {
          return (
            <Styles.ImageItem
              alt={image.alt}
              key={`${attrs.name}-inage-${idx}-group`}
              $idx={idx}
              $size={attrs.size}
              src={image.img}
            />
          );
        })}
      </Styles.Wrapper>

      {extras > 0 && (
        <Text as="span" margin="l-10" type="subtitle">
          +{extras}
        </Text>
      )}
    </Flex>
  );
};

ImageGroup.propTypes = {
  images: PropTypes.array,
  margin: PropTypes.string,
  max: PropTypes.number,
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
};
