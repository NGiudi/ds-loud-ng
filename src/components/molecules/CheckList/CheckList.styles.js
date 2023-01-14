import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const Wrapper = styled.div`
  ${(props) =>
    css`
      cursor: ${props.clickable && "pointer"};

      ${marginProperties(props)}
    `}
`;

const ItemWrapper = styled.div`
  display: table;
`;

const ListItem = styled.div`
  align-items: center;
  display: flex;

  ${(props) =>
    css`
      color: ${props.checked
        ? props.theme.colors.alert.colors.success
        : props.theme.colors.black._300};
    `}
`;

export const Styles = {
  ItemWrapper,
  ListItem,
  Wrapper,
};
