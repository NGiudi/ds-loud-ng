import styled, { css } from "styled-components";

export const ItemWrapper = styled.div`
  ${(props) => css`
    width: ${props.theme.components.dropdown.panelSize.width};
  `}

  &:hover:not([disabled]) {
    overflow: hiddem;

    ${(props) => css`
      background-color: ${props.theme.colors.black._200};
    `}
  }

  &[disabled] {
    cursor: not-allowed;
    filter: opacity(50%);
  }
`;
