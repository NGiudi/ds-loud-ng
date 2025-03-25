import styled, { css } from "styled-components";

import { paddingProperties } from "../../../utils/styles";

import { APP_LAYOUT_TOPBAR_HEIGHT } from "../../../assets/styles/app_layout";

export const ContentBox = styled("div")`
  ${(props) => css`
    background-color: ${props.theme.colors.black._100};
    box-sizing: border-box;
    flex-grow: 1;
    height: 100%;
    overflow: auto;

    ${paddingProperties(props, "a-20")}

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: ${props.theme.colors.black._200};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props.theme.colors.black._400};
      border-radius: 4px;
    }
  `}}
`;

export const MainContent = styled("div")`
  display: flex;
  height: calc(100vh - ${APP_LAYOUT_TOPBAR_HEIGHT}px);
  width: 100vw;
`;

export const TopBar = styled("div")`
  ${(props) => css`
    box-sizing: border-box;
    color: ${props.theme.colors.black._100};
    background-color: ${props.theme.colors.black._700};
    box-shadow: ${props.theme.shadows.level3};
    height: ${APP_LAYOUT_TOPBAR_HEIGHT}px;
    position: relative;
    z-index: 80;
    width: 100vw;

    ${paddingProperties(props)}
  `}
`;