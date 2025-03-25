import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const ListWrapper = styled("div")`
  ${(props) => css`
    box-sizing: border-box;
    margin-top: 16px;
    max-height: 304px;
    overflow: auto;
    padding-right: 8px;
    width: 100%;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: ${props.theme.colors.black._200};
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props.theme.colors.black._400};
      border-radius: 4px;
    }
  `}
`;

const Wraper = styled("div")`
  ${(props) => css`
    ${marginProperties(props)}
  `}
`;

export const Styles = {
  ListWrapper,
  Wraper,
};