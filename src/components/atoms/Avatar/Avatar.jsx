/* last update March 5 2022 */
import React, { useState } from "react";
import PropTypes from "prop-types";

/* import hooks */
import useOuterClick from "../../../hooks/useOuterClick";

/* import components. */
import { Panel, Image } from "../../../";

/* import styles.*/
import Styles from "./Avatar.styles";

export const Avatar = (props) => {
  const { size } = props;

  const [isOpen, setIsOpen] = useState(false);

  const innerRef = useOuterClick(() => {
    setIsOpen(false);
  });

  const imageAttributes = {
    /* default values. */
    alt: "default-alt",
    img: null,
    placeholder: "L",
    /* component values. */
    ...props.img,
  };

  const handleAvatarClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Styles.Wrapper margin={props.margin} ref={innerRef}>
      <Styles.AvatarWrapper isSelected={isOpen} onClick={handleAvatarClick}>
        <Image size={size} type="round" {...imageAttributes} />
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
  img: PropTypes.shape({
    alt: PropTypes.string,
    img: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  margin: PropTypes.string,
  size: PropTypes.oneOf(["avatar", "avatarSm"]),
};

Avatar.defaultProps = {
  children: null,
  img: null,
  margin: "a-0",
  size: "avatar",
};
