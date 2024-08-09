import styled from "styled-components";

import { getColor, marginProperties } from "../../../utils/styles";

const Wrapper = styled("div")`
  ${(props) => `  
    border: none;
    background-color: ${getColor(props.theme, props.$color)};
    height: ${props.height || "1px"};

    ${marginProperties(props)}
  `};
`;

export const Styles = {
  Wrapper,
};
