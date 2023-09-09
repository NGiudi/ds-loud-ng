import styled, { css } from "styled-components";

const SelectOption = styled("div")`
  ${(props) => css`
    cursor: pointer;
    padding: 4px 8px;

    &:hover {
      background-color: ${props.theme.colors.black._200};
    }
  `};
`;

export const Styles = {
  SelectOption,
};
