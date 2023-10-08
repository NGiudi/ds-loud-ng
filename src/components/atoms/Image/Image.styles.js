import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const ImageStyles = styled("img")`
  ${(props) => css`
    border-radius: ${props.$type === "round" ? "50%" : "0px"};
    display: block;
    height: ${props.theme.components.image.height[props.$type][props.$size]}px;
    object-fit: cover;
    width: ${props.theme.components.image.width[props.$type][props.$size]}px;

    ${marginProperties(props)}
  `};
`;

export const Styles = {
  ImageStyles,
};
