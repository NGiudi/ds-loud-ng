import styled, { css } from "styled-components";

const SelectOption = styled.div`
  cursor: pointer;
  padding: 4px 8px;

  ${(props) => css`
    &:hover {
      background-color: ${props.theme.colors.black._200};
    }
  `};
`;

export const Styles = {
  SelectOption,
};
