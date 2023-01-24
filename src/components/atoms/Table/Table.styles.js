import styled from "styled-components";

import { marginProperties } from "../../../utils/styles";

const Column = styled.div`
  ${(props) => `
    width: ${props.width};
  `}
`;

const Row = styled.div`
  align-items: center;
  border-bottom-style: solid;
  box-sizing: border-box;
  display: flex;
  width: 100%;

  ${(props) => `
    border-bottom-color: ${props.theme.colors.black._400};
    border-bottom-width: ${props.theme.components.table.row.borderBottom.width};
    cursor: ${!props.isHeader ? "pointer" : "default"};
    padding: ${props.theme.components.table.row.padding};

    &:hover {
      background-color: ${
        !props.isHeader ? props.theme.colors.black._200 : "transparent"
      };
    }

    &:hover&:active {
      background-color: ${
        !props.isHeader ? props.theme.colors.black._300 : "transparent"
      };
    }
  `}
`;

const Wrapper = styled.div`
  ${(props) => `
    ${marginProperties(props)}
  `}
`;

export const Styles = {
  Column,
  Row,
  Wrapper,
};
