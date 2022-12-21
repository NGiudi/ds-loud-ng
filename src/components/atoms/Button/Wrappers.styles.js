import styled, { css, keyframes } from "styled-components";

//? loading animation
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const LoaderWrapper = styled.span`
  left: calc(50% - 10px); /* TODO: 10px = half icon size */
  position: absolute;
  top: calc(50% - 10px); /* TODO: 10px = half icon size */

  ${(props) =>
    css`
      animation-name: ${rotate};
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      display: ${props.loading ? "block" : "none"};
    `}
`;

export const ContentWrapper = styled.span`
  align-items: center;
  display: flex;

  ${(props) =>
    css`
      visibility: ${props.loading ? "hidden" : "visible"};
    `}
`;
