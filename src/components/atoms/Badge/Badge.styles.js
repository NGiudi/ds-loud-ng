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
    border-radius: 4px;

    ${marginProperties(props)}
    ${paddingProperties(props, "x-8 y-4")}
  `}
`;

export const Styles = {
  Wrapper,
};
