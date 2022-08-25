import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

/* components styles */
export const ProgressBarWrapper = styled.div`
  overflow: hidden;
  width: 100%;

  ${(props) =>
    css`
      background-color: ${props.theme.colors.black._300};
      border-radius: ${props.borderRound &&
      props.theme.components.progressBar.border.radius[props.size]};

      ${marginProperties(props)}
    `}
`;

export const BarWrapper = styled.div`
  ${(props) =>
    css`
      background-color: ${props.theme.colors.orange._700};
      height: ${props.size &&
      props.theme.components.progressBar.height[props.size]};
      width: ${props.porcent ? props.porcent : "0%"};
    `}
`;
