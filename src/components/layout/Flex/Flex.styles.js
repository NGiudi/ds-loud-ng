import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const Wrapper = styled("div")`
  ${(props) => css`
    align-items: ${props.$vAlign};
    display: flex;
    justify-content: ${props.$hAlign};

    ${marginProperties(props)}
  `}
`;

export const Styles = {
  Wrapper,
};
