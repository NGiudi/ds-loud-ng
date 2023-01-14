import styled from "styled-components";

import { marginProperties } from "../../../utils/styles";

export const Wrapper = styled.div`
  align-items: end;
  display: flex;
  justify-content: start;

  ${(props) => `
    ${marginProperties(props)}
  `}
`;

export const Styles = {
  Wrapper,
};
