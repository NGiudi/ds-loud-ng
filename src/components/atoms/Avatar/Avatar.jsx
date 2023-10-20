import React, { useState } from "react";
import PropTypes from "prop-types";

import { useOuterClick } from "../../../hooks/useOuterClick";

import { Panel, Image } from "../../../";

import { Styles } from "./Avatar.styles";

export const Avatar = (props) => {
  const { id, pos, size } = props;

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
    ...props.img,
  };

  const handleAvatarClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Styles.Wrapper id={id} $margin={props.margin} ref={innerRef}>
      <Styles.AvatarWrapper $isSelected={isOpen} onClick={handleAvatarClick}>
        <Image {...imageAttributes} size={size} type="round" />
      </Styles.AvatarWrapper>

      {isOpen && (
        <Styles.PanelWrapper $pos={pos}>
          <Panel padding="a-0">{props.children}</Panel>
        </Styles.PanelWrapper>
      )}
    </Styles.Wrapper>
  );
};

Avatar.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  img: PropTypes.shape({
    alt: PropTypes.string,
    img: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  margin: PropTypes.string,
  pos: PropTypes.oneOf(["left", "right"]),
  size: PropTypes.oneOf(["avatar", "avatarSm"]),
};

Avatar.defaultProps = {
  children: null,
  id: null,
  img: null,
  margin: "a-0",
  pos: "left",
  size: "avatar",
};
