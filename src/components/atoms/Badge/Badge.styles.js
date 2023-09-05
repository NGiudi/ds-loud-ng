import styled, { css } from "styled-components";

import {
  getColor,
  marginProperties,
  paddingProperties,
} from "../../../utils/styles";

const Wrapper = styled("div")`
  ${(props) => css`
    display: inline-block;
    background-color: ${getColor(props.theme, props.$color)};
    border-radius: ${props.theme.components.badge.border.radius};

    ${marginProperties(props)}
    ${paddingProperties(props, props.theme.components.badge.padding)}
  `}
`;

export const Styles = {
  Wrapper,
};
