import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const IconButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;

  ${(props) =>
    css`
      height: ${props.theme.components.button.icon.size[props.size]};
      width: ${props.theme.components.button.icon.size[props.size]};
      ${marginProperties(props)}
    `}

  &:hover:enabled {
    ${(props) =>
      css`
        background-color: ${props.theme.colors.black._200};
      `}
  }

  &:active:enabled {
    ${(props) =>
      css`
        background-color: ${!props.loading && props.theme.colors.black._300};
      `}
  }

  &:disabled {
    box-shadow: none;

    ${(props) =>
      css`
        border-color: ${props.theme.colors.black._400};
        color: ${props.theme.colors.black._400};
      `}
  }
`;

const OutlinedButton = styled.button`
  align-items: center;
  background-color: transparent;
  display: inline-flex;
  justify-content: center;
  position: relative;

  ${(props) =>
    css`
      border: 1px solid ${props.theme.colors.orange._700};
      border-radius: ${props.theme.components.button.outlined.borderRadius};
      color: ${props.theme.colors.orange._700};
      height: ${props.theme.components.button.outlined.height};
      padding: ${props.theme.components.button.outlined.padding};

      ${marginProperties(props)}
    `}

  &:hover:enabled {
    ${(props) =>
      css`
        border-color: ${!props.loading && props.theme.colors.orange._800};
        color: ${!props.loading && props.theme.colors.orange._800};
      `}
  }

  &:active:enabled {
    ${(props) =>
      css`
        border-color: ${!props.loading && props.theme.colors.orange._900};
        color: ${!props.loading && props.theme.colors.orange._900};
      `}
  }

  &:disabled {
    box-shadow: none;

    ${(props) =>
      css`
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

  ${(props) =>
    css`
      background-color: ${props.theme.colors.orange._700};
      border-radius: ${props.theme.components.button.solid.borderRadius};
      box-shadow: ${props.theme.shadows.level1};
      height: ${props.theme.components.button.solid.height};
      padding: ${props.theme.components.button.solid.padding};
      width: ${props.fullWidth ? "100%" : "auto"};

      ${marginProperties(props)}
    `}

  &:hover:enabled {
    ${(props) =>
      css`
        background-color: ${!props.loading && props.theme.colors.orange._800};
        box-shadow: ${!props.loading && props.theme.shadows.level2};
      `}
  }

  &:active:enabled {
    ${(props) =>
      css`
        background-color: ${!props.loading && props.theme.colors.orange._900};
        box-shadow: ${!props.loading && props.theme.shadows.level3};
      `}
  }

  &:disabled {
    box-shadow: none;

    ${(props) =>
      css`
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

  ${(props) =>
    css`
      border-radius: ${props.theme.components.button.solid.borderRadius};
      height: ${props.theme.components.button.solid.height};
      padding: ${props.theme.components.button.solid.padding};
      width: ${props.fullWidth ? "100%" : "auto"};

      ${marginProperties(props)}
    `}

  &:hover:enabled {
    ${(props) =>
      css`
        background-color: ${!props.loading && props.theme.colors.black._200};
      `}
  }

  &:active:enabled {
    ${(props) =>
      css`
        background-color: ${!props.loading && props.theme.colors.black._300};
      `}
  }

  &:disabled {
    box-shadow: none;

    ${(props) =>
      css`
        color: ${props.theme.colors.black._400};
      `}
  }
`;

const Styles = {
  IconButton,
  OutlinedButton,
  SolidButton,
  TextButton,
};

export default Styles;
