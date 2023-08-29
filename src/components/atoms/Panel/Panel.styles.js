import styled, { css } from "styled-components";

import { marginProperties, paddingProperties } from "../../../utils/styles";

const ContentWrapper = styled.div`
  flex-grow: 1;

  ${(props) =>
    css`
      ${marginProperties(props)}
    `}
`;

const PanelWrapper = styled.div`
  display: flex;
  position: relative;

  ${(props) =>
    css`
      background-color: ${props.theme.colors.alert.bgColors[props.type]};
      border-radius: ${props.theme.components.panel.border.radius};
      box-shadow: ${props.theme.shadows.level2};
      color: ${props.theme.colors.alert.colors[props.type]};

      &::-webkit-scrollbar {
        width: ${props.theme.components.panel.scroll.width};
      }

      &::-webkit-scrollbar-track {
        background: ${props.theme.colors.black._200};
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${props.theme.colors.black._300};
      }

      ${marginProperties(props)}
      ${paddingProperties(props, props.theme.components.panel.padding)}
    `}
`;

const PositionWrapper = styled.div`
  display: flex;
  flex-grow: 1;

  ${(props) =>
    css`
      align-items: ${props.$align};
    `}
`;

export const Styles = {
  ContentWrapper,
  PanelWrapper,
  PositionWrapper,
};
