import styled, { css } from "styled-components";

/* import utils  */
import { marginProperties } from "../../../utils/styles/spacing";

export const Wrapper = styled.div`
  display: grid;

  ${(props) =>
    css`
      ${marginProperties(props)}
    `}
`;
