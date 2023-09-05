import styled, { css, keyframes } from "styled-components";

import { marginProperties } from "../../../utils/styles";

//? loading animation
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ContentWrapper = styled("span")`
  ${(props) => `   
    align-items: center;
    display: flex;
    visibility: ${props.$loading ? "hidden" : "visible"};
  `}
`;

const LoaderWrapper = styled("span")`
  ${(props) => css`
    animation-name: ${rotate};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    display: ${props.$loading ? "block" : "none"};
    left: calc(50% - 10px); /* TODO: 10px = half icon size */
    position: absolute;
    top: calc(50% - 10px); /* TODO: 10px = half icon size */
  `}
`;

const OutlinedButton = styled("button")`
  ${(props) => css`
    align-items: center;
    background-color: transparent;
    border: 1px solid ${props.theme.colors.orange._600};
    border-radius: ${props.$border
      ? props.$border.radius
      : props.theme.components.button.outlined.borderRadius};
    color: ${props.theme.colors.orange._600};
    display: inline-flex;
    height: ${props.theme.components.button.outlined.height};
    justify-content: center;
    padding: ${props.theme.components.button.outlined.padding};
    position: relative;
    width: ${props.$fullWidth ? "100%" : "auto"};

    ${marginProperties(props)}

    &:hover:enabled {
      border-color: ${!props.$loading && props.theme.colors.orange._800};
      color: ${!props.$loading && props.theme.colors.orange._800};
    }

    &:active:enabled {
      border-color: ${!props.$loading && props.theme.colors.orange._900};
      color: ${!props.$loading && props.theme.colors.orange._900};
    }

    &:disabled {
      border-color: ${props.theme.colors.black._400};
      box-shadow: none;
      color: ${props.theme.colors.black._400};
    }
  `}
`;

const SolidButton = styled("button")`
  ${(props) => css`
    align-items: center;
    background-color: ${props.theme.colors.orange._600};
    border: none;
    border-radius: ${props.$border
      ? props.$border.radius
      : props.theme.components.button.outlined.borderRadius};
    box-shadow: ${props.theme.shadows.level1};
    color: white;
    display: inline-flex;
    height: ${props.theme.components.button.solid.height};
    justify-content: center;
    padding: ${props.theme.components.button.solid.padding};
    position: relative;
    width: ${props.$fullWidth ? "100%" : "auto"};

    ${marginProperties(props)}

    &:hover:enabled {
      background-color: ${!props.$loading && props.theme.colors.orange._800};
      box-shadow: ${!props.$loading && props.theme.shadows.level2};
    }

    &:active:enabled {
      background-color: ${!props.$loading && props.theme.colors.orange._900};
      box-shadow: ${!props.$loading && props.theme.shadows.level3};
    }

    &:disabled {
      background-color: ${props.theme.colors.black._400};
      box-shadow: none;
    }
  `}
`;

const TextButton = styled("button")`
  ${(props) => css`
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: ${props.$border
      ? props.$border.radius
      : props.theme.components.button.outlined.borderRadius};
    display: inline-flex;
    height: ${props.theme.components.button.solid.height};
    justify-content: center;
    padding: ${props.theme.components.button.solid.padding};
    position: relative;
    width: ${props.$fullWidth ? "100%" : "auto"};

    ${marginProperties(props)}

    &:hover:enabled {
      background-color: ${!props.$loading && props.theme.colors.black._200};
    }

    &:active:enabled {
      background-color: ${!props.$loading && props.theme.colors.black._300};
    }

    &:disabled {
      box-shadow: none;
      color: ${props.theme.colors.black._400};
    }
  `}
`;

export const Styles = {
  ContentWrapper,
  LoaderWrapper,
  OutlinedButton,
  SolidButton,
  TextButton,
};
