import React, { useState } from "react";
import PropTypes from "prop-types";

import { useOuterClick } from "../../../../../hooks/useOuterClick";

import { Panel, Image } from "../../../../..";

import { Styles } from "./ProfileAvatar.styles";

const DEFAULT_PROPS = {
  children: null,
  img: null,
};

export const ProfileAvatar = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const [isOpen, setIsOpen] = useState(false);

  const innerRef = useOuterClick(() => {
    setIsOpen(false);
  });

  const imageAttributes = {
    //? default values.
    alt: "default-alt",
    img: null,
    placeholder: "L",
    //? component values.
    ...attrs.img,
  };

  const handleAvatarClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Styles.Wrapper ref={innerRef}>
      <Styles.AvatarWrapper $isSelected={isOpen} onClick={handleAvatarClick}>
        <Image {...imageAttributes} size="avatar" type="round" />
      </Styles.AvatarWrapper>

      {isOpen && (
        <Styles.PanelWrapper>
          <Panel padding="a-0">{attrs.children}</Panel>
        </Styles.PanelWrapper>
      )}
    </Styles.Wrapper>
  );
};

//TODO: usar las propTypes de la imagen.
ProfileAvatar.propTypes = {
  children: PropTypes.node,
  img: PropTypes.shape({
    alt: PropTypes.string,
    img: PropTypes.string,
    placeholder: PropTypes.string,
  }),
};
