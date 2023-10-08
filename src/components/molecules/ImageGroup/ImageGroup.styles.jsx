import styled, { css } from "styled-components";

const Wrapper = styled("div")`
  ${(props) => {
    const halfSize = props.theme.components.image.width.round[props.$size] / 2;

    return css`
      height: ${props.theme.components.image.height.round[props.$size]}px;
      display: inline-block;
      position: relative;
      width: ${halfSize * (props.$quantity + 1)}px;
    `;
  }}
`;

const ImageItem = styled("img")`
  ${(props) => {
    const halfSize = props.theme.components.image.width.round[props.$size] / 2;

    return css`
      border-radius: 50%;
      height: ${props.theme.components.image.height.round[props.$size]}px;
      left: ${props.$idx * halfSize}px;
      object-fit: cover;
      position: absolute;
      top: 0;
      width: ${props.theme.components.image.height.round[props.$size]}px;
    `;
  }}
`;

export const Styles = {
  ImageItem,
  Wrapper,
};
