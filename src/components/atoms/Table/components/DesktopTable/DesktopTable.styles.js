import styled from "styled-components";

import { marginProperties } from "../../../../../utils/styles";

const Column = styled("div")`
  ${(props) => `
    width: ${props.width};
  `}
`;

const Row = styled("div")`
  ${(props) => `
    align-items: center;
    border-bottom-color: ${props.theme.colors.black._400};
    border-bottom-style: solid;
    border-bottom-width: 1px;
    box-sizing: border-box;
    cursor: ${!props.$isHeader ? "pointer" : "default"};
    display: flex;
    padding: 8px 16px;
    width: 100%;

    &:hover {
      background-color: ${
        !props.$isHeader ? props.theme.colors.black._200 : "transparent"
      };
    }

    &:hover&:active {
      background-color: ${
        !props.$isHeader ? props.theme.colors.black._300 : "transparent"
      };
    }
  `}
`;

const Wrapper = styled("div")`
  ${(props) => `
    ${marginProperties(props)}
  `}
`;

export const Styles = {
  Column,
  Row,
  Wrapper,
};
