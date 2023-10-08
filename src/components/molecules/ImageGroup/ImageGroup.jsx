import React from "react";
import PropTypes from "prop-types";

import { Flex, Text } from "../../../";

import { Styles } from "./ImageGroup.styles";

export const ImageGroup = (props) => {
  const { images, margin, max, name, size } = props;

  const displayedImages = images.slice(0, max);

  const extras = images.length - max;

  return (
    <Flex margin={margin}>
      <Styles.Wrapper $quantity={displayedImages.length} $size={size}>
        {displayedImages.map((image, idx) => {
          return (
            <Styles.ImageItem
              alt={image.alt}
              key={`${name}-inage-${idx}-group`}
              $idx={idx}
              $size={size}
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

ImageGroup.defaultProps = {
  images: [],
  margin: "a-0",
  max: 3,
  name: "",
  size: "md",
};
