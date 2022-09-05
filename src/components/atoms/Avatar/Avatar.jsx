/* last update March 5 2022 */
import React, { useState } from "react";
import PropTypes from "prop-types";

/* import components. */
import { Panel, Text } from "../../../";

/* import styles.*/
import Styles from "./Avatar.styles";

export const Avatar = (props) => {
  const { img, isButton, placeholderWord, size } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleAvatarClick = () => {
    if (isButton) {
      setIsOpen((prev) => !prev);
    }
  };

  const renderContent = () => {
    if (img) {
      return <Styles.Image src={img} alt="roberto_foto_perfil" />;
    }

    return (
      <Styles.WordWrapper size={size}>
        <Text size={size}>{placeholderWord[0]}</Text>
      </Styles.WordWrapper>
    );
  };

  return (
    <Styles.Wrapper margin={props.margin}>
      <Styles.AvatarWrapper
        isButton={isButton}
        isSelected={isOpen}
        onClick={handleAvatarClick}
        size={size}
      >
        {renderContent()}
      </Styles.AvatarWrapper>

      {isOpen && (
        <Styles.PanelWrapper margin="t-8">
          <Panel width="200px">{props.children}</Panel>
        </Styles.PanelWrapper>
      )}
    </Styles.Wrapper>
  );
};

Avatar.propTypes = {
  children: PropTypes.node,
  img: PropTypes.string,
  isButton: PropTypes.bool,
  margin: PropTypes.string,
  placeholderWord: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

Avatar.defaultProps = {
  children: null,
  img: null,
  isButton: false,
  margin: "a-0",
  placeholderWord: "L",
  size: "md",
};
