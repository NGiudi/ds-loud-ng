import styled from "styled-components";

import { marginProperties } from "../../../../../utils/styles";

const Column = styled("div")`
  ${(props) => `
    display: ${props.mobile?.inline ? "inline-block" : "block"};
    width: ${props.mobile?.width ? props.mobile.width : "100%"};
  `};
`;

const Row = styled("div")`
  ${(props) => `
    border-bottom-color: ${props.theme.colors.black._400};
    border-bottom-style: solid;
    border-bottom-width: ${props.theme.components.table.row.borderBottom.width};
    box-sizing: content-box;
    padding: ${props.theme.components.table.row.padding};

    &:hover {
      background-color: ${props.theme.colors.black._200};
    }

    &:hover&:active {
      background-color: ${props.theme.colors.black._300};
    }
  `};
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
