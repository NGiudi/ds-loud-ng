import styled, { css } from "styled-components";

export const ItemWrapper = styled("div")`
  ${(props) => css`
    width: ${props.theme.components.dropdown.panelSize.width};

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
