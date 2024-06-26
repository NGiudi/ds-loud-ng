import React, { useState } from "react";
import PropTypes from "prop-types";

import { useOuterClick } from "../../../../../hooks/useOuterClick";

import { Panel, Image } from "../../../../..";

import { Styles } from "./ProfileAvatar.styles";

export const ProfileAvatar = (props) => {
  const { id, size } = props;

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
        <Styles.PanelWrapper>
          <Panel padding="a-0">{props.children}</Panel>
        </Styles.PanelWrapper>
      )}
    </Styles.Wrapper>
  );
};

ProfileAvatar.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  img: PropTypes.shape({
    alt: PropTypes.string,
    img: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  margin: PropTypes.string,
  size: PropTypes.oneOf(["avatar", "avatarSm"]),
};

ProfileAvatar.defaultProps = {
  children: null,
  id: null,
  img: null,
  margin: "a-0",
  size: "avatar",
};
