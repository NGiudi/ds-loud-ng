import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const AvatarWrapper = styled.div`
  border-radius: 50%;
  border-style: solid;
  overflow: hidden;

  ${(props) =>
    css`
      border-color: ${props.isSelected
        ? `${props.theme.colors.black._300}`
        : "transparent"};
      border-width: ${props.theme.components.avatar.thickShadow};
      height: ${props.theme.components.avatar.size[props.size]};
      width: ${props.theme.components.avatar.size[props.size]};

      &:hover {
        border-color: ${props.isButton &&
        !props.isSelected &&
        props.theme.colors.black._200};
      }
    `}
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const PanelWrapper = styled.div`
  left: 0;
  position: absolute;
  top: 100%;

  ${(props) => css`
    ${marginProperties(props)}
  `}
`;

const WordWrapper = styled.div`
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  ${(props) =>
    css`
      background-color: ${props.theme.colors.orange._700};
    `}
`;

const Wrapper = styled.div`
  position: relative;

  ${(props) => css`
    ${marginProperties(props)}
  `}
`;

const Styles = {
  AvatarWrapper,
  Image,
  PanelWrapper,
  WordWrapper,
  Wrapper,
};

export default Styles;
