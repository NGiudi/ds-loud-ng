import styled, { css } from "styled-components";

import { marginProperties, paddingProperties } from "../../../utils/styles";

const ContentWrapper = styled("div")`
  ${(props) => css`
    flex-grow: 1;

    ${marginProperties(props)}
  `}
`;

const PanelWrapper = styled("div")`
  ${(props) => css`
    background-color: ${props.theme.colors.alert.bgColors[props.type]};
    border-radius: ${props.theme.components.panel.border.radius};
    box-shadow: ${props.theme.shadows.level2};
    color: ${props.theme.colors.alert.colors[props.type]};
    display: flex;
    position: relative;

    ${marginProperties(props)}
    ${paddingProperties(props, props.theme.components.panel.padding)}
  
    &::-webkit-scrollbar {
      width: ${props.theme.components.panel.scroll.width};
    }

    &::-webkit-scrollbar-track {
      background: ${props.theme.colors.black._200};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props.theme.colors.black._300};
    }
  `}
`;

const PositionWrapper = styled("div")`
  ${(props) => css`
    align-items: ${props.$align};
    display: flex;
    flex-grow: 1;
  `}
`;

export const Styles = {
  ContentWrapper,
  PanelWrapper,
  PositionWrapper,
};
