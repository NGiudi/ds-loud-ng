import styled, { css } from "styled-components";

import { marginProperties } from "../../../../../utils/styles/spacing";

const ButtonsGroup = styled.div`
  text-align: end;

  ${(props) => css`
    ${marginProperties(props)}
  `}
`;

export const Styles = {
  ButtonsGroup,
};
