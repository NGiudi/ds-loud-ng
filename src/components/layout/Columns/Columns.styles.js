import styled, { css } from "styled-components";

/* import utils  */
import { marginProperties } from "../../../utils/styles/spacing";

export const Wrapper = styled.div`
  display: grid;

  ${(props) =>
    css`
      grid-template-columns: repeat(${props.children.length}, 1fr);
      grid-column-gap: ${props.$gap};
      grid-row-gap: ${props.$gap};

      ${marginProperties(props)}

      @media only screen and (max-width: ${props.$minWidth}) {
        grid-template-columns: repeat(1, 1fr);
      }
    `}
`;
