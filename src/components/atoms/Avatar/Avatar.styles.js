import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const AvatarWrapper = styled("div")`
  ${(props) => css`
    border-color: ${props.$isSelected
      ? `${props.theme.colors.black._500}`
      : "transparent"};
    border-radius: 50%;
    border-style: solid;
    border-width: ${props.theme.components.avatar.thickShadow};
    display: inline-block;

    &:hover {
      border-color: ${!props.$isSelected && props.theme.colors.black._600};
    }
  `}
`;

const PanelWrapper = styled("div")`
  ${(props) => css`
    position: absolute;
    ${props.$pos}: 0;
    top: 100%;
    width: 250px;
    ${marginProperties(props)}
  `}
`;

const Wrapper = styled("div")`
  ${(props) => css`
    display: inline-block;
    position: relative;
    width: fit-content;

    ${marginProperties(props)}
  `}
`;

export const Styles = {
  AvatarWrapper,
  PanelWrapper,
  Wrapper,
};
