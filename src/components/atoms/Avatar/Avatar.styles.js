import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const AvatarWrapper = styled.div`
  border-radius: 50%;
  border-style: solid;
  display: inline-block;

  ${(props) =>
    css`
      border-color: ${props.isSelected
        ? `${props.theme.colors.black._300}`
        : "transparent"};
      border-width: ${props.theme.components.avatar.thickShadow};

      &:hover {
        border-color: ${!props.isSelected && props.theme.colors.black._200};
      }
    `}
`;

const PanelWrapper = styled.div`
  left: 0;
  position: absolute;
  top: 100%;

  ${(props) => css`
    ${marginProperties(props)}
  `}
`;

const Wrapper = styled.div`
  position: relative;

  ${(props) => css`
    ${marginProperties(props)}
  `}
`;

const Styles = {
  AvatarWrapper,
  PanelWrapper,
  Wrapper,
};

export default Styles;
