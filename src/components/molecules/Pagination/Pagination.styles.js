import styled from "styled-components";

import { marginProperties } from "../../../utils/styles";

export const Wrapper = styled("div")`
  ${(props) => `
    align-items: end;
    display: flex;
    justify-content: start;
    
    ${marginProperties(props)}
  `}
`;

export const Styles = {
  Wrapper,
};