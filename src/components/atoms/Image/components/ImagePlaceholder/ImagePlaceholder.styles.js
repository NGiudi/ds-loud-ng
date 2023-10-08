import styled, { css } from "styled-components";

import { marginProperties } from "../../../../../utils/styles";

const IconPlaceholder = styled("div")`
  ${(props) => css`
    align-items: center;
    background-color: ${props.theme.colors.orange._600};
    border-radius: ${props.$type === "round" ? "50%" : "0"};
    display: inline-flex;
    height: ${props.theme.components.image.height[props.$type][props.$size]}px;
    justify-content: center;
    width: ${props.theme.components.image.width[props.$type][props.$size]}px;

    ${marginProperties(props)}
  `};
`;

export const Styles = {
  IconPlaceholder,
};
