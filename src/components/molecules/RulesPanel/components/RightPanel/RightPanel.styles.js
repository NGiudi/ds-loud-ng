import styled, { css } from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;

  ${(props) =>
    css`
      border-bottom: ${props.isLastItem
        ? "none"
        : `solid 1px ${props.theme.colors.black._300}`};
      padding: ${props.isFirstItem ? "0 0 10px 0" : "10px 0"};
    `}
`;

export const Styles = {
  ButtonsContainer,
  ContentContainer,
};
