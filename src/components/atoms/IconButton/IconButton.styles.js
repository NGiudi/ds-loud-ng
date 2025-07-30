import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const Count = styled("div")`
  border-radius: 50%;
  background-color: red;
  height: 16px;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 16px;
`;

const IconButton = styled("button")`
  ${(props) => css`
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    display: flex;
    height: 38px;
    justify-content: center;
    position: relative;
    width: 38px;

    ${marginProperties(props)}

    &:hover:enabled {
      background-color: ${
        props.$invert
          ? props.theme.colors.black._500
          : props.theme.colors.black._200
      };
    }

    &:active:enabled {
      background-color: ${
        props.loading
          ? "transparent"
          : props.$invert
          ? props.theme.colors.black._600
          : props.theme.colors.black._300
      };
    }

    &:disabled {
      border-color: ${props.theme.colors.black._400};
      box-shadow: none;
      color: ${props.theme.colors.black._400};
    }
  `}
`;

export const Styles = {
  Count,
  IconButton,
};