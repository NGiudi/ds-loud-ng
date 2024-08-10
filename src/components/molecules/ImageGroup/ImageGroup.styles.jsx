import styled, { css } from "styled-components";

const Wrapper = styled("div")`
  ${(props) => {
    return css`
      height: 40px;
      display: inline-block;
      position: relative;
      width: ${20 * (props.$quantity + 1)}px;
    `;
  }}
`;

const ImageItem = styled("img")`
  ${(props) => {
    return css`
      border-radius: 50%;
      height: 40px;
      left: ${props.$idx * 20}px;
      object-fit: cover;
      position: absolute;
      top: 0;
      width: 40px;
    `;
  }}
`;

export const Styles = {
  ImageItem,
  Wrapper,
};
