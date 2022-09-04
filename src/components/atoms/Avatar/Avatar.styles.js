import styled, { css } from "styled-components";

export const Wrapper = styled.div`
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

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const WordWrapper = styled.div`
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
