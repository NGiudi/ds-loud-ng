import styled from "styled-components";

import { marginProperties } from "../../../utils/styles";

const Wrapper = styled.div`
  border: none;

  ${(props) => `
    background-color: ${
      typeof props.$color === "object"
        ? props.theme.colors[props.$color.tone][`_${props.$color.intensity}`]
        : props.$color
    };
    height: ${props.theme.components.divider.height};

    ${marginProperties(props)}
  `};
`;

export const Styles = {
  Wrapper,
};
