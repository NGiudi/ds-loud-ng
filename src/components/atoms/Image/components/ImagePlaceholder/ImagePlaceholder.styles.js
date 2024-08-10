import styled, { css } from "styled-components";

import { marginProperties } from "../../../../../utils/styles";

import {
  IMAGE_HEIGHTS,
  IMAGE_WIDTHS,
} from "../../../../../assets/styles/image";

const IconPlaceholder = styled("div")`
  ${(props) => css`
    align-items: center;
    background-color: ${props.theme.colors.orange._600};
    border-radius: ${props.$type === "round" ? "50%" : "0"};
    display: inline-flex;
    height: ${IMAGE_HEIGHTS[props.$type][props.$size]}px;
    justify-content: center;
    width: ${IMAGE_WIDTHS[props.$type][props.$size]}px;

    ${marginProperties(props)}
  `};
`;

export const Styles = {
  IconPlaceholder,
};
