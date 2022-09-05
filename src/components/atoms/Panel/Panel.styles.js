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
  border-radius: 4px;
  display: flex;
  position: relative;

  ${(props) =>
    css`
      background-color: ${props.theme.colors.alert.bgColors[props.type]};
      box-shadow: ${props.theme.shadows.level2};
      color: ${props.theme.colors.alert.colors[props.type]};

      ${marginProperties(props)}
      ${paddingProperties(props, "a-3")}
    `}
`;

const PositionWrapper = styled.div`
  display: flex;
  flex-grow: 1;

  ${(props) =>
    css`
      align-items: ${props.align};
    `}
`;

const Styles = {
  ContentWrapper,
  PanelWrapper,
  PositionWrapper,
};

export default Styles;
