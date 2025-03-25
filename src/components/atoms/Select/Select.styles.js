import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const Wrapper = styled("div")`
  ${(props) => css`
    ${marginProperties(props)}
  `};
`;

export const Styles = {
  Wrapper,
};