import styled, { css } from "styled-components";

import { marginProperties } from "../../../utils/styles";

const ListWrapper = styled("div")`
  ${(props) => css`
    box-sizing: border-box;
    height: 304px;
    margin-top:16px;
    overflow: auto;
    padding-left: 8px;
    padding-right: 8px;
    width: 100%;

    &::-webkit-scrollbar {
      width: ${props.theme.components.appLayout.scroll.width};
    }

    &::-webkit-scrollbar-track {
      background: ${props.theme.colors.black._200};
      border-radius: ${props.theme.components.appLayout.scroll.radius};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props.theme.colors.black._400};
      border-radius: ${props.theme.components.appLayout.scroll.radius};
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
