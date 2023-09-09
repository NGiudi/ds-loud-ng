import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const BarWrapper = styled("div")`
  ${(props) => css`
    background-color: ${props.theme.colors.orange._600};
    height: ${props.size &&
    props.theme.components.progressBar.height[props.size]};
    width: ${props.$porcent ? props.$porcent : "0%"};
  `}
`;

const ProgressBarWrapper = styled("div")`
  ${(props) => css`
    background-color: ${props.theme.colors.black._300};
    border-radius: ${props.$borderRound &&
    props.theme.components.progressBar.border.radius[props.size]};
    overflow: hidden;
    width: 100%;

    ${marginProperties(props)}
  `}
`;

export const Styles = {
  BarWrapper,
  ProgressBarWrapper,
};
