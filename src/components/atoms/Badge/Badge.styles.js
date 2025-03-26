import styled, { css } from "styled-components";

import {
  getColor,
  marginProperties,
  paddingProperties,
} from "../../../utils/styles";

const Wrapper = styled("div")`
  ${(props) => css`
    background-color: ${getColor(props.theme, props.$color)};
    border-radius: 4px;
    display: inline-block;

    ${marginProperties(props)}
    ${paddingProperties(props, "x-8 y-4")}
  `}
`;

export const Styles = {
  Wrapper,
};