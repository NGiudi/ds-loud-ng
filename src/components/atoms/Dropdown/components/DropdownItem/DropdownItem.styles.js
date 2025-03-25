import styled, { css } from "styled-components";

export const ItemWrapper = styled("div")`
  ${(props) => css`
    width: 200px;

    &:hover:not([disabled]) {
      background-color: ${props.theme.colors.black._200};
      overflow: hiddem;
    }

    &[disabled] {
      cursor: not-allowed;
      filter: opacity(50%);
    }
  `}
`;