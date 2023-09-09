import styled, { css } from "styled-components";

import { marginProperties } from "../../../../../utils/styles/spacing";

const ButtonsGroup = styled("div")`
  ${(props) => css`
    text-align: end;

    ${marginProperties(props)}
  `}
`;

export const Styles = {
  ButtonsGroup,
};
