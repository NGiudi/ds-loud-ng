import styled, { css } from "styled-components";

import { paddingProperties } from "../../../utils/styles";

export const ContentBox = styled("div")`
  ${(props) => css`
    background-color: ${props.theme.colors.black._100};
    box-sizing: border-box;
    flex-grow: 1;
    height: 100%;
    overflow: auto;
    
    ${paddingProperties(
      props,
      props.theme.components.appLayout.content.padding,
    )}

    &::-webkit-scrollbar {
      width: ${props.theme.components.appLayout.scroll.width};
    }

    &::-webkit-scrollbar-track {
      background: ${props.theme.colors.black._200};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props.theme.colors.black._400};
      border-radius: ${props.theme.components.appLayout.scroll.radious});
    }
  `}}
`;

export const MainContent = styled("div")`
  ${(props) => css`
    display: flex;
    height: calc(100vh - ${props.theme.components.appLayout.topbar.height});
    width: 100vw;
  `}
`;

export const TopBar = styled("div")`
  ${(props) => css`
    box-sizing: border-box;
    color: ${props.theme.colors.black._100};
    background-color: ${props.theme.colors.black._700};
    box-shadow: ${props.theme.shadows.level3};
    height: ${props.theme.components.appLayout.topbar.height};
    position: relative;
    z-index: 100;
    width: 100vw;

    ${paddingProperties(props)}
  `}
`;
