import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const BarWrapper = styled("div")`
  ${(props) => css`
    background-color: ${props.theme.colors.orange._600};
    height: 6px;
    width: ${props.$porcent ? props.$porcent : "0%"};
  `}
`;

const ProgressBarWrapper = styled("div")`
  ${(props) => css`
    background-color: ${props.theme.colors.black._300};
    border-radius: ${props.$borderRound ? "3px" : "0px"};
    overflow: hidden;
    width: 100%;

    ${marginProperties(props)}
  `}
`;

export const Styles = {
  BarWrapper,
  ProgressBarWrapper,
};