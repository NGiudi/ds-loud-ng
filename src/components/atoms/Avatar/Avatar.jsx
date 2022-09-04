/* last update March 5 2022 */
import React, { useState } from "react";
import PropTypes from "prop-types";

/* import components. */
import { Text } from "../../../";

/* import styles.*/
import { WordWrapper, Wrapper, Image } from "./Avatar.styles";

//TODO: add panel content.
export const Avatar = (props) => {
  const { img, isButton, placeholderWord, size } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsOpen((prev) => !prev);
  };

  const renderContent = () => {
    if (img) {
      return <Image src={img} alt="roberto_foto_perfil" />;
    }

    return (
      <WordWrapper size={size}>
        <Text size={size}>{placeholderWord[0]}</Text>
      </WordWrapper>
    );
  };

  return (
    <Wrapper
      isButton={isButton}
      isSelected={isOpen}
      onClick={handleAvatarClick}
      size={size}
    >
      {renderContent()}
    </Wrapper>
  );
};

Avatar.propTypes = {
  img: PropTypes.string,
  isButton: PropTypes.bool,
  placeholderWord: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

Avatar.defaultProps = {
  img: null,
  isButton: false,
  placeholderWord: "L",
  size: "md",
};
