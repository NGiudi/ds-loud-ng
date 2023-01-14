import styled from "styled-components";

import { marginProperties } from "../../../utils/styles";

const Wrapper = styled.div`
  border: none;

  ${(props) => `
    background-color: ${props.theme.colors[props.color]._300};
    height: ${props.theme.components.divider.height};

    ${marginProperties(props)}
  `};
`;

export const Styles = {
  Wrapper,
};
