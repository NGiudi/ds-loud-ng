import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

import { IMAGE_HEIGHTS, IMAGE_WIDTHS } from "../../../assets/styles/image";

const ImageStyles = styled("img")`
  ${(props) => css`
    border-radius: ${props.$type === "round" ? "50%" : "0px"};
    display: block;
    height: ${IMAGE_HEIGHTS[props.$type][props.$size]};
    object-fit: cover;
    width: ${IMAGE_WIDTHS[props.$type][props.$size]};

    ${marginProperties(props)}
  `};
`;

export const Styles = {
  ImageStyles,
};
