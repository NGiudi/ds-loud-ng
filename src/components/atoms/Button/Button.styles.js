import styled, { css, keyframes } from "styled-components";

import { marginProperties } from "../../../utils/styles";

//? loading animation
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ContentWrapper = styled.span`
  align-items: center;
  display: flex;

  ${(props) => css`
    visibility: ${props.$loading ? "hidden" : "visible"};
  `}
`;

const LoaderWrapper = styled.span`
  left: calc(50% - 10px); /* TODO: 10px = half icon size */
  position: absolute;
  top: calc(50% - 10px); /* TODO: 10px = half icon size */

  ${(props) => css`
    animation-name: ${rotate};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    display: ${props.$loading ? "block" : "none"};
  `}
`;

const OutlinedButton = styled.button`
  align-items: center;
  background-color: transparent;
  display: inline-flex;
  justify-content: center;
  position: relative;

  ${(props) => css`
    border: 1px solid ${props.theme.colors.orange._600};
    border-radius: ${props.$border
      ? props.$border.radius
      : props.theme.components.button.outlined.borderRadius};
    color: ${props.theme.colors.orange._600};
    height: ${props.theme.components.button.outlined.height};
    padding: ${props.theme.components.button.outlined.padding};
    width: ${props.$fullWidth ? "100%" : "auto"};

    ${marginProperties(props)}
  `}

  &:hover:enabled {
    ${(props) => css`
      border-color: ${!props.$loading && props.theme.colors.orange._800};
      color: ${!props.$loading && props.theme.colors.orange._800};
    `}
  }

  &:active:enabled {
    ${(props) => css`
      border-color: ${!props.$loading && props.theme.colors.orange._900};
      color: ${!props.$loading && props.theme.colors.orange._900};
    `}
  }

  &:disabled {
    box-shadow: none;

    ${(props) => css`
      border-color: ${props.theme.colors.black._400};
      color: ${props.theme.colors.black._400};
    `}
  }
`;

const SolidButton = styled.button`
  align-items: center;
  border: none;
  color: white;
  display: inline-flex;
  justify-content: center;
  position: relative;

  ${(props) => css`
    background-color: ${props.theme.colors.orange._600};
    border-radius: ${props.$border
      ? props.$border.radius
      : props.theme.components.button.outlined.borderRadius};
    box-shadow: ${props.theme.shadows.level1};
    height: ${props.theme.components.button.solid.height};
    padding: ${props.theme.components.button.solid.padding};
    width: ${props.$fullWidth ? "100%" : "auto"};

    ${marginProperties(props)}
  `}

  &:hover:enabled {
    ${(props) => css`
      background-color: ${!props.$loading && props.theme.colors.orange._800};
      box-shadow: ${!props.$loading && props.theme.shadows.level2};
    `}
  }

  &:active:enabled {
    ${(props) => css`
      background-color: ${!props.$loading && props.theme.colors.orange._900};
      box-shadow: ${!props.$loading && props.theme.shadows.level3};
    `}
  }

  &:disabled {
    box-shadow: none;

    ${(props) => css`
      background-color: ${props.theme.colors.black._400};
    `}
  }
`;

const TextButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  display: inline-flex;
  justify-content: center;
  position: relative;

  ${(props) => css`
    border-radius: ${props.$border
      ? props.$border.radius
      : props.theme.components.button.outlined.borderRadius};
    height: ${props.theme.components.button.solid.height};
    padding: ${props.theme.components.button.solid.padding};
    width: ${props.$fullWidth ? "100%" : "auto"};

    ${marginProperties(props)}
  `}

  &:hover:enabled {
    ${(props) => css`
      background-color: ${!props.$loading && props.theme.colors.black._200};
    `}
  }

  &:active:enabled {
    ${(props) => css`
      background-color: ${!props.$loading && props.theme.colors.black._300};
    `}
  }

  &:disabled {
    box-shadow: none;

    ${(props) => css`
      color: ${props.theme.colors.black._400};
    `}
  }
`;

export const Styles = {
  ContentWrapper,
  LoaderWrapper,
  OutlinedButton,
  SolidButton,
  TextButton,
};
