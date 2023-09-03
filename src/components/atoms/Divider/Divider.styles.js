import styled from "styled-components";

import { getColor, marginProperties } from "../../../utils/styles";

const Wrapper = styled.div`
  border: none;

  ${(props) => `
    background-color: ${getColor(props.theme, props.$color)};
    height: ${props.theme.components.divider.height};

    ${marginProperties(props)}
  `};
`;

export const Styles = {
  Wrapper,
};
