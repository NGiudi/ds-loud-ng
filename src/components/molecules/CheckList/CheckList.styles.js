import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const Wrapper = styled("div")`
  ${(props) => css`
    cursor: ${props.$clickable ? "pointer" : "auto"};

    ${marginProperties(props)}
  `}
`;

const ItemWrapper = styled("div")`
  display: table;
`;

const ListItem = styled("div")`
  ${(props) => css`
    align-items: center;
    color: ${props.checked
      ? props.theme.colors.alert.colors.success
      : props.theme.colors.black._300};
    display: flex;
  `}
`;

export const Styles = {
  ItemWrapper,
  ListItem,
  Wrapper,
};
