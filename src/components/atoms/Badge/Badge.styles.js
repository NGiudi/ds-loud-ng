import styled, { css } from "styled-components";

import {
  getColor,
  marginProperties,
  paddingProperties,
} from "../../../utils/styles";

const Wrapper = styled.div`
  display: inline-block;

  ${(props) => css`
    background-color: ${getColor(props.theme, props.$color)};
    border-radius: ${props.theme.components.badge.border.radius};

    ${marginProperties(props)}
    ${paddingProperties(props, props.theme.components.badge.padding)}
  `}
`;

export const Styles = {
  Wrapper,
};
