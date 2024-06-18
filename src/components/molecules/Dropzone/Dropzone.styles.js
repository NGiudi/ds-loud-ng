import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const Wraper = styled("div")`
  ${(props) => css`
    ${marginProperties(props)}
  `}
`;

export const Styles = {
  Wraper,
};
