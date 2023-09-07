import styled from "styled-components";

import { getColor, marginProperties } from "../../../utils/styles";

const Wrapper = styled("div")`
  ${(props) => `  
    border: none;
    background-color: ${getColor(props.theme, props.$color)};
    height: ${props.height || props.theme.components.divider.height};

    ${marginProperties(props)}
  `};
`;

export const Styles = {
  Wrapper,
};
