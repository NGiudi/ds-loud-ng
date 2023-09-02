import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const AvatarWrapper = styled.div`
  border-radius: 50%;
  border-style: solid;
  display: inline-block;

  ${(props) => css`
    border-color: ${props.$isSelected
      ? `${props.theme.colors.black._500}`
      : "transparent"};
    border-width: ${props.theme.components.avatar.thickShadow};

    &:hover {
      border-color: ${!props.$isSelected && props.theme.colors.black._600};
    }
  `}
`;

const PanelWrapper = styled.div`
  position: absolute;
  top: 100%;
  width: 250px;

  ${(props) => css`
    ${props.$pos}: 0;
    ${marginProperties(props)}
  `}
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: fit-content;

  ${(props) => css`
    ${marginProperties(props)}
  `}
`;

export const Styles = {
  AvatarWrapper,
  PanelWrapper,
  Wrapper,
};
